<template>
  <div class="app-container">
    <span>nuxt路由</span>
    <carousel></carousel>
    <van-button type="primary" @click="hello">nihao</van-button>
  </div>
</template>

<script>
import carousel from '../components/index/carousel';
export default {
  components: {
    carousel
  },
  methods: {
    hello () {
      console.log('uk-icon-handshake-o')
      Toast('你好')
    }
  }
};
</script>

<style lang="less" scoped>
.app-container {
  background: #fff;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
