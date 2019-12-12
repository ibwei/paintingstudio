import courseList from '@/components/course/courseList';
<template>
  <div class="category">
    <div
      v-for="(category,categoryIndex) of categoryList"
      :key="categoryIndex+Math.random()"
      class="category-list"
    >
      <div class="category-title">{{ category.name }}</div>
      <div class="category-content">
        <template v-for="(courseType) of category.list">
          <div
            v-for="(course,courseIndex) of courseType.courseList"
            :key="courseIndex+Math.random()"
            class="sp"
          >
            <div class="course" @click="navTo(course)">
              <div class="image-area">
                <div class="category-type">{{ courseType.categoryName }}</div>
                <img :src="course.courseImage" class="course-image" alt="课程" />
                <div class="tag-list">
                  <span
                    v-for="(tag,index) of course.tagList"
                    :key="index+Math.random()"
                    class="tag"
                  >{{ tag }}</span>
                </div>
              </div>
              <div class="text-area">
                <div class="operate">
                  <div class="course-name">{{ course.courseName }}</div>
                  <div class="course-time">有效期限：{{ course.validTime }}</div>
                </div>
                <div class="operate">
                  <div class="tuition">¥{{ course.tuition }}</div>
                  <div class="buy-now">立即报名</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="course-schedual">
      <div class="category-title" :style="{marginBottom:'20px'}">课程安排</div>
      <course-schedual></course-schedual>
    </div>
  </div>
</template>

<script>
import courseSchedual from '@/pages/course/time/index';
export default {
  components: {
    courseSchedual
  },
  /*  props: {
     categoryList: {
       type: Array,
       default () {
         return null;
       }
     }
   }, */
  data () {
    return {
      tagColorList: ['default', 'success', 'danger', 'primary'],
      categoryList: [
        {
          name: '绘画兴趣班',
          list: [{
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
            }]
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
              courseImage: require('@/assets/images/art/art14.png'),
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
          }]
        }, {
          name: '国画书法班',
          list: [{
            categoryName: '国画书法班',
            courseList: [{
              courseName: '国画书法班(套餐一)',
              courseImage: require('@/assets/images/art/art7.png'),
              validTime: '六个月',
              tuition: '2500元/20次课',
              memo: '一对一授课，六个月上完，可免费试学，每次课120分钟；自由选择学国画，书法，纂刻画室提供工具。'
            }, {
              courseName: '国画书法班(套餐二)',
              courseImage: require('@/assets/images/art/art7.png'),
              validTime: '一年',
              tuition: '3800元/40次课',
              memo: '一对一授课，一年内上完，可免费试学，每次课120分钟；自由选择学国画，书法，纂刻画室提供工具。'
            }]
          }] }, {
          name: '艺考基础班',
          list: [{
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
          }] }, {
          name: '留学考研班',
          list: [{
            categoryName: '留学考研班',
            courseList: [{
              courseName: '留学考研班(强化班)',
              courseImage: require('@/assets/images/art/art7.png'),
              validTime: '一年上完',
              tuition: '32800元/期',
              memo: '学习时间同上，协议班签订专业报过协议，学习课时不少于80次课，专业未过退一半学费，留学班包括辅导作品集在内。'
            }, {
              courseName: '艺考基础班(套餐二)',
              courseImage: require('@/assets/images/art/art7.png'),
              validTime: '一年上完',
              tuition: '52800元/期',
              memo: '学习时间同上，协议班签订专业报过协议，学习课时不少于80次课，专业未过退一半学费，留学班包括辅导作品集在内。'
            }]
          }] }
      ]
    }
  },
  created () {
    if (process.client) {
      console.log(this.categoryList)
    }
  },
  methods: {
    getRandomColor () {
      return this.tagColorList[Math.floor(Math.random() * 4)];
    },
    navTo (course) {
      console.log(course)
      this.$router.push({ path: '/contact', courseName: course.courseName })
    }

  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
.category {
  width: auto;
  margin: 0 auto;
  width: 1200px;
}
.category-title {
  font-weight: 900;
  font-size: 24px;
  color: #1c1f21;
  letter-spacing: 0px;
  line-height: 32px;
  padding: 10px 0 0 20px;
}
.category-list {
}
.category-content {
  width: 100%;
  display: flex;
  padding-left: 10px;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.course {
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
}
.sp {
  display: flex;
  flex-flow: row wrap;

  margin: 10px 0;
}
.category-content {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.image-area {
  width: 270px;
  height: 140px;
  position: relative;
}
.category-type {
  position: absolute;
  left: -10px;
  top: 5px;
  padding: 2px 2px;
  color: #fff;
  border-radius: 20px;
  border: 2px solid #fff;
  font-size: 12px;
  background-color: @color-brand;
  background-image: linear-gradient(90deg, @color-brand 17%, #f76b1c 100%);
}
.course-image {
  width: 240px;
  height: 130px;
  background-color: #f3f5f7;
  border-radius: 8px;
}
.course-name {
  font-size: 16px;
  color: #07111b;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: all 0.3s;
  font-weight: bold;
}
.text-area {
  margin-top: 0px;
}
.course-name:hover {
  color: #f00;
  cursor: pointer;
}
.tag-list {
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  top: 100px;
  left: 10px;
}
.tag {
  display: inline-block;
  background: rgba(28, 31, 33, 0.6);
  border-radius: 4px;
  padding: 4px 4px;
  color: #fff;
  font-size: 12px;
  margin-bottom: 2px;
  margin-right: 4px;
  font-weight: 200;
}
.course-time {
  font-size: 12px;
  color: #9199a1;
}
.operate {
  box-sizing: border-box;
  padding: 0px 15px 5px 10px;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.operate:nth-child(2) {
  margin-top: -5px;
}
.tuition {
  color: #f01414 !important;
  font-weight: bold;
  font-size: 12px;
}
.buy-now {
  box-sizing: border-box;
  background: rgba(242, 13, 13, 0.08);
  border-radius: 2px;
  font-weight: 200;
  color: #f00;
  font-weight: bold;
  padding: 2px 4px;
  font-size: 12px;
  display: inline-block;
}
.course-schedual {
  width: 100%;
  max-width: 800px;
  margin: 20px 0px;
}
</style>
