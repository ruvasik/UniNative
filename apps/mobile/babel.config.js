module.exports = function (api) {
  api.cache(process.env.NODE_ENV !== 'development');
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@uninative/ui': '../../packages/ui/src',
            '@uninative/utils': '../../packages/utils/src',
            'react-native-vector-icons': 'react-native-vector-icons',
          },
          extensions: [
            '.mobile.tsx',
            '.mobile.ts',
            '.mobile.jsx',
            '.mobile.js',
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
            '.json',
          ],
        },
      ],
      // 'react-native-reanimated/plugin',
    ],
  };
};
