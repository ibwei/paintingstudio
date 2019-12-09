<template>
  <div>
    <!-- 画室介绍 -->
    <div class="introduce">
      <div class="introduce-title">
        <v-title v-bind:initTitle="initTtile"></v-title>
      </div>
      <!-- 介绍中间图片 -->
      <div class="sign">
        <img src="../../assets/images/index/sign.png" />
      </div>
      <div class="introduce-text">
        <van-steps :active="active" :active-color="Color.colorbrand" direction="vertical">
          <van-step>2019年创办于重庆大学城，两兄弟所办,朝气蓬勃</van-step>
          <van-step>全年开课，随到随学，自由选择学习时间</van-step>
          <van-step>任何分点报名均可在其他分点学习，课时不作废</van-step>
          <van-step>主教老师均为固定全职老师，科班出身，专业扎实</van-step>
        </van-steps>
      </div>
    </div>
    <!-- 画室动态 -->
  </div>
</template>

<script>
import vTitle from '../common/vTitle'
import { mapState } from 'vuex';
import { Color } from '../../config/color'
export default {
  components: {
    vTitle,
  },
  data () {
    return {
      Color,
      initTtile: {
        cnTitle: '关于品贤画室',
        enTitle: 'About PinXian Painting Studio',
        mode: 'red',
        icon: '&#xe672;'
      },
      /** 画室介绍当前进度 */
      active: 2
    };
  },
  computed: {
    ...mapState(['isPhone']) // 加载设备类型
  },
  methods: {
    /**
     * @methed 跳转到校务详情页
     * @params {index} 校务对应id
     * @return void
     */
    goDetail (index) {
      this.$router.push({ path: `detail?id=${index}` });
    }
  }
};
</script>
<style lang="less" scoped>
@import url('../../assets/css/color');
.introduce {
  background: #fff;
  text-align: center;
  .introduce-title {
    padding: 30px 0 10px 0px;
    span {
      &::before {
        content: '—';
      }
      &::after {
        content: '—';
      }
      &::before,
      &::after {
        margin: 0px 5px;
      }
    }
  }
}

.introduce-text {
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 5px;
  line-height: 1.5em;
}

@media screen and (max-width: 720px) {
  .introduce {
    .introduce-title {
      font-size: 20px;
    }
    .introduce-text {
      font-size: 14px;
    }
  }
  .van-cell__value {
    -webkit-box-flex: 0;
    -webkit-flex: 0;
    flex: 0;
    min-width: 90px;
  }
}

/* 新增 */
.sign {
  margin-bottom: 20px;
}
</style>
