/* eslint-disable no-bitwise */
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-prettier'],
  settings: {
    'import/parser': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    'arrow-parens': ['error', 'as-needed'],
    'no-trailing-spaces': 'error',
    'import/extensions': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreStrings: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': [
      'off' | 'warn' | 'error',
      { target: 'single' | 'any' }, // default is "single"
    ],
    'object-curly-newline': 'off',
  },
};

// 'import/no-extraneous-dependencies': [
//   'error',
//   { devDependencies: true, optionalDependencies: true, peerDependencies: false },
// ],
