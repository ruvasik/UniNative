const react = require('eslint-plugin-react');

const importPlugin = require('eslint-plugin-import');
const importHelpers = require('eslint-plugin-import-helpers');
const jest = require('eslint-plugin-jest');
const prettier = require('eslint-plugin-prettier');
const unusedImports = require('eslint-plugin-unused-imports');

const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  {
    ignores: ['**/.expo/**', '**/coverage/**', '**/dist/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        jest: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier: prettier,
      jest: jest,
      react: react,
      import: importPlugin,
      'import-helpers': importHelpers,
      'unused-imports': unusedImports,
    },
    rules: {
      ...typescript.configs['recommended'].rules,
      'prettier/prettier': 'error',
      ...jest.configs.recommended.rules,
      ...react.configs.recommended.rules,

      'import/no-named-as-default': 'off',
      'react/display-name': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      'import/extensions': ['error', 'never'],

      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            '/^react$/',
            '/^react/',
            '/react$/',
            'module',

            '/@uninative/ui/',

            ['parent', 'sibling', 'index'],

            ['/^@.*(images|img).+/', '/\\.(png|svg)$/'],
            '/json/',
            'type',
            ['/types/', '/\\.d(|\\.ts|\\.tsx)$/'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
      'import/no-unresolved': ['error', { ignore: ['\\.svg\\?react$'] }],
      'unused-imports/no-unused-imports': 'warn',
    },
  },
];
