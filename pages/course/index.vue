<template>
  <div class="course">
    <course-list :category-list="categoryList"></course-list>
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
          categoryName: '体验课',
          courseList: [{
            courseName: '体验课(三小时)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '一次',
            tuition: '120元/次',
            tagList: ['水彩', '素描', '自选']
          }]
        }, {
          categoryName: '素描班',
          courseList: [{
            courseName: '素描班(20课时)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '一年',
            tuition: '2000元/期',
            tagList: ['素描基础', '石膏几何', '静物']
          }, {
            courseName: '素描班(30课时)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '一年半',
            tuition: '2800元/期',
            tagList: ['素描基础', '系统训练']
          }]
        }, {
          categoryName: '短期综合班',
          courseList: [{
            courseName: '短期综合班(25课时)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '一个月',
            tuition: '2000元/期',
            tagList: ['素描', '色彩', '速写', '油画']
          }, {
            courseName: '短期综合班(50课时)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '两个月',
            tuition: '3500元/期',
            tagList: ['素描', '动漫', '手绘']
          }],
        }, {
          categoryName: '综合班',
          courseList: [{
            courseName: '综合班(35课时)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '一个月',
            tuition: '2000元/期',
            tagList: ['水粉', '动漫', '手绘']
          }, {
            courseName: '短期综合班(50课时)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '两个月',
            tuition: '3500元/期',
            tagList: ['色彩', '速写', '手绘']
          }]
        }, {
          categoryName: '色彩班',
          courseList: [{
            courseName: '综合班(15课时)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '三年',
            tuition: '2000元/期',
            tagList: ['水彩', '油画', '彩铅']
          }]
        }, {
          categoryName: '油画定制课',
          courseList: [{
            courseName: '油画定制课(不限课时)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '不限制',
            tuition: '1600元/期',
            tagList: ['大师画册', '自选', '不计课时']
          }]
        }, {
          categoryName: '长期班',
          courseList: [{
            courseName: '长期班(半年)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '不限制',
            tuition: '6500元/期',
            tagList: ['不限时间', '不限内容']
          }, {
            courseName: '长期班(全年)',
            courseImage: require('@/assets/images/art/art7.png'),
            validTime: '不限制',
            tuition: '12000元/期',
            tagList: ['大师画册', '不限时间']
          }]
        }],
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
@import url('../../assets/css/color');
.course {
  width: 100%;
  padding: 10px 10px;
}
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
.course-time {
  font-size: 10px;
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
