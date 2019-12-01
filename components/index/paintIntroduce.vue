<template>
  <div>
    <!-- 画室介绍 -->
    <div class="introduce">
      <div class="introduce-title">
        <van-divider
          :style="{
            fontSize: '18px',
            color: '#cf2729',
            fontWeight: '300',
            padding: '0 16px'
          }"
        >
关于品贤画室
</van-divider>
      </div>
      <!-- 介绍中间图片 -->
      <div class="sign">
        <img src="../../assets/images/index/sign.png" />
      </div>
      <div class="introduce-text">
        <van-steps :active="active" direction="vertical">
          <van-step>2019年创办于重庆大学城，两兄弟所办,朝气蓬勃</van-step>
          <van-step>全年开课，随到随学，自由选择学习时间，分开辅导．</van-step>
          <van-step>任何分点报名均可在其他分点学习，课时不作废</van-step>
          <van-step>主教老师均为固定全职老师，科班出身，专业扎实．</van-step>
        </van-steps>
      </div>
    </div>
    <!-- 画室动态 -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
      /** 画室介绍当前进度 */
      active: 1
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
  background: @color-bg-base;
  text-align: center;
  .introduce-title {
    padding: 40px 0 10px 0px;
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
