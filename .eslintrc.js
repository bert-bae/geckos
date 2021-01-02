module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  }
};
