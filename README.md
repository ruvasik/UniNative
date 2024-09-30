# UniNative

UniNative is a React Native components-based boilerplate for web, Expo, and Electron applications. It provides a unified codebase for developing cross-platform applications using React Native components.

## Features

- Unified codebase for web, mobile (Expo), and desktop (Electron) applications
- React Native components-based architecture
- TypeScript support
- Vite for fast web development
- Expo for mobile development
- Electron for desktop applications
- Shared UI components package
- ESLint and Prettier for code quality
- Jest for testing

## Project Structure

- `apps/`
  - `web/`: Vite-based web application
  - `mobile/`: Expo-based mobile application
  - `desktop/`: (To be implemented) Electron-based desktop application
- `packages/`
  - `ui/`: Shared UI components

## Getting Started

1. Clone the repository:


2. Install dependencies:


3. Run the desired application:
- Web: `cd apps/web && yarn dev`
- Mobile: `cd apps/mobile && yarn start`
- Desktop: (To be implemented)

## Development

- Use the shared UI components from the `packages/ui` directory in your applications.
- Run `yarn lint` to check for linting issues.
- Run `yarn format` to format the code using Prettier.
- Run `yarn test` to run the test suite.
