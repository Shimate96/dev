# Android APK Build Instructions

## Prerequisites

1. **Install Android SDK**
   ```bash
   sudo apt update
   sudo apt install -y android-sdk
   ```

2. **Install Java Development Kit (JDK)**
   ```bash
   sudo apt install -y default-jdk
   ```

3. **Install Gradle** (or use the Gradle wrapper)
   ```bash
   sudo apt install -y gradle
   ```

## Building the APK

### Option 1: Using Gradle Wrapper (Recommended)
```bash
cd MyApp
./gradlew assembleDebug
```

The APK will be generated at: `MyApp/app/build/outputs/apk/debug/app-debug.apk`

### Option 2: Using Gradle Command
```bash
cd MyApp
gradle assembleDebug
```

### Build Release APK (For Distribution)
```bash
cd MyApp
./gradlew assembleRelease
```

The release APK will be at: `MyApp/app/build/outputs/apk/release/app-release.apk`

## Installing the APK

### On a Connected Android Device/Emulator
```bash
cd MyApp
./gradlew installDebug
```

### Manual Installation
```bash
adb install MyApp/app/build/outputs/apk/debug/app-debug.apk
```

## Downloading the APK

After building, the APK file is located at:
- **Debug**: `MyApp/app/build/outputs/apk/debug/app-debug.apk`
- **Release**: `MyApp/app/build/outputs/apk/release/app-release.apk`

You can download it from your file explorer or use:
```bash
ls -lh MyApp/app/build/outputs/apk/debug/
```

## Troubleshooting

- **Gradle not found**: Install Gradle or use `./gradlew` (Gradle wrapper)
- **Java version error**: Ensure JDK 8+ is installed: `java -version`
- **Android SDK not found**: Set `ANDROID_SDK_ROOT` environment variable:
  ```bash
  export ANDROID_SDK_ROOT=/usr/lib/android-sdk
  ```

## Next Steps

1. Customize the app in `app/src/main/java/com/example/myapp/MainActivity.java`
2. Add resources (icons, layouts) to `app/src/main/res/`
3. Update app name in `app/src/main/res/values/strings.xml`
4. Build and test on an emulator or device
