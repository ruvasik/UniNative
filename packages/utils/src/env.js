const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const path = require('path');

const loadEnv = (dirname) => {
  const projectRoot = path.resolve(dirname);
  const workspaceRoot = path.resolve(projectRoot, '../..');

  const parentEnv = dotenvExpand.expand(
    dotenv.config({
      silent: true,
      override: true,
      path: [
        `${workspaceRoot}/.env`,
        `${workspaceRoot}/.env.local`,
        `${workspaceRoot}/.env.${process.env.NODE_ENV}`,
        `${workspaceRoot}/.env.${process.env.NODE_ENV}.local`,
      ],
    }),
  );

  const localEnv = dotenvExpand.expand(
    dotenv.config({
      silent: true,
      override: true,
      path: [
        `${projectRoot}/.env`,
        `${projectRoot}/.env.local`,
        `${projectRoot}/.env.${process.env.NODE_ENV}`,
        `${projectRoot}/.env.${process.env.NODE_ENV}.local`,
      ],
    }),
  );

  return { ...parentEnv.parsed, ...localEnv.parsed };
};

// Добавьте следующие строки в конец файла
Object.defineProperty(exports, '__esModule', { value: true });
module.exports = loadEnv;
