# ⚡ React Native Boilerplate

A **production-ready** React Native starter template built with **JavaScript**, clean architecture, pre-configured navigation, state management, and all the essential utilities — so you skip the boilerplate setup and jump straight into building features.

> Built with React Native 0.84 · React 19 · JavaScript · Redux Toolkit · React Navigation v7

---

## ✨ Features

- ✅ **Redux Toolkit** — pre-configured store with slice pattern
- ✅ **Multi-level Navigation** — Onboarding → Auth → Drawer → Home → Bottom Tabs
- ✅ **Reusable Component Library** — Button, Input, Header, Modal, Loader, Toast, and more
- ✅ **Theme System** — centralized colors, fonts, and spacing
- ✅ **Environment Variables** — via `react-native-config`
- ✅ **Network Detection** — `@react-native-community/netinfo` integrated
- ✅ **Fast Image Loading** — `react-native-fast-image` for optimized image rendering
- ✅ **Splash Screen** — ready to configure
- ✅ **Animations** — React Native Reanimated v4
- ✅ **Swiper** — onboarding slider with `react-native-swiper`
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
│   ├── FastImageLoading.js  # Optimized image with loading state
│   ├── Header.js            # Screen header with back button
│   ├── Input.js             # Custom text input with validation
│   ├── Loader.js            # Full-screen and inline loading spinner
│   ├── Search.js            # Search input component
│   ├── ToggleButton.js      # On/off toggle switch
│   └── UserHeader.js        # User profile header with avatar
│
├── config/                  # App-wide configuration
│   ├── navigation/          # Navigation helpers/config
│   ├── theme/               # Colors, typography, spacing tokens
│   └── utils/               # Helper/utility functions
│       └── Images.js        # Centralized image imports
│
├── hooks/                   # Custom React hooks
│
├── navigation/              # App navigators
│   ├── AuthStack.js         # Auth flow (Login, Register)
│   ├── DrawerStack.js       # Drawer navigation
│   ├── HomeStack.js         # Main app stack
│   ├── OnboardingStack.js   # Onboarding flow
│   └── index.js             # Root navigator entry point
│
├── redux/                   # State management
│   ├── Slice/               # Redux slices (one per feature)
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
| Language | JavaScript (ES6+) |
| State Management | Redux Toolkit 2.x + React Redux |
| Navigation | React Navigation v7 (Stack, Drawer, Bottom Tabs) |
| Animations | React Native Reanimated v4 |
| Images | react-native-fast-image |
| Environment Config | react-native-config |
| Network Detection | @react-native-community/netinfo |
| Icons | react-native-vector-icons |
| Modal | react-native-modal |
| Toast | react-native-toast-message |
| Splash Screen | react-native-splash-screen |
| Gestures | react-native-gesture-handler |
| Onboarding Slider | react-native-swiper |
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

Edit `.env` with your own values:

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
├── OnboardingStack      → Onboarding screens (first launch)
├── AuthStack            → Login / Register
└── DrawerStack          → Authenticated app
    └── HomeStack        → Main screens
        └── BottomTabs   → Tab-based navigation
```

---

## 🎨 Theme System

All design tokens are centralized in `src/config/theme/`:

```js

// Colors (from Colors.js / useColors.js)
colors.primary
colors.secondary
colors.background
colors.text
colors.error

// Responsive Sizing (from Metrix.js)
Metrix.HorizontalSize()
Metrix.VerticalSize()
Metrix.FontSize()

// Theme Hook
useColors()

// Centralized Exports (via index.js)
import { colors, Metrix, useColors } from 'theme';
```

---

## 🗃 Redux Setup

Store is pre-configured in `src/redux/store.js`. Add new feature slices inside `src/redux/Slice/`:

```js
// Example slice pattern
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
```

---

## 🧩 Reusable Components

| Component | Description |
|---|---|
## 🧩 Reusable Components

| Component | Description |
|---|---|
| `<Button />` | Custom button with support for text, icons, and optional image rendering |
| `<Input />` | Configurable text input with left/right icons, secure entry, and multiline support |
| `<Header />` | Basic header component (can be extended for navigation and titles) |
| `<UserHeader />` | User profile header with avatar, greeting text, and notification icon |
| `<Loader />` | Modal-based loading indicator with backdrop overlay |
| `<AppModal />` | Fully customizable bottom sheet modal with title, close button, and backdrop handling |
| `<Search />` | Styled search input with icon and shadow UI |
| `<FastImageLoading />` | Optimized image component with loading indicator and error fallback |
| `<DrawerIcon />` | Hamburger menu icon to trigger drawer navigation |
| `<ToggleButton />` | On/off toggle switch |

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
