module.exports = {
  'env': {
    'browser': true,
    'es6': false
  },
  'extends': 'eslint:recommended',
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-unused-vars': [
      'error',
      {'args': 'none'}
    ],
    'no-console': [
      'warn',
      {}
    ]
  }
};
