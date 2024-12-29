import withNuxt from './.nuxt/eslint.config.mjs'
import stylisticJs from '@stylistic/eslint-plugin'

export default withNuxt({
  plugins: {
    '@stylistic/js': stylisticJs
  },
  rules: {
    '@stylistic/js/array-bracket-spacing': 2,
    '@stylistic/js/arrow-parens': ['error', 'as-needed'],

    '@stylistic/js/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],

    '@stylistic/js/comma-spacing': 2,
    '@stylistic/js/indent': ['error', 2],
    '@stylistic/js/key-spacing': 2,
    '@stylistic/js/keyword-spacing': 2,
    '@stylistic/js/no-multiple-empty-lines': 2,
    '@stylistic/js/no-multi-spaces': 2,
    '@stylistic/js/no-trailing-spaces': 2,
    '@stylistic/js/object-curly-spacing': ['error', 'always'],
    '@stylistic/js/padded-blocks': ['error', 'never'],
    '@stylistic/js/quotes': ['error', 'single'],
    '@stylistic/js/space-before-blocks': 2,
    '@stylistic/js/space-in-parens': 2,
    '@stylistic/js/space-infix-ops': 2,
    '@stylistic/js/semi': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 0,

    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
    }],

    'vue/multi-word-component-names': 0,
  },
})