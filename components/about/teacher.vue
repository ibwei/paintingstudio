<template>
  <div class="teacher">
    <v-title :init-title="initTtile"></v-title>
    <card :card-list="teacherList" />
  </div>
</template>

<script>
import card from '@/components/common/card'
import vTitle from '@/components/common/vTitle';
export default {
  components: {
    vTitle,
    card
  },
  data () {
    return {
      initTtile: {
        cnTitle: '教师资源',
        enTitle: 'Teacher Resources',
        mode: 'block',
        icon: '&#xe618;'
      },
      teacherList: [
        {
          id: 1,
          name: '田奇',
          desc: '专业水墨画老师，多次获得国赛一等奖',
          headImg: require('../../assets/images/index/cat.png'),
          rate: 4.5
        },
        {
          id: 2,
          name: '田奇2',
          desc: '北京艺术大学毕业，参与过多次xxx奖的评选',
          headImg: require('../../assets/images/index/cat.png'),
          rate: 5
        },
        {
          id: 3,
          name: '田奇3',
          desc: '热情好学，乐于帮助同学解决问题',
          headImg: require('../../assets/images/index/cat.png'),
          rate: 4.7
        },
        {
          id: 4,
          name: '田奇4',
          desc: '坦克驾驶员',
          headImg: require('../../assets/images/index/cat.png'),
          rate: 4.0
        }
      ]
    }
  }
}
</script>

<style lang='less' scope>
@import url('../../assets/css/color.less');
.teacher {
  background: @color-grey-5;
}
</style>
