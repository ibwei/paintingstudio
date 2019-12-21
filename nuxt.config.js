module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: '品贤画室 | For Art,For U',
        meta: [
            {
                charset: 'utf-8'
            },
            { name: 'renderer', content: 'webkit' },
            { name: 'force-renderer', content: 'webkit' },
            {
                name: 'keywords',
                content: '画室,培训,绘画,品贤画室,品贤,重庆品贤画室'
            },
            { name: 'format-detection', content: 'telephone=yes' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#43863b'
    },
    /*
     ** Global CSS
     */
    css: ['assets/css/index.less', 'assets/css/color.less'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        {
            src: '~plugins/apexcharts',
            ssr: false
        },
        {
            src: '~plugins/navbar.js',
            ssr: false
        },
        {
            src: '~plugins/scrollreveal.js',
            ssr: false
        },
        {
            src: '~plugins/vant'
        },
        {
            src: '~plugins/antd'
        },
        {
            src: '~plugins/vue-amap.js',
            ssr: false
        },
        '~/plugins/axios'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        proxy: true
    },
    proxy: [
        // proxy配置
        [
            '/api',
            {
                target: 'http://127.0.0.1/api', // api请求路径
                pathRewrite: {
                    '^/api': '/'
                } // 重定向请求路径，防止路由、api路径的冲突
            }
        ]
    ],
    cssModules: {
        modules: true,
        localIdentName: '[local]_[hash:base64:8]'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        vendor: ['vue-apexchart'],
        extend(config, ctx) {
            const vueLoader = config.module.rules.find(
                rule => rule.loader === 'vue-loader'
            );
            vueLoader.options.transformToRequire = {
                img: 'src',
                image: 'xlink:href',
                'b-img': 'src',
                'b-img-lazy': ['src', 'blank-src'],
                'b-card': 'img-src',
                'b-card-img': 'img-src',
                'b-carousel-slide': 'img-src',
                'b-embed': 'src'
            };
        }
    }
};
