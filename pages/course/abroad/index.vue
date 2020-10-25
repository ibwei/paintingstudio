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
  data() {
    return {
      categoryList: [
        {
          categoryName: '留学考研班',
          courseList: [
            {
              courseName: '留学考研班(强化班)',
              courseImage: require('@/assets/images/art/art7.png'),
              validTime: '一年上完',
              tuition: '32800元/期',
              memo:
                '学习时间同上，协议班签订专业报过协议，学习课时不少于80次课，专业未过退一半学费，留学班包括辅导作品集在内。'
            },
            {
              courseName: '艺考基础班(套餐二)',
              courseImage: require('@/assets/images/art/art7.png'),
              validTime: '一年上完',
              tuition: '52800元/期',
              memo:
                '学习时间同上，协议班签订专业报过协议，学习课时不少于80次课，专业未过退一半学费，留学班包括辅导作品集在内。'
            }
          ]
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
