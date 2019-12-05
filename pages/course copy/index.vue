<template>
  <div class="course-wrap">
    <div class="title">
      <v-title v-bind:initTitle="initTtile"></v-title>
    </div>
    <div class="content">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="推荐课程" to="./recommend" />
        <van-sidebar-item title="绘画兴趣班" :info="15" to="./interest" />
        <van-sidebar-item title="国画书法班" to="nation" />
        <van-sidebar-item title="艺考基础班" to="art" />
        <van-sidebar-item title="留学考研班" to="abroad" />
      </van-sidebar>
    </div>
  </div>
</template>

<script>
import vTitle from '../../components/common/vTitle'
export default {
  components: {
    vTitle,
  },
  data () {
    return {
      activeKey: 0,
      initTtile: {
        cnTitle: '热门课程',
        enTitle: 'About PinXian Painting Studio',
        mode: 'black',
        icon: '&#xe672;'
      }
    }
  }
}
</script>

<style>
</style>