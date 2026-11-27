---
title: "Flutter Firebase Authentication: Email & Google Sign-In"
description: "Learn how to implement Flutter Firebase authentication with email, password, and Google sign-in using stable architectural patterns and secure code."
category: "Tutorial"
publishedAt: "2026-11-27T14:40:58.083Z"
updatedAt: "2026-11-27T14:40:58.083Z"
keywords: ["Flutter Firebase authentication","Firebase auth Flutter tutorial","Flutter Google sign in","Flutter email password authentication","Firebase authentication guide","Flutter state management auth"]
tags: ["Flutter","Firebase","Authentication","Mobile"]
faqs: [{"q":"Why is my Google sign-in failing with a platform exception in Flutter?","a":"This is almost always caused by a missing or incorrect SHA-1 signing certificate fingerprint in your Firebase Console project settings for Android, or a missing reversed client ID in your iOS Info.plist file."},{"q":"How do I keep the user logged in across app restarts?","a":"Firebase Auth handles token persistence automatically by default. You can listen to the FirebaseAuth.instance.authStateChanges() stream to detect existing sessions upon app startup."},{"q":"Should I store user profile data directly in Firebase Auth?","a":"Firebase Auth only stores basic profile details like display name, email, and photo URL. For extended user metadata or application data, you should store documents in Cloud Firestore or Realtime Database linked by the user ID."}]
lane: "evergreen"
---

Implementing secure user identification is a fundamental requirement for most production applications. Setting up Flutter Firebase authentication allows developers to leverage a fully managed backend service for handling credentials, tokens, and multi-factor providers without maintaining custom infrastructure. This guide covers the integration of email and password credentials alongside Google sign-in flows using current best practices.

## Setting up the Firebase Project and Dependencies

Before writing any Dart code, you must configure your project within the Firebase Console. Create a new project, enable the Authentication service, and activate the Email/Password and Google sign-in providers. For Google authentication, you will need to provide your application package name and SHA-1 signing certificate fingerprints for Android, as well as the reversed client ID configuration for iOS. This step is critical because missing configuration values will cause the Google sign-in flow to fail silently or throw platform exceptions.

Once the console setup is complete, you need to add the required packages to your Flutter project. Open your pubspec.yaml file and add the core Firebase package along with the authentication and Google sign-in plugins. It is recommended to check package documentation for the correct setup of configuration files like google-services.json on Android and GoogleService-Info.plist on iOS. Keeping your initialization centralized ensures that authentication services are ready before the main widget tree renders. You can initialize Firebase inside your main function by ensuring widget bindings are initialized and calling the initialization method with your platform-specific options.

```dart
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}
```

## Designing an Authentication Architecture

Proper state management and separation of concerns are essential when dealing with user sessions. Mixing UI logic with direct calls to Firebase Auth often leads to tightly coupled code that is difficult to test and maintain. Instead, encapsulate your authentication logic inside a dedicated service or repository class. This repository should expose methods for signing in, registering, signing out, and streaming the current authentication state changes.

To manage state across the application, you can utilize modern reactive patterns or state management libraries. The FirebaseAuth instance provides an authStateChanges stream that emits a user object whenever the authentication state changes. Listening to this stream allows your root widget to dynamically switch between the login screen and the home dashboard without manual route manipulation. For a structured approach to state, consider organizing your project layers carefully, referencing patterns similar to those discussed in our guide on Flutter Clean Architecture and MVVM Setup Guide.

```dart
import 'package:firebase_auth/firebase_auth.dart';

class AuthService {
  final FirebaseAuth _firebaseAuth = FirebaseAuth.instance;

  Stream<User?> get authStateChanges => _firebaseAuth.authStateChanges();

  User? get currentUser => _firebaseAuth.currentUser;

  Future<User?> signInWithEmail(String email, String password) async {
    try {
      UserCredential credential = await _firebaseAuth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
      return credential.user;
    } on FirebaseAuthException catch (e) {
      throw _handleAuthException(e);
    }
  }

  Future<User?> registerWithEmail(String email, String password) async {
    try {
      UserCredential credential = await _firebaseAuth.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );
      return credential.user;
    } on FirebaseAuthException catch (e) {
      throw _handleAuthException(e);
    }
  }

  Future<void> signOut() async {
    await _firebaseAuth.signOut();
  }

  String _handleAuthException(FirebaseAuthException e) {
    switch (e.code) {
      case 'user-not-found':
        return 'No user found for that email.';
      case 'wrong-password':
        return 'Wrong password provided for that user.';
      case 'email-already-in-use':
        return 'The account already exists for that email.';
      default:
        return 'Authentication failed. Please try again.';
    }
  }
}
```

## Implementing Email and Password Authentication

Building the user interface for email and password authentication requires standard form elements with proper validation logic. You should wrap your text fields inside a Form widget and utilize a GlobalKey to manage form validation state. Ensuring that inputs are validated before triggering network requests prevents unnecessary API calls and improves user experience by offering immediate feedback on formatting errors.

When implementing registration forms, always include a confirmation field for passwords and enforce minimum length requirements. Password management should also handle edge cases gracefully, such as network timeouts or existing accounts. When an exception occurs, catch the specific Firebase error codes and display clear, localized messages to the user rather than raw system error strings. If you are exploring broader package ecosystems to enhance your form handling and utility functions, you may find our overview of 25 Essential Flutter Packages useful.

```dart
class EmailAuthScreen extends StatefulWidget {
  const EmailAuthScreen({Key? key}) : super(key: key);

  @override
  State<EmailAuthScreen> createState() => _EmailAuthScreenState();
}

class _EmailAuthScreenState extends State<EmailAuthScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final AuthService _authService = AuthService();
  bool _isLoading = false;

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() => _isLoading = true);
    try {
      await _authService.signInWithEmail(
        _emailController.text.trim(),
        _passwordController.text.trim(),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).show(
        SnackBar(content: Text(e.toString())),
      );
    } finally {
      setState(() => _isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        for(Form(key: _formKey, child: Column(children: [
          TextFormField(
            controller: _emailController,
            decoration: const InputDecoration(labelText: 'Email'),
            validator: (value) => value!.isEmpty ? 'Enter an email' : null,
          ),
          TextFormField(
            controller: _passwordController,
            decoration: const InputDecoration(labelText: 'Password'),
            obscureText: true,
            validator: (value) => value!.length < 6 ? 'Password too short' : null,
          ),
          const SizedBox(height: 20),
          _isLoading
              ? const CircularProgressIndicator()
              : ElevatedButton(onPressed: _submit, child: const Text('Sign In'))
        ]))),
      ),
    );
  }
}
```

## Integrating Google Sign-In

Adding Google sign-in provides a friction-free alternative for users who prefer not to create yet another password. The integration requires the google_sign_in package alongside firebase_auth. The authentication flow involves triggering the native Google sign-in dialog, retrieving the authentication tokens from the resulting GoogleSignInAccount, and then exchanging those credentials for a Firebase Auth credential using GoogleAuthProvider.

Platform configuration is particularly strict for Google sign-in. On iOS, you must configure the CFBundleURLTypes inside the Info.plist file with your reversed client ID. On Android, ensuring your SHA-1 fingerprint is correctly registered in the Firebase console is mandatory, otherwise the sign-in modal will dismiss immediately or return a developer error. Once the credential is created, you pass it to the Firebase Auth instance to complete the sign-in process.

```dart
import 'package:google_sign_in/google_sign_in.dart';
import 'package:firebase_auth/firebase_auth.dart';

class GoogleAuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final GoogleSignIn _googleSignIn = GoogleSignIn();

  Future<User?> signInWithGoogle() async {
    try {
      final GoogleSignInAccount? googleUser = await _googleSignIn.signIn();
      if (googleUser == null) return null;

      final GoogleSignInAuthentication googleAuth = await googleUser.authentication;

      final OAuthCredential credential = GoogleAuthProvider.credential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );

      UserCredential userCredential = await _auth.signInWithCredential(credential);
      return userCredential.user;
    } catch (e) {
      return null;
    }
  }

  Future<void> signOutGoogle() async {
    await _googleSignIn.signOut();
    await _auth.signOut();
  }
}
```

## Handling Session Persistence and Route Protection

Managing user sessions across app restarts requires listening to the auth state stream and conditionally rendering navigation routes. When a user opens the application, checking the initial authentication state prevents flashing the login screen if a valid session already exists. You can implement a splash screen or an initialization wrapper that listens to the auth stream and directs the user to either the home view or the authentication view accordingly.

Furthermore, securing individual routes against unauthorized access ensures that deep-linked or cached pages cannot be viewed without a valid session. By wrapping your navigation logic with guards that check the current user status, you maintain security integrity throughout the application lifecycle. Always remember to dispose of your stream subscriptions when widgets are removed from the tree to avoid memory leaks.

## Key takeaways

- Centralize authentication logic within dedicated services rather than placing Firebase calls directly inside UI components.
- Always handle platform-specific configurations like SHA-1 fingerprints and URL schemes carefully when implementing Google sign-in.
- Utilize the authStateChanges stream for reactive session management and seamless navigation routing.
- Catch specific FirebaseAuthException error codes to provide clear, actionable feedback to users.
