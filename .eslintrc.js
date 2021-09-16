module.exports = {
  'root': true,
  'ignorePatterns': ['**/test', '**/__tests__'],
  'env': {
    'node': true,
    'browser': true,
    'es2021': true
  },
  'plugins': ['react'],
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'indent': ['warn', 2],
    'no-unused-vars': ['off', { 'vars': 'local' }],
    'no-case-declarations': 'off',
    'prefer-const': 'warn',
    'quotes': ['warn', 'single'],
    'react/prop-types': 'off',
    'semi': ['warn', 'always'],
    'space-infix-ops': 'warn'
  },
  'settings': {
    'react': { 'version': 'detect'}
  }
}; 