# Basketball App

Cross-platform basketball companion built with Expo and React Native. The app surfaces news, scores, team overviews, player details, and more through a bottom tab navigator with dedicated detail screens for articles, players, teams, and games.

## Tech Stack
- React Native 0.81 (Expo managed workflow)
- Expo SDK 54
- React 19
- React Navigation 7 (`@react-navigation/native`, bottom tabs, native stack)
- `@expo/vector-icons` for iconography
- `react-native-reanimated`, `react-native-gesture-handler`, and `react-native-screens` for enhanced navigation performance
- TypeScript (strict) via Expo base config

## Prerequisites
- Node.js 18+ and npm (comes with Node)
- Expo CLI (`npx expo ...` commands work without global install)
- iOS Simulator (Xcode) and/or Android Emulator (Android Studio) for native testing

## Setup
```bash
npm install
```

Run a one-off type check with:
```bash
npx tsc --noEmit
```

## Run (Development)
- `npm run start` – launch the Expo developer server with QR code
- `npm run android` – open the project in an Android emulator/device
- `npm run ios` – open the project in an iOS simulator/device
- `npm run web` – run the project in a web browser

When the dev server is running, press `a`, `i`, or `w` in the terminal to target Android, iOS, or Web respectively. You can also scan the Expo QR code from the Expo Go mobile app.

## Build (Native binaries)
Expo provides multiple paths to produce standalone builds:
1. **Local prebuild and run** – for debugging native code:
   ```bash
   npx expo prebuild
   npx expo run:android   # or npx expo run:ios
   ```
2. **Expo Application Services (recommended for releases)** – run from an Expo account:
   ```bash
   npx expo install expo-dev-client
   npx eas build --platform android   # or ios
   ```
   EAS handles signing, bundling, and distributing release binaries.

Refer to the [Expo documentation](https://docs.expo.dev/) for detailed build and deployment workflows.
