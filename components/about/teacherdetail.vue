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
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
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
        <div class="introduction-title">
          <div class="title-text">老师简介</div>
          <div class="more">
            更多
            <van-icon name="arrow-down" />
          </div>
        </div>
        <div
          class="introduction-content"
        >
毕业于西南大学美术学院，致力于美术教育行业，擅长中小学生的创意美术，包括水粉画，油画棒，线描画，动漫，插画，点彩，素描。多次辅导学生参加等级考试，不管在课堂教学，还是在室外写生教学中，都以培养学生能力为主，把孩子的创造力解放出来是她教学的目标和动力。
</div>
      </div>
      <div class="skill">
        <div class="skill-title">擅长课程</div>
        <div class="skill-content">
          <van-tag plain>水墨画</van-tag>
          <van-tag plain type="primary">素描</van-tag>
          <van-tag plain type="success">静物</van-tag>
          <van-tag plain type="danger">石膏几何</van-tag>
          <van-tag plain type="warning">油画</van-tag>
        </div>
      </div>
      <div class="appraise">
        <div class="appraise-title">
          <div class="title-text">学员评价</div>
          <div class="more">
            共48条
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="appraise-content">
          <van-tag type="danger" size="large">画风细腻</van-tag>
          <van-tag type="danger" size="large">对学生好</van-tag>
          <van-tag type="danger" size="large">有耐心</van-tag>
          <van-tag type="warning" size="large">普通话标准</van-tag>
          <van-tag type="primary" size="large">时间把控得好</van-tag>
          <van-tag size="large">实战达人</van-tag>
          <van-tag size="large">基础功超高</van-tag>
          <div class="student-appraise">
            <appraise />
            <appraise />
            <appraise />
            <appraise />
            <appraise />
            <appraise />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Color } from '../../config/color';
import appraise from './appraise';
export default {
  components: {
    appraise
  },
  data () {
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
.info-basic {
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
.introduction,
.skill,
.appraise {
  padding-top: 15px;
  padding-bottom: 10px;
}
.introduction-title,
.appraise-title {
  .flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
}
.title-text,
.skill-title {
  font-size: 16px;
  font-weight: 700;
}
.more {
  font-size: 13px;
}
.introduction-content {
  padding-top: 10px;
  font-size: 13px;
  line-height: 1.5em;
  color: @color-grey-2;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.skill-content,
.appraise-content {
  padding-top: 10px;
}
.appraise-content {
  span {
    margin: 2.5px;
  }
}
.student-appraise {
  padding-top: 10px;
}
</style>
