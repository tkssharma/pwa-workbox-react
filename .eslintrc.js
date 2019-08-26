module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  parser: "babel-eslint",
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      "objectLiteralDuplicateProperties": false,
      "experimentalObjectRestSpread": true
    },
  },
  plugins: ['react', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    "react/prop-types": 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
