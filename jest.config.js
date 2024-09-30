module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-native-community|react-native-reanimated)/)', // Обрабатываем определённые пакеты
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom', // Используем JS-среду, если нужно
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!./*.js',
    '!**/babel.config.js',
    '!**/jest.config.js',
    '!**/vite.config.js',
    '!**/vite.config.ts',
    '!**/metro.config.js',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
