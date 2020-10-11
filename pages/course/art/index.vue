<template>
  <div class="course">
    <course-list :category-list="categoryList" list-type="memo"></course-list>
  </div>
</template>

<script>
import courseList from '@/components/course/courseList'
export default {
  components: {
    courseList
  },
  data () {
    return {
      categoryList: [
        {
          categoryName: '艺考基础班',
          courseList: [{
            courseName: '艺考基础班(套餐一)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '半年',
            tuition: '5800元/期',
            memo: '主要针对参加美术校考的初高中生，按艺考生标准严格要求对素描、色彩、速写进行针对训练；周末，节假日均可来画，不计课时。'
          }, {
            courseName: '艺考基础班(套餐二)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '一年',
            tuition: '9800元/期',
            memo: '主要针对参加美术校考的初高中生，按艺考生标准严格要求对素描、色彩、速写进行针对训练；周末，节假日均可来画，不计课时。'
          }]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.course {
  width: 100%;
  padding: 10px 10px;
}
</style>
