<template>
  <div class="sticky-wrap">
    <div class="function">
      <div class="function-item" v-show="!isUnfold" @click="openWechat">
        <span class="iconfont icon" :style="{color:'#1aad19',fontSize:iconSize1+'px'}">&#xe632;</span>
      </div>
      <div class="function-item" v-show="!isUnfold">
        <a class="tel" href="tel:18883923917">
          <span class="icon" :style="{color:'#cf2729',fontSize:iconSize1+'px'}">&#xe626;</span>
        </a>
      </div>
      <div class="function-item" v-show="!isUnfold">
        <a href="tencent://message/?uin=785486779&Site=sc.chinaz.com&Menu=yes">
          <span class="icon" :style="{color:'#4889f7',fontSize:iconSize1+'px'}">&#xe657;</span>
        </a>
      </div>
      <div class="function-item" v-show="!isUnfold" @click="changeIsUnfold">
        <van-icon name="arrow-up" :size="iconSize" />
      </div>
      <div class="function-item" v-show="isUnfold" @click="changeIsUnfold">
        <van-icon name="arrow-down" :size="iconSize" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  props: {},
  components: {},
  data () {
    return {
      iconSize: 20,
      iconSize1: 30,
      isUnfold: false,
    };
  },
  computed: {
    ...mapState(['isPhone']),
  },
  watch: {
    isPhone () {
      this.changeSize();
    }
  },
  methods: {
    changeIsUnfold () {
      this.isUnfold = !this.isUnfold;
    },
    openWechat () {
      this.$emit('wechat-click');
    },
    changeSize () {
      if (this.isPhone === true) {
        this.iconSize = 20;
        this.iconSize1 = 30;
      } else {
        this.iconSize = 26;
        this.iconSize1 = 36;
      }
    }
  },
  created () {

  },
  mounted () {

  }
};
</script>
<style scoped lang="less">
@import url('../../assets/css/color');
.sticky-wrap {
  border: 1px solid @color-border-lighter;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
}
.function {
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
}
.function-item {
  padding: 5px;
  transition: all 1s ease-in-out;
  cursor: pointer;
}
.function-item a {
  text-decoration: none;
  cursor: pointer;
}
.function-item + .function-item {
  border-top: 1px solid @color-border-lighter;
}
</style>
