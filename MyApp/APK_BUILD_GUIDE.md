# Building Your Android APK

## Current Status
Your Android project is set up at `/workspaces/dev/MyApp`. It includes:
- `MainActivity.java` - Main app code
- `activity_main.xml` - UI layout
- `build.gradle` - Build configuration
- All necessary resource files

## Build Options

### Option 1: Build on This Machine (Recommended for full SDK)
The Android SDK needs additional components to build APKs. Run:

```bash
cd /workspaces/dev/MyApp
gradle assembleDebug
```

**APK Output:** `app/build/outputs/apk/debug/app-debug.apk`

### Option 2: Use Android Studio (Easiest GUI)
1. Install Android Studio: https://developer.android.com/studio
2. Open `/workspaces/dev/MyApp` as a project
3. Click "Build" → "Build Bundle(s) / APK(s)" → "Build APK(s)"

### Option 3: Use Online Builder
Upload your project to an online Android builder:
- **Appetize.io**: https://appetize.io (test APK in browser)
- **Appcircle**: https://appcircle.io (full CI/CD)
- **Gradlew**: https://www.gradle.org/

### Option 4: Use Docker (No Local Setup)
```bash
docker run --rm -v /workspaces/dev/MyApp:/workspace android-build gradle assembleDebug
```

## Quick Build Steps

### Download Required Components
```bash
export ANDROID_SDK_ROOT=/usr/lib/android-sdk
export PATH="$ANDROID_SDK_ROOT/tools:$ANDROID_SDK_ROOT/tools/bin:$PATH"
```

### Build Debug APK
```bash
cd /workspaces/dev/MyApp
./gradlew assembleDebug
```

### Build Release APK (for distribution)
```bash
cd /workspaces/dev/MyApp
./gradlew assembleRelease
```

## Troubleshooting

### "SDK not found" error
```bash
export ANDROID_SDK_ROOT=/usr/lib/android-sdk
export PATH="$ANDROID_SDK_ROOT/platform-tools:$ANDROID_SDK_ROOT/tools:$PATH"
```

### "Build tools not installed"
Install via:
```bash
sudo apt install -y android-sdk-platform-tools android-sdk build-essential
```

### Gradle daemon errors
```bash
cd /workspaces/dev/MyApp
./gradlew --stop
./gradlew assembleDebug
```

## Next Steps

1. **Customize your app**: Edit `app/src/main/java/com/example/myapp/MainActivity.java`
2. **Add features**: Create new Activities, Services, or modify layouts
3. **Add libraries**: Update `app/build.gradle` dependencies section
4. **Sign your APK**: Use `jarsigner` or Android Studio for release builds

## Resources

- [Android Developer Guide](https://developer.android.com/docs)
- [Gradle Build System](https://gradle.org/)
- [Android Studio Setup](https://developer.android.com/studio/install)
