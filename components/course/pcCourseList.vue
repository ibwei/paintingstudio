<template>
  <div class="category">
    <div
      v-for="(value, category, categoryIndex) of categoryList"
      :key="categoryIndex + Math.random()"
      class="category-list"
    >
      <div class="category-title">{{ category }}</div>
      <div class="category-content">
        <div
          v-for="(course, courseIndex) of categoryList[category]"
          :key="courseIndex + Math.random()"
          class="sp"
        >
          <div class="course" @click.prevent="showCourse(course.name)">
            <div class="image-area">
              <div class="category-type">{{ category }}</div>
              <img :src="course.url" class="course-image" alt="课程" />
              <div class="tag-list">
                <span
                  v-for="(tag, index) of course.tags.split('-')"
                  :key="index + Math.random()"
                  class="tag"
                  >{{ tag }}</span
                >
              </div>
            </div>
            <div class="text-area">
              <div class="operate">
                <div class="course-name">{{ course.name }}</div>
                <div class="course-time">
                  有效期限：{{
                    course.validTime ? course.validTime : '长期有效'
                  }}
                </div>
              </div>
              <div class="operate">
                <div class="tuition">¥{{ course.tuition }}</div>
                <div class="buy-now">立即报名</div>
              </div>
              <div class="operate">
                <div class="course-time">{{ course.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="course-schedual">
      <div class="category-title" :style="{ marginBottom: '20px' }">
        课程安排
      </div>
      <course-schedual></course-schedual>
    </div>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '60%' }"
    >
      <message-board
        :course-name="course"
        :closeable="true"
        close-icon="cross"
        @success="close"
      ></message-board>
    </van-popup>
  </div>
</template>

<script>
import MessageBoard from '@/components/common/messageBoard';
import courseSchedual from '@/pages/course/time/index';
import { Api } from '@/api/index';
export default {
  components: {
    courseSchedual,
    MessageBoard
  },
  /*  props: {
     categoryList: {
       type: Array,
       default () {
         return null;
       }
     }
   }, */
  data() {
    return {
      tagColorList: ['default', 'success', 'danger', 'primary'],
      categoryList: [],
      show: false,
      course: ''
    };
  },
  created() {
    if (process.client) {
      const categoryList = this.$axios({
        method: 'get',
        url: Api.courseList
      })
        .then(res => {
          if (res.data.resultCode === 0) {
            this.categoryList = res.data.data;
          } else {
            this.$toast('服务器错误,请联系画室管理人。');
          }
        })
        .catch(() => {
          this.$toast('网络错误！');
        });
    }
  },
  methods: {
    getRandomColor() {
      return this.tagColorList[Math.floor(Math.random() * 4)];
    },
    showCourse(courseName) {
      this.course = courseName;
      this.show = true;
    },
    navTo(course) {
      this.$router.push({ path: '/contact', courseName: course.courseName });
    },
    close() {
      this.show = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
.category {
  width: auto;
  margin: 0 auto;
  width: 1200px;
}
.category-title {
  font-weight: 900;
  font-size: 24px;
  color: #1c1f21;
  letter-spacing: 0px;
  line-height: 32px;
  padding: 10px 0 0 20px;
}
.category-list {
}
.category-content {
  width: 100%;
  display: flex;
  padding-left: 10px;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.course {
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
}
.sp {
  display: flex;
  flex-flow: row wrap;

  margin: 10px 0;
}
.category-content {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.image-area {
  width: 270px;
  height: 140px;
  margin: 0 auto;
  position: relative;
  left: 12px;
}
.category-type {
  position: absolute;
  left: -10px;
  top: 5px;
  padding: 2px 2px;
  color: #fff;
  border-radius: 6px;
  border: 2px solid #fff;
  font-size: 12px;
  background-color: @color-brand;
  background-image: linear-gradient(90deg, @color-brand 17%, #f76b1c 100%);
}
.course-image {
  width: 240px;
  height: 130px;
  background-color: #f3f5f7;
  border-radius: 8px;
}
.course-name {
  font-size: 12px;
  color: #f00;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s;
  font-weight: 400;
}
.text-area {
  margin-top: 0px;
}
.course-name:hover {
  color: #f00;
  cursor: pointer;
}
.tag-list {
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  top: 100px;
  left: 10px;
}
.tag {
  display: inline-block;
  background: rgba(28, 31, 33, 0.6);
  border-radius: 4px;
  padding: 4px 4px;
  color: #fff;
  font-size: 12px;
  margin-bottom: 2px;
  margin-right: 4px;
  font-weight: 200;
}
.course-time {
  font-size: 12px;
  color: #9199a1;
}
.operate {
  box-sizing: border-box;
  padding: 0px 15px 5px 10px;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.operate:nth-child(2) {
  margin-top: -5px;
}
.tuition {
  color: #f01414 !important;
  font-weight: bold;
  font-size: 12px;
}
.buy-now {
  box-sizing: border-box;
  background: rgba(242, 13, 13, 0.08);
  border-radius: 2px;
  font-weight: 200;
  color: #f00;
  font-weight: bold;
  padding: 2px 4px;
  font-size: 12px;
  display: inline-block;
}
.course-schedual {
  width: 100%;
  max-width: 800px;
  margin: 20px 0px;
}
</style>
