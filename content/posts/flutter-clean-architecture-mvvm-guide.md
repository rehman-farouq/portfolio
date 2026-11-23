---
title: "Flutter Clean Architecture and MVVM Setup Guide"
description: "Learn how to structure a Flutter app using Clean Architecture and MVVM. Build scalable, maintainable, and testable mobile applications."
category: "Tutorial"
publishedAt: "2026-11-23T05:27:30.029Z"
updatedAt: "2026-11-23T05:27:30.029Z"
keywords: ["Flutter clean architecture","MVVM Flutter","Flutter app structure","Clean architecture folder structure","Flutter state management","Repository pattern Flutter"]
tags: ["Flutter","Architecture","MVVM","Clean Architecture"]
faqs: [{"q":"What is the main benefit of using Clean Architecture in Flutter?","a":"The primary benefit is separation of concerns. It isolates business logic from UI frameworks and external data sources, making your app easier to test, maintain, and scale over time."},{"q":"Should every Flutter project use Clean Architecture?","a":"Not necessarily. Small projects, MVPs, or simple scripts may find the folder structure and boilerplate excessive. Clean Architecture shines in medium to large applications with long-term maintenance needs."},{"q":"How does MVVM fit into Clean Architecture?","a":"MVVM operates strictly within the presentation layer. The View renders UI, the ViewModel handles presentation logic and calls domain use cases, and the Model represents UI state."},{"q":"Where should dependency injection be configured?","a":"Dependency injection containers or setup files are typically placed in the core directory or at the root of the application, wiring data sources to repositories and repositories to use cases."}]
lane: "evergreen"
---

Structuring a scalable mobile application requires a deliberate separation of concerns to ensure long-term maintainability and testability. By combining the Model-View-ViewModel pattern with **Flutter clean architecture**, you can isolate your core business logic from UI frameworks and external data sources. This guide walks through the exact folder layout, layer separation, and practical implementation details required to build robust Flutter applications.

## Understanding the Core Layers of Clean Architecture

Clean Architecture divides your application into concentric circles or distinct horizontal layers, with the rule of dependency pointing inward. The inner layers must never know about the outer layers. In a typical Flutter project, these layers translate to domain, data, and presentation.

The domain layer sits at the absolute center. It contains business models, use cases, and abstract repository interfaces. This layer has zero dependencies on Flutter packages or external frameworks like Firebase or HTTP clients. Pure Dart code lives here, which means you can write unit tests for your core business logic without initializing the Flutter widget testing framework.

The data layer implements the abstract repositories defined in the domain layer. It handles communication with external agencies such as REST APIs, local databases, or device sensors. It maps raw data models from JSON or SQL into domain entities, shielding the inner layers from third-party API changes.

The presentation layer contains the UI components, screens, and state management logic. Using MVVM within this layer ensures that widgets remain purely declarative, rendering whatever state the ViewModel provides without executing business calculations directly inside the widget tree.

## Designing the Folder Structure

Maintaining a clean folder structure prevents circular dependencies and keeps your codebase navigable as the project grows. A feature-first approach combined with architectural layering works exceptionally well for medium to large applications.

Consider the following directory layout inside your project root:

```text
lib/
  core/
    errors/
    network/
    utils/
  features/
    authentication/
      data/
        datasources/
        models/
        repositories/
      domain/
        entities/
        repositories/
        usecases/
      presentation/
        viewmodels/
        views/
        widgets/
  app.dart
  main.dart
```

The core directory holds application-wide utilities, error handling classes, and network client configurations. Each feature directory contains its own data, domain, and presentation folders. This structure ensures that when you refactor or remove a feature, all related code lives in a single, predictable location.

For readers looking to expand their foundational knowledge before diving into advanced patterns, you can review how to learn flutter for additional context on mastering core Dart fundamentals first.

## Implementing the Domain Layer

Building a feature starts from the inside out, beginning with the domain layer. You define the pure business rules first, independent of how data will be fetched or displayed.

First, define a basic entity. An entity is a plain Dart object representing a core business concept.

```dart
class User {
  final String id;
  final String email;

  const User({required this.id, required this.email});
}
```

Next, define an abstract repository interface that dictates what data operations are possible, without specifying how they are executed.

```dart
abstract class UserRepository {
  Future<User> getUserProfile(String userId);
}
```

Finally, create a use case. A use case represents a single business action or interaction. It takes the repository as a dependency and exposes a call method.

```dart
class GetUserProfileUseCase {
  final UserRepository repository;

  GetUserProfileUseCase(this.repository);

  Future<User> call(String userId) async {
    return await repository.getUserProfile(userId);
  }
}
```

This separation guarantees that your business logic remains completely isolated. If you need to switch from a REST API to GraphQL, your domain use cases remain entirely untouched.

## Implementing the Data Layer and Repositories

Once the domain contract is established, the data layer implements it. This layer converts raw responses into domain entities using data models that extend or map to domain entities.

Create a data model that extends or maps to the domain entity, adding JSON serialization methods.

```dart
class UserModel extends User {
  const UserModel({required String id, required String email}) 
      : super(id: id, email: email);

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['id'] as String,
      email: json['email'] as String,
    );
  }
}
```

Implement the concrete repository by extending the abstract domain repository interface.

```dart
class UserRepositoryImpl implements UserRepository {
  final ApiClient apiClient;

  UserRepositoryImpl({required this.apiClient});

  @override
  Future<User> getUserProfile(String userId) async {
    final jsonResponse = await apiClient.get('/users/$userId');
    return UserModel.fromJson(jsonResponse);
  }
}
```

By keeping network parsing inside the data layer, your core business rules stay protected against unexpected changes in backend API payload formats.

## Integrating MVVM in the Presentation Layer

In the presentation layer, the MVVM pattern manages UI state and user interactions. The View observes the ViewModel, which in turn calls domain use cases and exposes observable state properties.

Using a state management solution like Provider, Riverpod, or ValueNotifier, you can structure a ViewModel as follows:

```dart
class UserViewModel extends ChangeNotifier {
  final GetUserProfileUseCase getUserProfileUseCase;

  UserViewModel({required this.getUserProfileUseCase});

  User? _user;
  User? get user => _user;

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  String? _error;
  String? get error => _error;

  Future<void> fetchUser(String userId) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      _user = await getUserProfileUseCase(userId);
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
```

The corresponding View listens to this ViewModel, rebuilding only when state changes occur. Keeping UI logic thin and declarative reduces bugs and simplifies widget testing.

For developers exploring package selection to handle state management or dependency injection in clean architectures, reviewing essential packages can help streamline your setup.

## Key takeaways

- Separate your application into domain, data, and presentation layers to maintain strict dependency rules pointing inward.
- Keep the domain layer free of Flutter dependencies and external frameworks to ensure maximum testability.
- Implement a feature-first folder structure to keep related code grouped together as your codebase scales.
- Use the MVVM pattern within the presentation layer to keep your widgets declarative and focused solely on rendering state.
