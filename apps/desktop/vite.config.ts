import react from '@vitejs/plugin-react';

import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import loadEnv from '@uninative/utils/src/env.js';
import path from 'path';
import { defineConfig } from 'vite';
import reactNativeWeb from 'vite-plugin-react-native-web';

loadEnv(__dirname);

const extensions = [
  '.desktop.tsx',
  '.web.tsx',
  '.tsx',
  '.desktop.ts',
  '.web.ts',
  '.ts',
  '.desktop.jsx',
  '.web.jsx',
  '.jsx',
  '.desktop.js',
  '.web.js',
  '.js',
  '.css',
  '.json',
];

export default defineConfig({
  root: path.join(__dirname, 'src/renderer'),
  base: './',
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    viteCommonjs(),
    reactNativeWeb(),
  ],
  build: {
    outDir: path.join(__dirname, 'dist/renderer'),
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    sourcemap: true,
    rollupOptions: {
      external: [/^react-native-vector-icons/],
    },
  },
  esbuild: {
    include: [
      /src\/.*\.(ts|tsx)$/,
      /..\/..\/packages\/ui\/src\/.*\.(ts|tsx)$/,
      /..\/..\/packages\/utils\/src\/.*\.(ts|tsx)$/,
      /node_modules\/react-native-vector-icons\/.*/,
      /node_modules\/react-native-safe-area-context\/.*/,
    ],
    loader: 'tsx',
  },
  resolve: {
    alias: {
      '@uninative/ui': path.resolve(__dirname, '../../packages/ui'),
      '@uninative/utils': path.resolve(__dirname, '../../packages/utils'),
      'react-native': 'react-native-web',
      'react-native-safe-area-context': 'react-native-safe-area-context/lib/module/index.js',
      'react-native-vector-icons': path.resolve(
        __dirname,
        '../../node_modules/react-native-vector-icons',
      ),
    },
    extensions: extensions,
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
        path.resolve(__dirname, '../../packages/utils'),
      ],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
    },
    include: ['react-native-web', 'react-native-vector-icons', 'react-native-safe-area-context'],
    exclude: ['@uninative/ui', '@uninative/utils'],
  },
});
