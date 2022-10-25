module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'object-curly-newline': 'off',
  },
};
