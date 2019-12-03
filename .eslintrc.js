module.exports = {
  root: true,

  env: {
      es6: true,
  },

  extends: ['prettier', 'plugin:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
      'no-console': 'off',
  },

    "parserOptions": {
        "ecmaVersion": 2017
    },

    

}