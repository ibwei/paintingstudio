<template>
  <div id="teachers">
    <div class="teachers">
      <div class="title">
        <v-title :init-title="initTtile"></v-title>
      </div>
      <div class="content">
        <div class="box">
          <div class="cude">
            <div class="front surface">专业</div>
            <div class="surface left">值得信任</div>
            <div class="surface right">名校毕业</div>
            <div class="surface bottom">经验丰富</div>
            <div class="surface top">保持专注</div>
            <div class="surface back">责任感</div>
            <div class="surface-in front-in">
              <img src="../../assets/images/index/teacher.jpg" alt />
            </div>
            <div class="surface-in back-in">
              <img src="../../assets/images/index/teacher.jpg" alt />
            </div>
            <div class="surface-in left-in">
              <img src="../../assets/images/index/teacher.jpg" alt />
            </div>
            <div class="surface-in right-in">
              <img src="../../assets/images/index/teacher.jpg" alt />
            </div>
            <div class="surface-in top-in">
              <img src="../../assets/images/index/teacher.jpg" alt />
            </div>
            <div class="surface-in bottom-in">
              <img src="../../assets/images/index/teacher.jpg" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="button" @click="navToContact">查看更多</div>
    </div>
  </div>
</template>

<script>
import vTitle from '../common/vTitle';
export default {
  components: {
    vTitle
  },
  data () {
    return {
      currIndex: 2,
      initTtile: {
        cnTitle: '师资力量',
        enTitle: 'Teacher Resources',
        mode: 'red',
        icon: '&#xe601;'
      }
    };
  },
  methods: {
    navToContact () {
      this.$router.push({ path: '/contact' });
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color.less');
#teachers {
  width: 100%;
  background: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
}
.title {
  width: 100%;
}
.teachers {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
}
.button {
  color: #e00;
  border: 1px solid #e00;
  padding: 6px 12px;
  cursor: pointer;
}

/* 3d效果 */

.box {
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0px;
  margin-top: 0px;
  -webkit-transition: transform 0.6s;
  transition: transform 0.6s;
}
.cude {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 100px auto;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(-80deg);
  transform-origin: 50% 50% 0;
  -webkit-transform-origin: 50% 50% 0;
  -webkit-animation: rotate 12s infinite;
  animation: rotate 12s infinite;
}
.surface {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: rgba(255, 0, 0, 0.4);
  font-family: '微软雅黑';
  opacity: 0.8;
  font-size: 14px;
  text-align: center;
  line-height: 100px;
  font-weight: normal;
  color: #fff;
  border: 1px solid @color-brand;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.surface img {
  width: 100%;
}
.front {
  transform: rotateY(0) translateZ(100px);
}
.back {
  transform: translateZ(-100px) rotateY(180deg);
}
.left {
  transform: rotateY(-90deg) translateZ(100px);
}
.right {
  transform: rotateY(90deg) translateZ(100px);
}
.top {
  transform: rotateX(90deg) translateZ(100px);
}
.bottom {
  transform: rotateX(90deg) translateZ(-100px);
}
.cude:hover .front {
  transform: rotateY(0) translateZ(150px);
}
.cude:hover .back {
  transform: translateZ(-150px) rotateY(180deg);
}
.cude:hover .left {
  transform: rotateY(-90deg) translateZ(150px);
}
.cude:hover .right {
  transform: rotateY(90deg) translateZ(150px);
}
.cude:hover .top {
  transform: rotateX(90deg) translateZ(150px);
}
.cude:hover .bottom {
  transform: rotateX(90deg) translateZ(-150px);
}
@-webkit-keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
@-ms-keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.surface-in {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
}
.surface-in img {
  width: 100px;
  height: 100px;
}
.front-in {
  transform: rotateY(0deg) translateZ(50px);
}
.back-in {
  transform: rotateY(180deg) translateZ(50px);
}
.left-in {
  transform: rotateY(-90deg) translateZ(50px);
}
.right-in {
  transform: rotateY(90deg) translateZ(50px);
}
.top-in {
  transform: rotateX(90deg) translateZ(-50px);
}
.bottom-in {
  transform: rotateX(-90deg) translateZ(-50px);
}
@media screen and (max-width: 780px) {
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
