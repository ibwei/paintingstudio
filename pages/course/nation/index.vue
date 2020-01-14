<template>
  <div class="course">
    <course-list :category-list="categoryList" listType="memo"></course-list>
  </div>
</template>

<script>
import courseList from '@/components/course/courseList';
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
    };
  }
};
</script>

<style lang="less" scoped>
.course {
  width: 100%;
  padding: 10px 10px;
}
</style>
