const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const loadEnv = require('@uninative/utils/src/env');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

loadEnv(__dirname);

module.exports = (() => {
  const config = getDefaultConfig(projectRoot);

  config.watchFolders = [workspaceRoot];

  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ];

  config.resolver.disableHierarchicalLookup = true;

  config.resolver.extraNodeModules = {
    '@uninative/ui': path.resolve(__dirname, '../../packages/ui/src'),
    '@uninative/utils': path.resolve(__dirname, '../../packages/utils/src'),
  };

  config.resolver.sourceExts = [
    'mobile.tsx',
    'mobile.ts',
    'mobile.jsx',
    'mobile.js',
    'tsx',
    'ts',
    'jsx',
    'js',
    'json',
  ];

  return config;
})();
