<template>
  <div class="course">
    <div v-html="zsjj" class="zsjj"></div>
    <course-list :category-list="categoryList"></course-list>
  </div>
</template>

<script>
import courseList from '@/components/course/courseList'
import { Api } from '@/api/index'
export default {
  components: {
    courseList
  },
  data() {
    return {
      initTtile: {
        cnTitle: '推荐课程',
        enTitle: 'About PinXian Painting Studio',
        mode: 'black',
        icon: '&#xe672;'
      }
    }
  },
  async asyncData({ $axios }) {
    const categoryList = await $axios({
      method: 'get',
      url: Api.courseList
    })
    const zsjj = await $axios({
      method: 'get',
      url: Api.getAnnouncement
    })
    return {
      categoryList: categoryList.data.data,
      zsjj: zsjj.data.data[0].content
    }
  },
  created() {
    if (process.client) {
      localStorage.setItem('courseList', JSON.stringify(this.categoryList))
    }
  },
  activated() {
    localStorage.setItem('courseList', JSON.stringify(this.categoryList))
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
.course {
  .zsjj {
    padding: 20px 4px;
    img {
      width: 100%;
    }
  }
  width: 100%;
  padding: 10px 10px;
}
</style>
