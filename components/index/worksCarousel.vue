<template>
  <div>
    <van-swipe :autoplay="5000" @change="onChange">
      <van-swipe-item v-for="(item, index) of worksImg" :key="index">
        <img :src="item.imgUrl" class="carouselImg" />
      </van-swipe-item>
      <div slot="indicator" class="custom-indicator">
        {{ currentIndex }}/ {{ imgLength }}
      </div>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 1,
      worksImg: [
        {
          index: 1,
          imgUrl: require('../../assets/images/index/worksImg01.jpg')
        },
        {
          index: 2,
          imgUrl: require('../../assets/images/index/worksImg02.jpg')
        },
        {
          index: 3,
          imgUrl: require('../../assets/images/index/worksImg03.jpg')
        },
        {
          index: 4,
          imgUrl: require('../../assets/images/index/worksImg04.jpg')
        }
      ]
    };
  },
  computed: {
    imgLength() {
      return this.worksImg.length;
    }
  },
  methods: {
    onChange(index) {
      this.currentIndex = index + 1;
    }
  }
};
</script>

<style lang="less" scope>
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
