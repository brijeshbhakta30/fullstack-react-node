module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    '@react-native-community',
  ],
  parser: 'babel-eslint',
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/button-has-type': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']]
      }
    }
  },
};
