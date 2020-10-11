<template>
  <div class="course">
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
    return { categoryList: categoryList.data.data }
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
  width: 100%;
  padding: 10px 10px;
}
</style>
