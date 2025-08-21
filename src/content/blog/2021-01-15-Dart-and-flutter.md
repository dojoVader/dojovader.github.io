---
title: "Flutter Architecture and Internals"
excerpt: "This is my notes and finding in learning Flutter Development"
categories:
  - Dart
publishDate: "Jan 15, 2021"
author: "Okeowo Aderemi"
tags:
  - Flutter
---

I have always had flair for working on the Mobile Platform, my experience stems from my personal experience with Nokia LWUIT (J2ME) , Blackberry Development ( Java ), Cordova and Webworks, I had the choice of leaning towards React Native, but once I got familiar with how it works internally it made more sense to stick to Flutter. React Native is nice and an interesting project no doubt, but the Single Thread nature of JavaScript was the deciding factor for me to lean towards Flutter. With Flutter I believe I have more control over the UI. Here are some notes, I find important to note down.


### Research on Flutter Architecture

Below is an image of the Flutter Architecture

![Flutter Image](https://flutter.dev/images/arch-overview/archdiagram.png)

### Important Notes

* At the core of Flutter is the Flutter engine, which is mostly written in C++ and supports the primitives necessary to support all Flutter applications. The engine is responsible for rasterizing composited scenes whenever a new frame needs to be painted. It provides the low-level implementation of Flutter’s core API, including graphics (through Skia), text layout, file and network I/O, accessibility support, plugin architecture, and a Dart runtime and compile toolchain.

* Skia Engine is responsible for the UI and can delegate to either Vulkan API or OpenGL ES depending on the GPU Capability

* External Features are exposed via Packages communicating to the OS API

* State Driven Development , UI (Widget) reacts to the (State) Data

* Widgets are heirarchy and can listens to data from the parents,

* Widgets should developed with a Single Responsiblity Approach


### [Widgets](https://flutter.dev/docs/resources/architectural-overview#widgets)

The visual representation of Widgets can be overridden in the build method, this is similar to Canvas in J2ME and Blackberry Development. It is noted that heavy computation will no doubt have to be avoided in this method, We need a worker/Thread to update state in the Main thread.

### [States in Widgets](https://flutter.dev/docs/resources/architectural-overview#widget-state)

* Stateless Widget - Widgets for non mutable states
* Stateful Widget - mutable class which extends StateFulWidgets

BuildContext holds information for the Widget Tree

### Rendering and Layout

### Important Details

>Flutter’s rendering model
You may be wondering: if Flutter is a cross-platform framework, then how can it offer comparable performance to single-platform frameworks?

>It’s useful to start by thinking about how traditional Android apps work. When drawing, you first call the Java code of the Android framework. The Android system libraries provide the components responsible for drawing themselves to a Canvas object, which Android can then render with Skia, a graphics engine written in C/C++ that calls the CPU or GPU to complete the drawing on the device.

>Cross-platform frameworks typically work by creating an abstraction layer over the underlying native Android and iOS UI libraries, attempting to smooth out the inconsistencies of each platform representation. App code is often written in an interpreted language like JavaScript, which must in turn interact with the Java-based Android or Objective-C-based iOS system libraries to display UI. All this adds overhead that can be significant, particularly where there is a lot of interaction between the UI and the app logic.

>By contrast, Flutter minimizes those abstractions, bypassing the system UI widget libraries in favor of its own widget set. The Dart code that paints Flutter’s visuals is compiled into native code, which uses Skia for rendering. Flutter also embeds its own copy of Skia as part of the engine, allowing the developer to upgrade their app to stay updated with the latest performance improvements even if the phone hasn’t been updated with a new Android version. The same is true for Flutter on other native platforms, such as iOS, Windows, or macOS.

### Input to GPU

The overriding principle that Flutter applies to its rendering pipeline is that simple is fast. Flutter has a straightforward pipeline for how data flows to the system, as shown in the following sequencing diagram:
[GPU Sequence](https://flutter.dev/images/arch-overview/render-pipeline.png)


### Platform embedding
>As we’ve seen, rather than being translated into the equivalent OS widgets, Flutter user interfaces are built, laid out, composited, and painted by Flutter itself. The mechanism for obtaining the texture and participating in the app lifecycle of the underlying operating system inevitably varies depending on the unique concerns of that platform. The engine is platform-agnostic, presenting a stable ABI (Application Binary Interface) that provides a platform embedder with a way to set up and use Flutter.

>The platform embedder is the native OS application that hosts all Flutter content, and acts as the glue between the host operating system and Flutter. When you start a Flutter app, the embedder provides the entrypoint, initializes the Flutter engine, obtains threads for UI and rastering, and creates a texture that Flutter can write to. The embedder is also responsible for the app lifecycle, including input gestures (such as mouse, keyboard, touch), window sizing, thread management, and platform messages. Flutter includes platform embedders for Android, iOS, Windows, macOS, and Linux; you can also create a custom platform embedder, as in this worked example that supports remoting Flutter sessions through a VNC-style framebuffer or this worked example for Raspberry Pi.

>Each platform has its own set of APIs and constraints. Some brief platform-specific notes:

>On iOS and macOS, Flutter is loaded into the embedder as a UIViewController or NSViewController, respectively. The platform embedder creates a FlutterEngine, which serves as a host to the Dart VM and your Flutter runtime, and a FlutterViewController, which attaches to the FlutterEngine to pass UIKit or Cocoa input events into Flutter and to display frames rendered by the FlutterEngine using Metal or OpenGL.
On Android, Flutter is, by default, loaded into the embedder as an Activity. The view is controlled by a FlutterView, which renders Flutter content either as a view or a texture, depending on the composition and z-ordering requirements of the Flutter content.

>On Windows, Flutter is hosted in a traditional Win32 app, and content is rendered using ANGLE, a library that translates OpenGL API calls to the DirectX 11 equivalents. Efforts are currently underway to also offer a Windows embedder using the UWP app model, as well as to replace ANGLE with a more direct path to the GPU via DirectX 12.



### Flutter Code and interoperablity

> For mobile and desktop apps, Flutter allows you to call into custom code through a platform channel, which is a simple mechanism for communicating between your Dart code and the platform-specific code of your host app. By creating a common channel (encapsulating a name and a codec), you can send and receive messages between Dart and a platform component written in a language like Kotlin or Swift. Data is serialized from a Dart type like Map into a standard format, and then deserialized into an equivalent representation in Kotlin (such as HashMap) or Swift (such as Dictionary).
[Flutter Code ](https://flutter.dev/images/arch-overview/platform-channels.png)

Basically we need to also understand Native Code so as to pass communication from the Android Native Platform to Dart, such pattern is similar in Cordova Plugins Development which uses the JavaScriptInterface via the WebView


### Important Detail

### [Rendering native controls in a Flutter app](https://flutter.dev/docs/resources/architectural-overview#widget-state)


This article was written by Okeowo Aderemi
