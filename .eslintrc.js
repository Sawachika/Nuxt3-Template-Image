module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended', 'plugin:vue/vue3-recommended', 'plugin:nuxt/recommended', 'prettier'],
  rules: {
    'array-bracket-spacing': 2,
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-spacing': 2,
    indent: ['error', 2],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'no-multiple-empty-lines': 2,
    'no-multi-spaces': 2,
    'no-trailing-spaces': 2,
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    quotes: ['error', 'single'],
    'space-before-blocks': 2,
    'space-in-parens': 2,
    'space-infix-ops': 2,
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 140,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none'
      }
    ]
  }
}
