<template>
  <!-- 学生作品 -->
  <div class="works-wrap">
    <!-- 学生作品 -->
    <v-title :init-title="initTtile"></v-title>
    <!-- pc端 -->
    <div class="works">
      <div class="student-works">
        <van-image :src="pcImgUrl">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </div>
      <!-- 手机端 -->
      <div class="student-works-phone">
        <van-swipe :autoplay="5000" @change="onChange">
          <van-swipe-item v-for="(item, index) of worksImg" :key="index">
            <van-image :src="item.imgUrl" class="carouselImg" @load="onLoad()">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </van-swipe-item>
          <div v-show="showImages" slot="indicator" class="custom-indicator">
            {{ currentIndex }}/ {{ imgLength }}
          </div>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
import vTitle from '../../components/common/vTitle';
export default {
  components: {
    vTitle
  },
  data() {
    return {
      // 学生作品标题
      initTtile: {
        cnTitle: '学生作品',
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
    };
  },
  computed: {
    /** 图片数量 */
    imgLength() {
      return this.worksImg.length;
    }
  },
  methods: {
    /**
     * @method 滑动图片改变时
     */
    onChange(index) {
      this.currentIndex = index + 1;
    },
    onLoad() {
      this.showImages = true;
    }
  }
};
</script>

<style lang="less" scope>
@import url('../../assets/css/color');
.works-wrap {
  background: @color-bg-base;
  padding: 20px 10px 40px 10px;
}
.works {
  margin-top: 10px;
}
.student-works {
  display: block;
  margin-top: 20px;
  img {
    width: 100%;
  }
}

.student-works-phone {
  display: none;
}
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
@media screen and (max-width: 720px) {
  .student-works {
    display: none;
  }
  .student-works-phone {
    display: block;
  }
}
</style>
