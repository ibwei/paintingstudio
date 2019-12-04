<template>
  <div class="lunbo">
    <div class="carasel-wrap">
      <div class="carasel-img">
        <div v-for="(item, index) of carasels" :key="index" class="img">
          <transition name="fade">
            <a v-show="index === currentIndex - 1">
              <img :src="item.imgUrl" width="100%" />
            </a>
          </transition>
        </div>
        <div class="hide1">
          <a>
            <img :src="carasel.imgUrl" width="100%" />
          </a>
        </div>
      </div>

      <div class="carasel-button">
        <span
          v-for="(item, index) of carasels"
          :key="index"
          class="btn"
          :class="{ active: index === currentIndex - 1 }"
          @click="handlerCheckBtn(item.index)"
        ></span>
      </div>
    </div>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in carasels" :key="index">
          <img :src="isPhone?item.phoneImg:item.imgUrl" class="item-img" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['isPhone']),
  },
  data () {
    return {
      titmer1: '',
      titmer2: null,
      currentIndex: 1, // 当前的index
      carasels: [
        { index: 1, imgUrl: require('../../assets/images/carasel/1.jpg'), phoneImg: require('../../assets/images/carasel/f1.jpg') },
        { index: 2, imgUrl: require('../../assets/images/carasel/2.jpg'), phoneImg: require('../../assets/images/carasel/f2.jpg') },
        { index: 3, imgUrl: require('../../assets/images/carasel/3.jpg'), phoneImg: require('../../assets/images/carasel/f3.jpg') },
        { index: 4, imgUrl: require('../../assets/images/carasel/4.jpg'), phoneImg: require('../../assets/images/carasel/f4.jpg') },
        { index: 5, imgUrl: require('../../assets/images/carasel/5.jpg'), phoneImg: require('../../assets/images/carasel/f5.jpg') }
      ],
      carasel: {
        index: 1,
        imgUrl: require('../../assets/images/carasel/2.jpg')
      }
    };
  },
  mounted () {
    this.titmer1 = setInterval(this.get, 3000);
  },
  beforeDestroy () {
    clearInterval(this.titmer1);
  },
  methods: {
    handlerCheckBtn (index) {
      this.currentIndex = index;
      clearInterval(this.titmer1);
      if (this.titmer2) {
        clearTimeout(this.titmer2);
        this.titmer2 = null;
      }
      this.titmer2 = setTimeout(() => {
        this.titmer1 = setInterval(this.get, 3000);
        this.titmer2 = null;
      }, 5000);
    },
    get () {
      if (this.currentIndex === this.carasels.length) {
        this.currentIndex = 1;
      } else {
        this.currentIndex++;
      }
    }
  }
};
</script>

<style scoped lang="less">
@import url('../../assets/css/color');
.carasel-wrap {
  display: block;
  max-height: 760px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.carasel-img {
  position: relative;
  top: 0;
  left: 0;
}
.img img {
  display: block;
  position: absolute;
}
.img a {
  display: block;
}
.carasel-button {
  clear: both;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 10px;
}
.carasel-button .btn {
  display: block;
  width: 14px;
  height: 4px;
  background: white;
  z-index: 99;
  margin-left: 10px;
}
.carasel-button .active {
  height: 8px;
  background: #cc0000;
  border: 2px solid #cc0000;
  border-left: none;
  border-right: none;
}
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.item-img {
  width: 100%;
  height: auto;
}

.swiper {
  display: none;
  width: 100%;
}
@media screen and (max-width: 720px) {
  .carasel-wrap {
    display: none;
  }
  .swiper {
    display: block;
    height: 100%;
    max-height: 600px;
  }
  .item-img {
    width: 100%;
    height: 200px;
  }
}
</style>
