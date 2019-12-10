<template>
  <div>
    <v-title :init-title="initTtile"></v-title>
    <van-swipe :autoplay="5000" @change="onChange">
      <van-swipe-item v-for="(item, index) of worksImg" :key="index">
        <van-image
          :src="item.imgUrl"
          class="carouselImg"
          @load="onLoad()"
          @click="showPreview(index)"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </van-swipe-item>
      <div
        v-show="showImages"
        slot="indicator"
        class="custom-indicator"
      >{{ currentIndex }}/ {{ imgLength }}</div>
    </van-swipe>
  </div>
</template>

<script>
import vTitle from '@/components/common/vTitle';
export default {
  components: {
    vTitle
  },
  data () {
    return {
      initTtile: {
        cnTitle: '画室环境',
        enTitle: 'Student Painting Works',
        mode: 'black',
        icon: '&#xe618;'
      },
      /** 当前图片索引 */
      currentIndex: 1,
      /** 学生作品图片-图片比例需统一，16:9效果较佳 */
      /** 电脑端 */
      pcImgUrl: require('../../assets/images/index/a42.png'),
      /** 手机端 */
      showImages: false,
      worksImg: [
        {
          index: 1,
          imgUrl: require('../../assets/images/index/worksImg01.png')
        },
        {
          index: 2,
          imgUrl: require('../../assets/images/index/worksImg02.png')
        },
        {
          index: 3,
          imgUrl: require('../../assets/images/index/worksImg03.png')
        },
        {
          index: 4,
          imgUrl: require('../../assets/images/index/worksImg04.png')
        }
      ]
    }
  },
  computed: {
    /** 图片数量 */
    imgLength () {
      return this.worksImg.length;
    },
    /** 图片地址数组 */
    imgUrls () {
      const arr = [];
      this.worksImg.forEach((item) => {
        arr.push(item.imgUrl);
      });
      return arr;
    }
  },
  methods: {
    /**
     * @method 滑动图片改变时
     */
    onChange (index) {
      this.currentIndex = index + 1;
    },
    onLoad () {
      this.showImages = true;
    },
    /* 打开图片预览 */
    showPreview (index) {
      if (!this.isPhone) {
        window.open(this.imgUrls[index]);
        return;
      }
      this.currentIndex = index + 1;
      this.show = true;
    }
  }
}
</script>

<style lang='less' scoped>
.carouselImg {
  width: 100%;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
