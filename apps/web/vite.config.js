import react from '@vitejs/plugin-react';

import loadEnv from '@uninative/utils/src/env.js';
import path from 'path';
import { defineConfig } from 'vite';
import reactNativeWeb from 'vite-plugin-react-native-web';

const CONFIG = loadEnv(__dirname);

export default ({ mode }) => {
  process.env = { ...process.env, ...CONFIG };

  return defineConfig({
    plugins: [react(), reactNativeWeb()],
    resolve: {
      alias: {
        '@uninative/ui': path.resolve(__dirname, '../../packages/ui'),
        'react-native$': 'react-native-web',
        'react-native-vector-icons': path.resolve(
          __dirname,
          '../../node_modules/react-native-vector-icons',
        ),
      },
      preserveSymlinks: true,
    },
    server: {
      port: CONFIG.PORT,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: CONFIG.PORT,
      },
      fs: {
        allow: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, '../../packages/ui'),
          path.resolve(__dirname, '../../node_modules'),
        ],
      },
    },
    optimizeDeps: {
      include: [
        'react-native-web',
        'react-native-vector-icons',
        'react-native-vector-icons/MaterialCommunityIcons',
        'react-native-safe-area-context',
      ],
      exclude: ['@uninative/ui'],
    },
  });
}
