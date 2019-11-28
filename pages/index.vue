<template>
  <div class="app-container">
    <span>nuxt路由</span>
    <carousel></carousel>
    <van-button type="primary" @click="hello">nihao</van-button>
    <paintingIntroduce></paintingIntroduce>
  </div>
</template>

<script>
import carousel from '../components/works/carousel';
import paintingIntroduce from '../components/index/paintingIntroduce';
import { hello } from '../utils/message';
export default {
  components: {
    carousel,
    paintingIntroduce
  },
  methods: {}
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
