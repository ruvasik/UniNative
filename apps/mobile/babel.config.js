module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@uninative/ui': '../../packages/ui/src',
            'react-native-vector-icons': 'react-native-vector-icons',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      ],
      // 'react-native-reanimated/plugin',
    ],
  };
};
