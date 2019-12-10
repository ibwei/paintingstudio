<template>
  <div>
    <div class="appraise">
      <div class="appraise-head">
        <div class="head-left">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="head-content">
          <div class="appraise-name">匿名用户</div>
          <div class="rate">
            <van-rate
              v-model="rate"
              :size="14"
              readonly
              allow-half
              :color="orgin"
              void-icon="star"
              void-color="#eee"
            />
            {{ rate > 4 ? '超赞' : '一般' }}
          </div>
        </div>
        <div class="head-right">
          <div class="date">2019-12-01</div>
        </div>
      </div>
      <div class="appraise-content">
        <div class="appraise-text">豆干苕皮很好吃，要是可以不剪碎就更好了。更喜欢吃穿串的，除了茄子意外其他都十分的推荐</div>
        <div class="appraise-tag">
          <van-tag type="danger" size="small">画风细腻</van-tag>
          <van-tag type="success" size="small">对学生好</van-tag>
          <van-tag size="small">有耐心</van-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Color } from '../../config/color'
export default {
  data () {
    return {
      Color,
      rate: 5
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/color.less');
.flex {
  display: -webkit-flex;
  display: flex;
}
.appraise {
  border-top: 1px solid @color-grey-5;
  border-bottom: 1px solid @color-grey-5;
}
.appraise-head {
  .flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  width: 50px;
  height: 50px;
  padding: 5px;
}
.head-content {
  flex: 1;
  font-size: 14px;
  .flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 40px;
}
.appraise-content {
  padding-left: 50px;
  font-size: 14px;
  color: @color-grey-1;
}
.appraise-tag {
  padding: 5px 0;
}
</style>
