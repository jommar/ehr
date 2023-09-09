module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 2], // 2-space indentation
    semi: ['error', 'never'], // enforces no semicolons
    quotes: ['error', 'single'], // enforces single quotes
    eqeqeq: ['error', 'always'], // Requires the use of === and !==.
    'no-else-return': 'error', // Disallows else blocks following if blocks ending with a return statement.
    'no-var': 'error', // Requires let or const instead of var.
    'prefer-const': 'error', // If a variable is never reassigned, const is preferred.
    'vue/no-unused-components': 'error', // Disallows unused components.
    'vue/require-prop-types': 'error', // Requires prop types to be defined.
    'max-lines': ['error', 300], // Limits the number of lines in a file.
    // Add more custom rules here
  },
  globals: {
    ref: 'readonly',
    computed: 'readonly',
    watch: 'readonly',
    defineNuxtConfig: 'readonly',
  },
}
