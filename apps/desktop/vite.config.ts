import react from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig } from 'vite';
import reactNativeWeb from 'vite-plugin-react-native-web';
// @ts-ignore

export default defineConfig({
  root: path.join(__dirname, 'src/renderer'),
  base: './',
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    reactNativeWeb(),
  ],
  build: {
    outDir: path.join(__dirname, 'dist/renderer'),
    emptyOutDir: true,
    sourcemap: true,
  },
  esbuild: {
    include: [
      /src\/.*\.(ts|tsx)$/,
      /..\/..\/packages\/ui\/src\/.*\.(ts|tsx)$/,
      /node_modules\/react-native-vector-icons\/.*/,
      /node_modules\/react-native-safe-area-context\/.*/,
    ],
    loader: 'tsx',
  },
  resolve: {
    alias: {
      '@uninative/ui': path.resolve(__dirname, '../../packages/ui'),
      'react-native$': 'react-native-web',
      'react-native-vector-icons': path.resolve(
        __dirname,
        '../../node_modules/react-native-vector-icons',
      ),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    preserveSymlinks: true,
  },
  server: {
    port: 5173,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
    fs: {
      allow: [
        path.resolve(__dirname, 'src/renderer'),
        path.resolve(__dirname, '../../packages/ui'),
      ],
    },
  },
  optimizeDeps: {
    include: ['react-native-web', 'react-native-vector-icons', 'react-native-safe-area-context'],
    exclude: ['@uninative/ui'],
  },
});
