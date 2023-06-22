module.exports = {
  env: { browser: true, es2022: true, },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'semi': ['warn', 'never'],
  },
}