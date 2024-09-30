module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-native-community|react-native-reanimated)/)',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!./*.js',
    '!**/babel.config.{ts,js}',
    '!**/jest.config.{ts,js}',
    '!**/vite.config.{ts,js}',
    '!**/metro.config.{ts,js}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
