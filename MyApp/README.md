# My App - Android Application

A simple Android application built with Java and Gradle.

## Quick Start

### Option 1: Build Locally
```bash
./gradlew assembleDebug
```
APK output: `app/build/outputs/apk/debug/app-debug.apk`

### Option 2: Build Online (Recommended)

Use one of these online builders - just upload the entire `MyApp` folder:

#### **Appetize.io** (Test in Browser)
1. Go to https://appetize.io
2. Upload the `MyApp` folder as a ZIP
3. Test your app instantly in the browser

#### **Appcircle** (Full CI/CD)
1. Go to https://appcircle.io
2. Connect your GitHub repo or upload folder
3. Auto-builds and generates download link

#### **Gradle Build Server**
1. Upload to https://build.gradle.org/
2. Select "Android" build type
3. Download APK

#### **Bitrise** (Free Android Builds)
1. Go to https://bitrise.io
2. Connect your repo
3. Select "Android" workflow
4. Auto-builds on every push

## Project Structure
```
MyApp/
├── app/
│   ├── src/main/
│   │   ├── java/com/example/myapp/
│   │   │   └── MainActivity.java
│   │   ├── res/
│   │   │   ├── layout/activity_main.xml
│   │   │   └── values/strings.xml
│   │   └── AndroidManifest.xml
│   ├── build.gradle
│   └── proguard-rules.pro
├── build.gradle
├── settings.gradle
└── gradle.properties
```

## Building Manually

### Prerequisites
- Java 11+
- Android SDK
- Gradle

### Commands
```bash
# Debug APK
./gradlew assembleDebug

# Release APK
./gradlew assembleRelease

# Install on device
./gradlew installDebug

# Run tests
./gradlew test
```

## Customization

Edit these files to customize:
- `app/src/main/java/com/example/myapp/MainActivity.java` - App logic
- `app/src/main/res/layout/activity_main.xml` - UI layout
- `app/src/main/res/values/strings.xml` - App strings/text
- `app/build.gradle` - Dependencies and build config

## Documentation
See `BUILD_INSTRUCTIONS.md` and `APK_BUILD_GUIDE.md` for detailed guides.
