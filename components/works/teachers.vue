<template>
  <div id="teachers">
    <div class="title">{{ title }}</div>
    <div id="content">
      <div class="icon left" @click="handlerLeftBtn">&#xe645;</div>
      <div class="content">
        <div v-for="(item,index) of teachers" :key="index" class="teacher">
          <div v-show="item.index1 == currIndex" class="tea-teaher">
            <transition name="fade">
              <div class="word">
                <div class="teacher-name">{{ item.name }}</div>
                <div id="teacher-info">
                  <span class="info-title">标签：</span>
                  <tag :infos="item.info" />
                </div>
                <div class="teacher-intr">{{ item.introduce }}</div>
                <div class="button">{{ button }}</div>
              </div>
            </transition>
            <div class="img">
              <img :src="item.imgUrl" height="100%" />
            </div>
          </div>
        </div>
      </div>
      <div class="icon right" @click="handlerRightBtn">&#xe646;</div>
    </div>
    <div id="phone-cont">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) of teachers" :key="index">
          <div class="phone-word">
            <div class="teacher-name">{{ item.name }}</div>
            <div id="teacher-info">
              <span class="info-title">标签：</span>
              <tag :infos="item.info" />
            </div>
            <div class="teacher-intr">{{ item.introduce }}</div>
            <van-button plain color="#e00">{{ button }}</van-button>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import tag from './components/tagrandtype.vue'
export default {
  components: {
    tag
  },
  data () {
    return {
      currIndex: 1,
      title: '教资力量',
      button: '查看详情',
      teachers: [
        { index1: 1, info: ['帅气', '受学员喜欢', '有耐心', '绘画水平高'], name: '田齐1', imgUrl: require('../../assets/images/carasel/1.jpg'), introduce: '王爽1982年出生于吉林省梅河口市现居住、工作于北京2002年毕业于中央美院附中2007年毕业于中央美术学院雕塑系，获学士学位2010年毕业于中央美术学院雕塑系，获硕士学位2008年任教于李靖美术培训中心至今。从事艺考培训已有15年。展览：2009年作品“...爽1982年出生于吉林省梅河口市现居住、工作于北京2002年毕业于中央美院附中2007年毕业' },
        { index1: 2, info: ['不帅气', '不受学员喜欢', '没有耐心', '绘画水平不高'], name: '田齐2', imgUrl: require('../../assets/images/carasel/1.jpg'), introduce: '王爽1982年出生于吉林省梅河口市现居住、工作于北京2002年毕业于中央美院附中2007年毕业于中央美术学院雕塑系，获学士学位2010年毕业于中央美术学院雕塑系，获硕士学位2008年任教于李靖美术培训中心至今。从事艺考培训已有15年。展览：2009年作品“...爽1982年出生于吉林省梅河口市现居住、工作于北京2002年毕业于中央美院附中2007年' }
      ]
    }
  },
  methods: {
    handlerRightBtn () {
      if (this.currIndex === this.teachers.length) {
        this.currIndex = 1;
      } else {
        this.currIndex++
      }
    },
    handlerLeftBtn () {
      if (this.currIndex === 1) {
        this.currIndex = this.teachers.length;
      } else {
        this.currIndex--;
      }
    }
  }
}
</script>
<style lang="less" scoped>
#teachers {
  padding: 0px 10px;
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  text-align: center;
  position: relative;
}
#teacher-info {
  margin-top: 15px;
}
.info-title {
  font-size: 16px;
  font-weight: 600;
}
.van-tag {
  font-size: 16px;
  margin: 10px 5px;
  padding: 4px 8px;
}
.title {
  font-size: 24px;
  color: rgb(207, 39, 41);
  font-weight: 300;
  line-height: 150%;
  margin: 0;
  padding: 0 20px;
}
.title:before {
  display: inline-block;
  height: 1px;
  background-color: #ddd;
  padding: 0;
  content: '';
  width: 100px;
  margin: 10px 15px;
}

.title::after {
  display: inline-block;
  height: 1px;
  background-color: #ddd;
  padding: 0;
  content: '';
  width: 100px;
  margin: 10px 15px;
}
#content {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.content {
  flex: 1;
  justify-content: space-around;
}
.left {
  font-size: 40px;
  color: #eee;
  cursor: pointer;
}
.left:hover {
  color: #e00;
}
.right {
  font-size: 40px;
  color: #eee;
  cursor: pointer;
}
.right:hover {
  color: #e00;
}
.tea-teaher {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  align-items: center;
}
.word {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0px auto;
}
.teacher-name {
  font-size: 20px;
  letter-spacing: 0.3em;
}
.button {
  cursor: pointer;
  margin-top: 30px;
}
.teacher-intr {
  max-width: 450px;
  margin: 30px auto;
  line-height: 1.8em;
  font-size: 16px;
  text-indent: 2em;
  letter-spacing: 0.15em;
}
.img {
  height: 389px;
  width: 300px;
  overflow: hidden;
  margin-right: 50px;
}
.button {
  border: 1px solid #e00;
  color: #e00;
  padding: 8px 15px;
  align-self: center;
}
.teacher-info {
  display: inline-block;
}
//过度动画
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#phone-cont {
  display: none;
}
@media screen and (max-width: 720px) {
  #content {
    display: none;
  }
  #phone-cont {
    display: block;
  }
}
</style>
