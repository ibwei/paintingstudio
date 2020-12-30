import AMap from 'vue-amap';
import Vue from 'vue';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '2a288da476b9ca0f66c0d0e64ddc28f7',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});
