<template>
  <div class="teacher-detail">
    <div class="head">
      <div class="head-left" @click="back">
        <van-icon name="arrow-left" size="16" />
      </div>
      <div class="head-title">教师详情</div>
      <div class="head-right">&nbsp;</div>
    </div>
    <div class="content">
      <div class="info">
        <div class="info-img">
          <van-image fit="cover" width="100%" height="100%" :src="teacher.photo" />
        </div>
        <div class="info-basic">
          <div class="name">{{ teacher.name }}</div>
          <div class="rate">
            <van-rate
              v-model="teacher.rate"
              :size="16"
              readonly
              allow-half
              :color="Color.colorbrand"
              void-icon="star"
              void-color="#eee"
            />
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
        </div>
        <div class="introduction-content">{{ teacher.desc }}</div>
      </div>
      <div class="skill">
        <div class="skill-title">曾获荣誉</div>
        <div class="deed">
          <div class="deed-item" v-for="(item,index) of teacher.deed" :key="index">
            <span style="{marginRight:'10px'}">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="skill">
        <div class="skill-title">擅长课程</div>
        <div class="skill-content">
          <van-tag
            v-for="(item,index) of teacher.good_ats"
            :key="index"
            plain
            :style="{marginRight:'10px'}"
          >{{ item }}</van-tag>
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
          <van-tag v-for="(item,index) of teacher.impressions" :key="index" plain>{{ item }}</van-tag>
          <div class="student-appraise">暂未开启互动功能</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Color, tagsColor } from '../../config/color';
import { Api } from '@/api/index';
export default {
  data () {
    return {
      Color,
      teacher: {
        name: '',
        photo: '',
        rate: 0,
        desc: '',
        deeds: '',
        impression: '',
        good_at: ''
      }
    }
  },
  mounted () {
    this.getTeacherDetail();
  },
  methods: {
    getTeacherDetail () {
      this.$axios({ method: 'post', url: Api.teacherDetail, data: { id: this.$route.query.teacherId } }).then((res) => {
        if (res.data.resultCode === 0) {
          this.teacher = res.data.data;
          this.teacher.good_ats = this.teacher.good_at.split('-');
          this.teacher.impressions = this.teacher.impression.split('-');
          this.teacher.deed = this.teacher.deeds.split('-');
        } else {
          this.$toast('获取教师信息失败！');
        }
      }).catch(() => {

      })
    },
    /* 获取随机颜色 */
    getRandomColor () {
      return tagsColor[Math.floor(Math.random() * tagsColor.length)]
    },
    back () {
      this.$router.back();
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
  font-size: 14px;
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
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
}
.info-basic {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  padding-left: 15px;
  flex: 1;
  div {
    width: 100%;
  }
}
.name {
  font-size: 14px;
  font-weight: 300;
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
.introduction {
  flex: 1;
  height: auto;
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
  font-size: 14px;
  font-weight: 300;
}
.more {
  font-size: 13px;
}
.introduction-content {
  padding-top: 10px;
  font-size: 13px;
  line-height: 1.5em;
  color: @color-grey-2;
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
  margin-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.deed {
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-flow: column nowrap;
}
.deed-item {
  margin-top: 5px;
  color: #999;
  font-size: 13px;
  line-height: 1.5;
}
</style>
