module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:reccommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'react',
    'import',
    '@typescript-eslint',
    'prettier'
  ],
}
  