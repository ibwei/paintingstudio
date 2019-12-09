<template>
  <div class="title-wrap">
    <div :class="mainClass">
      <div class="left">
        <div :class="dividerClass"></div>
      </div>
      <div class="mid">
        <div class="cn-title">
          {{ initTitle.cnTitle }}
          <span class="iconfont icon" v-html="initTitle.icon"></span>
        </div>
        <div class="en-title">{{ initTitle.enTitle }}</div>
      </div>
      <div class="right">
        <div :class="dividerClass"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    initTitle: {
      type: Object,
      default () {
        return {
          mode: 'black', // 两种颜色  [red | black ]
          cnTitle: '品贤画室', // 标题
          enTitle: 'PinXian Painting Studio', // 英文标题
          icon: '&#xe672;' // iconfont
        };
      }
    }
  },
  data () {
    return {
      dividerClass: 'divider',
      mainClass: 'main-title'
    };
  },
  created () {
    if (this.initTitle.mode === 'red') {
      this.dividerClass = 'divider';
      this.mainClass = 'main-title';
    } else {
      this.dividerClass = 'divider1';
      this.mainClass = 'main-title1';
    }
  }
};
</script>

<style scoped lang="less">
@import url('../../assets/css/color');
.title-wrap {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}
.iconfont {
  position: relative;
  right: 0px;
  top: 2px;
  font-size: 24px;
}
.main-title {
  color: @color-brand;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.main-title1 {
  color: #000;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.mid {
  position: relative;
  width: auto;
  text-align: center;
  .cn-title {
    font-size: 18px;
    font-weight: bold;
  }
  .en-title {
    font-size: 12px;
    line-height: 2;
  }
}
.left,
.right {
  margin: 10px 20px;
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  .divider {
    height: 1px;
    width: 100%;
    background: url('../../assets/images/common/line.png') center center
      no-repeat;
    background-size: 100% 100%;
  }
  .divider1 {
    height: 1px;
    width: 100%;
    background: url('../../assets/images/common/line-black.png') center center
      no-repeat;
    background-size: 100% 100%;
  }
}
.left {
  transform: rotate(180deg);
}

@media screen and(min-width: 720px) {
  .mid {
    position: relative;
    width: auto;
    text-align: center;
    .cn-title {
      font-size: 22px;
      font-weight: bold;
    }
    .en-title {
      font-size: 16px;
      line-height: 2;
    }
  }
  .iconfont {
    font-size: 30px;
    position: relative;
    right: 0px;
    top: 2px;
  }
}
</style>
