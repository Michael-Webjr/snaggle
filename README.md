# Snaggle - React Native Social App

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

Snaggle is a modern React Native app built with TypeScript that helps simplify your shared living experience. Whether coordinating with roommates, family, dormmates, or any shared living arrangement, Snaggle makes it easy to manage shared responsibilities.

## 🚀 Features

- **Social Authentication**: Login with Google, Apple, or Facebook
- **Modern UI**: Sleek design with smooth animations and responsive layout
- **TypeScript Integration**: Full TypeScript support for better development experience

## 📱 Project Structure

```
project-root/
├── App.tsx                 # Main application component
├── components/             # Reusable UI components
│   ├── Header.tsx          # App logo and name
│   ├── AnimatedTitle.tsx   # Main title with word rotation
│   ├── AnimatedSlogan.tsx  # Sliding slogans
│   ├── SocialButtons.tsx   # Social login buttons
│   └── SignIn.tsx          # Sign in section
├── constants/              # App-wide constants
├── utils/                  # Utility functions
├── styles/                 # Shared styles
├── types/                  # TypeScript type definitions
├── hooks/                  # Custom React hooks
├── navigation/             # Navigation setup
└── screens/                # Full screens
```

## 🛠️ Setup & Development

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI

### Installation

```sh
# Clone the repository
git clone [repository-url]

# Navigate to the project
cd snaggle

# Install dependencies
npm install

# Start the development server
npm start
```

### TypeScript Support

This project is built with TypeScript for improved developer experience:

- Static type checking
- Enhanced IDE support
- Better code organization

## 📝 Development Guidelines

- Follow the established project structure
- Use the shared color system from `styles/colors.ts`
- Leverage the responsive design hooks
- Component props should be properly typed

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 👥 Contributing

1. Create a feature branch
2. Make your changes
3. Open a pull request with a clear description of changes

## 📄 License

[Specify your license here]