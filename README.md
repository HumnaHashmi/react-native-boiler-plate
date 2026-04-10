# ⚡ React Native Boilerplate

A **production-ready** React Native starter template built with **TypeScript**, clean architecture, pre-configured navigation, state management, and all the essential utilities — so you skip the boilerplate setup and jump straight into building features.

> Built with React Native 0.84 · React 19 · TypeScript · Redux Toolkit · React Navigation v7

---

## ✨ Features

- ✅ **TypeScript** — fully typed codebase out of the box
- ✅ **Redux Toolkit** — pre-configured store with slice pattern
- ✅ **Multi-level Navigation** — Onboarding → Auth → Drawer → Home → Bottom Tabs
- ✅ **Reusable Component Library** — Button, Input, Header, Modal, Loader, Toast, and more
- ✅ **Theme System** — centralized colors, fonts, and spacing
- ✅ **Environment Variables** — via `react-native-config`
- ✅ **Network Detection** — `@react-native-community/netinfo` integrated
- ✅ **Splash Screen** — ready to configure
- ✅ **Animations** — React Native Reanimated v4
- ✅ **ESLint + Prettier** — enforced code style
- ✅ **Jest** — testing setup ready

---

## 📁 Project Structure

```
src/
├── assets/                  # Images, fonts, icons
│
├── components/              # Reusable UI components
│   ├── BottomTabs/          # Bottom tab bar components
│   ├── constants/           # Component-level constants
│   ├── Hamburger/           # Drawer hamburger icon
│   ├── Shared/              # Shared layout components
│   ├── AppModal.js          # Global modal component
│   ├── Button.js            # Custom button
│   ├── DrawerIcon.js        # Drawer icon component
│   ├── FastImageLoading.js  # Optimized image loader
│   ├── Header.js            # Screen header
│   ├── Input.js             # Custom text input
│   ├── Loader.js            # Loading spinner
│   ├── Search.js            # Search input component
│   ├── ToggleButton.js      # Toggle switch
│   └── UserHeader.js        # User profile header
│
├── config/                  # App configuration
│   ├── navigation/          # Navigation config
│   ├── theme/               # Colors, typography, spacing
│   └── utils/               # Utility/helper functions
│       └── Images.js        # Centralized image imports
│
├── hooks/                   # Custom React hooks
│
├── navigation/              # App navigators
│   ├── AuthStack.js         # Auth flow (Login, Register)
│   ├── DrawerStack.js       # Drawer navigation
│   ├── HomeStack.js         # Main app stack
│   ├── OnboardingStack.js   # Onboarding flow
│   └── index.js             # Root navigator
│
├── redux/                   # State management
│   ├── Slice/               # Redux slices
│   └── store.js             # Redux store configuration
│
└── screen/                  # App screens
    ├── Auth/                # Login, Register screens
    ├── Dashboard/           # Main app screens
    └── OnBoarding/          # Onboarding screens
```

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React Native 0.84 |
| Language | TypeScript 5.8 |
| State Management | Redux Toolkit 2.x + React Redux |
| Navigation | React Navigation v7 (Stack, Drawer, Bottom Tabs) |
| Animations | React Native Reanimated v4 |
| Environment Config | react-native-config |
| Network Detection | @react-native-community/netinfo |
| Icons | react-native-vector-icons |
| Modal | react-native-modal |
| Toast | react-native-toast-message |
| Splash Screen | react-native-splash-screen |
| Gestures | react-native-gesture-handler |
| Linting | ESLint + Prettier |
| Testing | Jest |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the React Native environment set up:  
👉 [React Native Environment Setup Guide](https://reactnative.dev/docs/set-up-your-environment)

- Node >= 22.11.0
- Yarn or npm
- Xcode (for iOS)
- Android Studio (for Android)

### 1. Clone the repo

```bash
git clone https://github.com/HumnaHashmi/react-native-boiler-plate.git
cd react-native-boiler-plate
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Set up environment variables

```bash
cp env .env
```

Edit `.env` with your configuration:

```env
API_BASE_URL=https://your-api.com
APP_ENV=development
```

### 4. iOS Setup

```bash
bundle install
bundle exec pod install
yarn ios
```

### 5. Android Setup

```bash
yarn android
```

---

## 🧭 Navigation Architecture

```
RootNavigator
├── OnboardingStack      → Onboarding screens (shown on first launch)
├── AuthStack            → Login / Register
└── DrawerStack          → Authenticated app
    └── HomeStack        → Main screens
        └── BottomTabs   → Tab-based navigation
```

---

## 🎨 Theme System

All design tokens are centralized in `src/config/theme/`:

```js
// Colors
colors.primary
colors.background
colors.text

// Typography
fonts.regular
fonts.bold

// Spacing
spacing.sm
spacing.md
spacing.lg
```

---

## 🗃 Redux Setup

Store is pre-configured in `src/redux/store.js`. Add new slices inside `src/redux/Slice/`:

```js
// Example slice pattern
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setUser: (state, action) => { state.user = action.payload; },
    logout: (state) => { state.user = null; state.token = null; },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
```

---

## 🧩 Reusable Components

| Component | Description |
|---|---|
| `<Button />` | Primary/secondary button with loading state |
| `<Input />` | Text input with label, error, and icon support |
| `<Header />` | Screen header with back button and title |
| `<UserHeader />` | User profile header with avatar |
| `<Loader />` | Full-screen and inline loading spinner |
| `<AppModal />` | Reusable modal with configurable content |
| `<Search />` | Search bar with debounce support |
| `<ToggleButton />` | On/off toggle switch |
| `<FastImageLoading />` | Optimized image with loading placeholder |
| `<DrawerIcon />` | Hamburger icon for drawer navigation |

---

## 📦 Scripts

```bash
yarn start          # Start Metro bundler
yarn android        # Run on Android
yarn ios            # Run on iOS
yarn lint           # Run ESLint
yarn test           # Run Jest tests
```

---

## 📋 Requirements

- Node >= 22.11.0
- React Native >= 0.84
- iOS: Xcode 15+
- Android: SDK 24+ (Android 7.0)

---

## 👩‍💻 Author

**Humna Hashmi** — Software Engineer · React Native Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-humnahashmi.vercel.app-blue?style=flat-square)](https://humnahashmi.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-humnahashmi-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/humnahashmi)
[![GitHub](https://img.shields.io/badge/GitHub-HumnaHashmi-181717?style=flat-square&logo=github)](https://github.com/HumnaHashmi)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
