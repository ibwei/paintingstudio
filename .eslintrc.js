module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  // add your custom rules here 添加你不想配置
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-v-html': 'off',
    semi: 0,
    'space-before-function-paren': 0,
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
    'arrow-parens': 0
  }
}
