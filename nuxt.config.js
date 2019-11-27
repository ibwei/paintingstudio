module.exports = {
  mode: 'universal',
  /*
     ** Headers of the page
     */
  head: {
    title: '重庆交通大学服务大厅',
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
      content: '重庆交通大学，重庆交通大学服务大厅，服务大厅'
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
    color: '#fff'
  },
  /*
     ** Global CSS
     */
  css: [
    'assets/css/index.less'
  ],
  /*
     ** Plugins to load before mounting the App
     */
  plugins: [{
    src: '~plugins/apexcharts',
    ssr: false
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
      // target: 'http://192.168.2.21:8082/index',  //api请求路径
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
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.unshift({
  //       name: 'theme',
  //       path: '/theme',
  //       component: resolve(__dirname, 'pages/theme.vue'),
  //       alias: '/department',
  //       children: [
  //         {
  //           path: '/theme/table',
  //           alias: '/department/table',
  //           name: 'department-table',
  //           component: resolve(__dirname, 'pages/theme/table/index.vue')
  //         }
  //       ]
  //     })
  //     routes.filter(item => !(item.name === 'theme' && !item.alias))
  //   }
  // }
};
