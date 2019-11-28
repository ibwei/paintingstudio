module.exports = {
  mode: 'universal',
  /*
     ** Headers of the page
     */
  head: {
    title: '田奇画室官网',
    meta: [{
      charset: 'utf-8'
    },
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
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
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
  css: [
    'assets/css/index.less',
    'assets/css/color.less'
  ],
  /*
     ** Plugins to load before mounting the App
     */
  plugins: [{
    src: '~plugins/apexcharts',
    ssr: false
  },
  {
    src: '~plugins/vant'
  },
  {
    src: '~plugins/antd'
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
  proxy: [ // proxy配置
    ['/api', {
      target: 'http://192.168.2.217:8090/index', // api请求路径
      pathRewrite: {
        '^/api': '/'
      } // 重定向请求路径，防止路由、api路径的冲突
    }]
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
