module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: ["@nuxtjs", "plugin:nuxt/recommended"],
    // add your custom rules here 添加你不想配置
    rules: {
        "nuxt/no-cjs-in-config": "off",
        "semi": 0,
        "space-before-function-paren": 0,
        'no-console': 'off',
        'vue/max-attributes-per-line': 'off',
    }
};