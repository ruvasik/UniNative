const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

module.exports = (() => {
  const config = getDefaultConfig(projectRoot);

  config.watchFolders = [workspaceRoot];

  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ];

  config.resolver.disableHierarchicalLookup = true;

  config.resolver.extraNodeModules = {
    '@uninative/ui': require('path').resolve(__dirname, '../../packages/ui/src'),
  };

  return config;
})();
