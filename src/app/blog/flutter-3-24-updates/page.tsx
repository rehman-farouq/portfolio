import { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User, Tag, Code, Zap, Smartphone, Palette } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

// Get yesterday's date
const getYesterdayDate = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const metadata: Metadata = {
  title: "Flutter 3.24 Updates 2026 | Rehman Farouq",
  description: "Explore Flutter 3.24 updates including new widgets, performance improvements, enhanced web support, better tooling, and new platform capabilities.",
  keywords: "Flutter 3.24 updates, Flutter new widgets, Flutter performance, Flutter web support, Flutter 2026, Flutter tutorial, mobile app development, cross-platform development",
  authors: [{ name: "Rehman Farouq" }],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rehman Farouq – Flutter & Next.js Developer" }],
    title: "Flutter 3.24 Updates 2026 | Rehman Farouq",
    description: "Complete guide to Flutter 3.24 updates with practical examples and best practices.",
    url: "https://rehmanfarouq.site/blog/flutter-3-24-updates",
    type: "article",
    siteName: "Rehman Farouq Blog",
    publishedTime: new Date().toISOString(),
    authors: ["Rehman Farouq"],
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Flutter 3.24 Updates 2026",
    description: "Explore Flutter 3.24 updates including new widgets and performance improvements.",
    creator: "@rehmanfarouq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rehmanfarouq.site/blog/flutter-3-24-updates",
  },
}

export default function Flutter324Updates() {
  const yesterdayDate = getYesterdayDate()

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="site-subnav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/blog"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-foreground dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Blog</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Blog</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Tutorial</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                Tutorial
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Calendar size={14} />
                {yesterdayDate}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={14} />
                16 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Flutter 3.24 Updates 2026: What's New in Flutter
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Discover the latest Flutter 3.24 updates including new widgets, performance improvements, enhanced web support, and powerful new features for cross-platform development.
            </p>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 prose prose-lg prose-gray dark:prose-invert max-w-none">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              <div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-gray-500" />
                  <span className="font-medium text-gray-900 dark:text-white">Rehman Farouq</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full Stack Developer | Flutter Expert
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction to Flutter 3.24</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Flutter 3.24 brings significant improvements to the framework, focusing on performance, developer experience, and platform capabilities. This release includes new widgets, enhanced web support, and better tooling.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Let's explore the most important updates and how to leverage them in your Flutter applications.
              </p>
            </section>

            {/* New Widgets */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Smartphone className="text-cyan-600" size={24} />
                New Widgets and Components
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Flutter 3.24 introduces several new widgets that make building beautiful UIs easier than ever.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// New AdaptiveScaffold widget
import 'package:flutter/material.dart';

class AdaptiveLayout extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AdaptiveScaffold(
      destinations: [
        AdaptiveScaffoldDestination(
          icon: Icons.home,
          title: 'Home',
        ),
        AdaptiveScaffoldDestination(
          icon: Icons.search,
          title: 'Search',
        ),
        AdaptiveScaffoldDestination(
          icon: Icons.person,
          title: 'Profile',
        ),
      ],
      body: (_) => Center(child: Text('Content')),
    );
  }
}

// New Material 3 components
MaterialApp(
  theme: ThemeData(
    useMaterial3: true,
    colorSchemeSeed: Colors.blue,
  ),
  home: Scaffold(
    appBar: AppBar(
      title: Text('Material 3'),
    ),
    body: Column(
      children: [
        // New filled button
        FilledButton(
          onPressed: () {},
          child: Text('Filled Button'),
        ),
        
        // New tonal button
        FilledButton.tonal(
          onPressed: () {},
          child: Text('Tonal Button'),
        ),
        
        // New outlined button
        OutlinedButton(
          onPressed: () {},
          child: Text('Outlined Button'),
        ),
        
        // New text button
        TextButton(
          onPressed: () {},
          child: Text('Text Button'),
        ),
      ],
    ),
  ),
)

// New SegmentedButton widget
SegmentedButton(
  segments: [
    ButtonSegment(
      value: 'day',
      label: Text('Day'),
      icon: Icon(Icons.wb_sunny),
    ),
    ButtonSegment(
      value: 'week',
      label: Text('Week'),
      icon: Icon(Icons.calendar_view_week),
    ),
    ButtonSegment(
      value: 'month',
      label: Text('Month'),
      icon: Icon(Icons.calendar_month),
    ),
  ],
  selected: {'day'},
  onSelectionChanged: (Set<String> newSelection) {
    print('Selected: \$newSelection');
  },
)}`}
                </pre>
              </div>
            </section>

            {/* Performance Improvements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="text-cyan-600" size={24} />
                Performance Improvements
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Significant performance enhancements across the framework for smoother animations and faster rendering.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Improved Impeller rendering engine
// Enabled by default in Flutter 3.24

// Performance optimizations
class OptimizedWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RepaintBoundary(
      child: CustomPaint(
        painter: MyCustomPainter(),
        child: Container(),
      ),
    );
  }
}

// Lazy loading with ListView.builder
ListView.builder(
  itemCount: 1000,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text('Item \$index'),
    );
  },
  cacheExtent: 500, // Improved caching
)

// Optimized animations
AnimatedBuilder(
  animation: controller,
  builder: (context, child) {
    return Transform.rotate(
      angle: controller.value * 2 * pi,
      child: child,
    );
  },
  child: FlutterLogo(),
)

// Improved image loading
Image.network(
  'https://example.com/image.jpg',
  loadingBuilder: (context, child, loadingProgress) {
    if (loadingProgress == null) return child;
    return Center(
      child: CircularProgressIndicator(
        value: loadingProgress.expectedTotalBytes != null
            ? loadingProgress.cumulativeBytesLoaded /
                loadingProgress.expectedTotalBytes!
            : null,
      ),
    );
  },
  errorBuilder: (context, error, stackTrace) {
    return Icon(Icons.error);
  ),
)}`}
                </pre>
              </div>
            </section>

            {/* Enhanced Web Support */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enhanced Web Support</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Flutter web receives significant improvements with better performance and new web-specific features.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Web-specific configurations
// web/index.html
<!DOCTYPE html>
<html>
<head>
  <base href="/">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flutter Web App</title>
  <link rel="manifest" href="manifest.json">
</head>
<body>
  <script src="flutter_bootstrap.js" async></script>
</body>
</html>

// PWA configuration
// web/manifest.json
{
  "name": "Flutter Web App",
  "short_name": "Flutter App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0175C2",
  "icons": [
    {
      "src": "icons/Icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/Icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

// Web-specific code
import 'dart:html' as html;

if (kIsWeb) {
  // Access web APIs
  final url = html.window.location.href;
  html.window.history.pushState(null, '', '/new-route');
  
  // Local storage
  final storage = html.window.localStorage;
  storage.setItem('key', 'value');
}

// Responsive web design
class ResponsiveLayout extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth > 1200) {
          return DesktopLayout();
        } else if (constraints.maxWidth > 600) {
          return TabletLayout();
        } else {
          return MobileLayout();
        }
      },
    );
  }
}`}
                </pre>
              </div>
            </section>

            {/* New Platform Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">New Platform Features</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Enhanced platform integration with new APIs and better platform-specific features.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Platform-specific code
import 'dart:io' show Platform;

class PlatformFeatures extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    if (Platform.isAndroid) {
      return AndroidFeatures();
    } else if (Platform.isIOS) {
      return IOSFeatures();
    } else if (Platform.isWindows) {
      return WindowsFeatures();
    } else if (Platform.isMacOS) {
      return MacOSFeatures();
    } else if (Platform.isLinux) {
      return LinuxFeatures();
    }
    return WebFeatures();
  }
}

// New platform channels
import 'package:flutter/services.dart';

class NativeBridge {
  static const platform = MethodChannel('com.example.app/native');

  static Future<String> getNativeData() async {
    try {
      final String result = await platform.invokeMethod('getData');
      return result;
    } on PlatformException catch (e) {
      return 'Failed: \${e.message}';
    }
  }

  static Future<void> sendToNative(String data) async {
    try {
      await platform.invokeMethod('sendData', {'data': data});
    } on PlatformException catch (e) {
      print('Error: \${e.message}');
    }
  }
}

// Background processing
import 'package:workmanager/workmanager.dart';

void callbackDispatcher() {
  Workmanager().executeTask((task, inputData) {
    print('Task executed: \$task');
    return Future.value(true);
  });
}

// Initialize background tasks
void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Workmanager().initialize(callbackDispatcher);
  runApp(MyApp());
}`}
                </pre>
              </div>
            </section>

            {/* Improved Tooling */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Improved Developer Tooling</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Better development tools with enhanced debugging, testing, and hot reload capabilities.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Enhanced DevTools
// Run: flutter pub global activate devtools
// Run: flutter pub global run devtools

// Improved hot reload
// Automatic hot reload on save
// Hot restart for state changes
// Hot reload for UI changes

// Enhanced testing
// test/widget_test.dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('MyWidget has a title', (tester) async {
    await tester.pumpWidget(MyWidget());
    expect(find.text('Hello'), findsOneWidget);
  });

  testWidgets('Button tap triggers action', (tester) async {
    bool tapped = false;
    await tester.pumpWidget(
      MaterialApp(
        home: ElevatedButton(
          onPressed: () => tapped = true,
          child: Text('Tap me'),
        ),
      ),
    );
    
    await tester.tap(find.text('Tap me'));
    await tester.pump();
    
    expect(tapped, true);
  });
}

// Integration testing
// integration_test/app_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  
  testWidgets('end-to-end test', (tester) async {
    await tester.pumpWidget(MyApp());
    
    await tester.enterText(find.byType(TextField), 'Hello');
    await tester.tap(find.text('Submit'));
    await tester.pumpAndSettle();
    
    expect(find.text('Success'), findsOneWidget);
  });
}

// Performance profiling
// Run: flutter run --profile
// Use DevTools to analyze performance
// Check frame rendering times
// Monitor memory usage}`}
                </pre>
              </div>
            </section>

            {/* Material 3 Updates */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Palette className="text-cyan-600" size={24} />
                Material 3 Design System
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Complete Material 3 implementation with updated components and design tokens.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-300">
{`// Material 3 theme configuration
MaterialApp(
  theme: ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.blue,
      brightness: Brightness.light,
    ),
    fontFamily: 'Roboto',
  ),
  darkTheme: ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: Colors.blue,
      brightness: Brightness.dark,
    ),
    fontFamily: 'Roboto',
  ),
  themeMode: ThemeMode.system,
  home: MyHomePage(),
)

// Material 3 components
Card(
  elevation: 0,
  child: Padding(
    padding: EdgeInsets.all(16),
    child: Column(
      children: [
        ListTile(
          leading: Icon(Icons.account_circle),
          title: Text('User Profile'),
          subtitle: Text('View and edit your profile'),
          trailing: Icon(Icons.chevron_right),
        ),
        Divider(),
        ListTile(
          leading: Icon(Icons.settings),
          title: Text('Settings'),
          subtitle: Text('App preferences'),
          trailing: Icon(Icons.chevron_right),
        ),
      ],
    ),
  ),
)

// Navigation rail and drawer
NavigationRail(
  destinations: [
    NavigationRailDestination(
      icon: Icon(Icons.home),
      selectedIcon: Icon(Icons.home_filled),
      label: Text('Home'),
    ),
    NavigationRailDestination(
      icon: Icon(Icons.search),
      selectedIcon: Icon(Icons.search),
      label: Text('Search'),
    ),
  ],
  selectedIndex: 0,
  onDestinationSelected: (index) {
    print('Selected: \$index');
  },
)}`}
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Flutter 3.24 Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-cyan-900 dark:text-cyan-300 mb-2">Performance</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use const constructors</li>
                    <li>• Implement lazy loading</li>
                    <li>• Optimize widget rebuilds</li>
                    <li>• Use RepaintBoundary wisely</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Architecture</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Follow BLoC pattern</li>
                    <li>• Use dependency injection</li>
                    <li>• Separate UI from logic</li>
                    <li>• Implement clean architecture</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">Testing</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Write unit tests</li>
                    <li>• Implement widget tests</li>
                    <li>• Add integration tests</li>
                    <li>• Test platform-specific code</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Platform</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Test on all platforms</li>
                    <li>• Handle platform differences</li>
                    <li>• Use platform channels</li>
                    <li>• Optimize for each platform</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Flutter 3.24 brings significant improvements across the board, from new widgets and Material 3 support to enhanced performance and better web capabilities. These updates make Flutter an even more powerful framework for cross-platform development.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Start exploring these new features in your projects and leverage them to build better, faster, and more beautiful applications.
              </p>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build with Flutter 3.24?</h3>
              <p className="text-white/90 mb-6">
                Explore more Flutter tutorials and start building amazing cross-platform apps!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="px-6 py-3 bg-white text-cyan-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  More Tutorials
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
