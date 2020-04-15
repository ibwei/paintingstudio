<template>
  <div class="teacher">
    <card :card-list="teacherList" />
  </div>
</template>

<script>
import card from '@/components/common/card';
export default {
  components: {
    card
  },
  props: {
    teacherList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      initTtile: {
        cnTitle: '教师资源',
        enTitle: 'Teacher Resources',
        mode: 'block',
        icon: '&#xe618;'
      }
    };
  }
};
</script>

<style lang="less" scope>
@import url('../../assets/css/color.less');
.teacher {
  background: #fff;
}
</style>
