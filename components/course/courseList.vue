<template>
  <div class="category">
    <div v-for="(category,index) of categoryList" :key="index" class="course-item">
      <div class="category-title">{{ category.categoryName }}</div>
      <div v-for="(course,courseIndex) of category.courseList" :key="courseIndex" class="content">
        <div class="top">
          <div class="t-left">
            <img :src="course.courseImage" alt class="course-img" />
          </div>
          <div class="t-right">
            <div class="course-name">{{ course.courseName }}</div>
            <div class="course-time">
              <van-icon name="clock-o" size="14px" />
              <span>有效期:{{ course.validTIME }}</span>
            </div>
            <div class="course-teacher">
              <van-icon name="balance-pay" size="14px" />
              <span>学费:￥{{ course.tuition }}</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="b-left">
            <van-tag
              v-for="(tag,tagIndex) of course.tagList"
              :key="tagIndex"
              size="8px"
              style="margin-left:2px"
              :type="getRandomColor()"
              round
            >
              {{ tag }}
            </van-tag>
          </div>
          <div class="b-right">去预约</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryList: {
      type: Array,
      default() {
        return null;
      }
    }
  },
  data () {
    return {
      tagColorList: ['default', 'success', 'danger', 'primary']
    }
  },
  methods: {
    getRandomColor () {
      return this.tagColorList[Math.floor(Math.random() * 4)];
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
.course-item {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
}
.category-title {
  font-size: 16px;
  font-weight: 800;
  color: #000;
  margin: 10px 0px;
  font-family: '微软雅黑';
}
.content {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}
.top {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.course-img {
  width: 60px;
  height: 50px;
  border-radius: 3px;
}
.course-name {
  font-size: 14px;
  color: #000;
}
.course-time,
.course-teacher {
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  span {
    margin-left: 5px;
  }
}
.t-right {
  flex: 1;
  margin-left: 10px;
  font-size: 12px;
  line-height: 1.5;
  box-sizing: border-box;
}

.bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  margin: 10px 0px 0px 0px;
}
.b-right {
  box-sizing: border-box;
  background: @color-brand;
  color: #fff;
  padding: 2px 5px;
  border-radius: 2px;
}
</style>
