<template>
  <div class="teacher-detail">
    <div class="head">
      <div class="head-left">
        <van-icon name="arrow-left" size="16" />
      </div>
      <div class="head-title">教师详情</div>
      <div class="head-right">&nbsp;</div>
    </div>
    <div class="content">
      <div class="info">
        <div class="info-img">
          <van-image fit="cover"  width="100%" height="100%" src="/_nuxt/assets/images/index/cat.png" />
        </div>
        <div class="info-basic">
          <div class="name">田奇</div>
          <div class="rate">
            <van-rate
              v-model="rate"
              :size="16"
              readonly
              allow-half
              :color="Color.colorbrand"
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <div class="tab">
            <van-tag plain round type="danger">适合高级学员</van-tag>
          </div>
          <div class="honor">
            <van-icon name="fire" size="16" :color="Color.colorbrand" />
            <span>2019年最受欢迎教师</span>
          </div>
        </div>
      </div>
      <div class="introduction">
        <div class="introduction-title"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Color } from '../../config/color';
export default {
  data() {
    return {
      Color,
      rate: 4.5
    }
  }
}
</script>

<style lang='less' scoped>
@import url('../../assets/css/color.less');
.flex {
  display: -webkit-flex;
  display: flex;
}
.head {
  .flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fafafa;
}
.head-left {
  min-width: 40px;
  text-align: center;
  height: 16px;
}
.head-title {
  font-size: 16px;
  line-height: 16px;
}
.head-right {
  min-width: 40px;
}
.content {
  padding: 15px;
}
.info {
  .flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.info-img {
  width: 100px;
  height: 130px;
  border-radius: 5px;
  overflow: hidden;
}
.info-basic{
  .flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-left: 15px;
  flex: 1;
  div {
    width: 100%;
  }
}
.name {
  font-size: 16px;
  font-weight: 700;
  padding-top: 5px;
}
.honor {
  font-size: 13px;
  .flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-end;
  span {
    padding-left: 5px;
  }
}
</style>
