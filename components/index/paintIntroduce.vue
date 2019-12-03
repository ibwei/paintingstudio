<template>
  <div>
    <!-- 画室介绍 -->
    <div class="introduce">
      <div class="introduce-title">
        <v-title :init-title="initTtile"></v-title>
      </div>
      <!-- 介绍中间图片 -->
      <div class="sign">
        <van-image :src="introduceImg">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </div>
      <div class="introduce-text">
        <div class="phone-steps">
          <van-steps :active="active" :active-color="Color.colorbrand" direction="vertical">
            <van-step v-for="item of introduce" :key="item.index">{{ item.desc }}</van-step>
          </van-steps>
        </div>
        <div class="steps">
          <a-steps :current="-1">
            <a-step
              v-for="item of introduce"
              :key="item.index"
              :title="item.title"
              :description="item.desc"
            />
          </a-steps>
        </div>
      </div>
    </div>
    <!-- 画室动态 -->
  </div>
</template>

<script>
import vTitle from '../common/vTitle';
import { Color } from '../../config/color';
export default {
  components: {
    vTitle
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
      active: 2,
      /** 介绍中间的图片 */
      introduceImg: require('../../assets/images/index/sign.png'),
      status: 'finish',
      title: '创办时间',
      introduce: [
        {
          index: 0,
          title: '创办时间',
          desc: '2019年创办于重庆大学城，两兄弟所办,朝气蓬勃'
        },
        {
          index: 1,
          title: '随到随学',
          desc: '全年开课，随到随学，自由选择学习时间'
        },
        {
          index: 2,
          title: '学习自由',
          desc: '任何分点报名均可在其他分点学习，课时不作废'
        },
        {
          index: 3,
          title: '专业师资',
          desc: '主教老师均为固定全职老师，科班出身，专业扎实'
        }
      ]
    };
  },
  computed: {},
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
  max-width: 1200px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 5px;
  line-height: 1.5em;
}

.steps {
  display: block;
  padding: 20px 20px 50px 20px;
}
.phone-steps {
  display: none;
}
@media screen and (max-width: 720px) {
  .steps {
    display: none;
  }
  .phone-steps {
    display: block;
  }
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
.ant-steps-item-wait .ant-steps-item-icon {
  border-color: @color-brand;
}
</style>
