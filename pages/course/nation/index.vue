<template>
  <div class="course">
    <course-list :category-list="categoryList" listType="memo"></course-list>
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
          categoryName: '国画书法班',
          courseList: [{
            courseName: '国画书法班(套餐一)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '六个月',
            tuition: '2500元/20次课',
            memo: '一对一授课，六个月上完，可免费试学，每次课120分钟；自由选择学国画，书法，纂刻画室提供工具。',
          }, {
            courseName: '国画书法班(套餐二)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '一年',
            tuition: '3800元/40次课',
            memo: '一对一授课，一年内上完，可免费试学，每次课120分钟；自由选择学国画，书法，纂刻画室提供工具。',
          }]
        }
      ],
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
.course {
  width: 100%;
  padding: 10px 10px;
}
</style>
