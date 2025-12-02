# StockFlow App - React Native/Expo Project

A comprehensive inventory management application built with React Native and Expo, designed for medical supply tracking with features like:

- Inventory management
- QR code scanning
- Real-time alerts
- Event scheduling
- Analytics dashboard
- Multi-user support

## Project Structure

```
stockflow-app/
├── App.tsx                   # Main entry point
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── babel.config.js          # Babel setup
├── app.json                 # Expo config
├── design_guidelines.md     # UI/UX standards

├── 📂 assets/               # Static images and media
├── 📂 components/           # Reusable UI components
├── 📂 screens/              # App screens
├── 📂 navigation/           # Navigation configuration
├── 📂 context/              # Global state management
├── 📂 types/                # TypeScript interfaces
├── 📂 hooks/                # Custom React hooks
├── 📂 constants/            # App constants (theme, etc)
├── 📂 scripts/              # Build and utility scripts
└── 📂 .github/workflows/    # CI/CD pipeline
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

```bash
cd stockflow-app
npm install
```

### Development

```bash
# Start Expo development server
npm start

# Run on Android emulator
npm run android

# Run on iOS simulator
npm run ios

# Run on web browser
npm run web
```

## Build APK

```bash
npm run build
```

## Tech Stack

- **React Native** 0.72.4
- **Expo** 49.0.0
- **TypeScript** 5.2.2
- **React Navigation** 6.1.9
- **Context API** for state management

## Key Features

### Inventory Management
- Add, edit, delete inventory items
- Track stock levels and history
- Category organization
- Search and filter capabilities

### Scanning
- QR code generation and scanning
- Barcode support
- Real-time updates

### Alerts & Notifications
- Low stock warnings
- Expiry date tracking
- Push notifications
- Notification center

### Events & Procedures
- ICI Procedure tracking
- Electrophysiology events
- Custom event scheduling

### Dashboard & Analytics
- Statistical overview
- Usage trends
- Performance metrics

### Settings & Preferences
- User profile management
- App configuration
- Preferences

## Development Guidelines

See `design_guidelines.md` for:
- Color palette
- Typography standards
- Spacing system
- Component guidelines
- Accessibility requirements

## Contributing

1. Create a feature branch
2. Make your changes
3. Test on both Android and iOS
4. Submit a pull request

## License

MIT
