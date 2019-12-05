<template>
  <div class="recommend-wrap">
    <van-panel title="标题" desc="描述信息" status="状态">
      <div>内容</div>
      <div slot="footer">
        <van-button size="small">按钮</van-button>
        <van-button size="small" type="danger">按钮</van-button>
      </div>
    </van-panel>
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
      initTtile: {
        cnTitle: '推荐课程',
        enTitle: 'About PinXian Painting Studio',
        mode: 'black',
        icon: '&#xe672;'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.recommend-wrap {
  width: 100%;
}
</style>