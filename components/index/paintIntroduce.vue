<template>
  <div>
    <!-- 画室介绍 -->
    <div class="introduce">
      <div class="introduce-title">
        <v-title :init-title="initTtile"></v-title>
      </div>
      <!-- 介绍中间图片 -->
      <div class="sign">
        <canvas-gallery height="300px"></canvas-gallery>
      </div>
      <div class="introduce-text">
        <div style="margin: 20px 0px 30px 0px;">
          <v-title :init-title="historyTitle"></v-title>
        </div>
        <div class="phone-steps">
          <van-steps
            :active="active"
            :active-color="Color.colorbrand"
            direction="vertical"
          >
            <van-step v-for="item of introduce" :key="item.index">{{
              item.desc
            }}</van-step>
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
import vTitle from '../common/vTitle'
import { Color } from '../../config/color'
import canvasGallery from '@/components/common/canvasGallery'
export default {
  components: {
    vTitle,
    canvasGallery
  },
  data() {
    return {
      Color,
      initTtile: {
        cnTitle: '关于品贤画室',
        enTitle: 'About PinXian Painting Studio',
        mode: 'red',
        icon: '&#xe672;'
      },
      historyTitle: {
        cnTitle: '发展历程',
        enTitle: 'Development History',
        mode: 'black',
        icon: '&#xe672;'
      },
      /** 画室介绍当前进度 */
      active: 4,
      /** 介绍中间的图片 */
      introduceImg: require('../../assets/images/index/sign.png'),
      status: 'finish',
      title: '创办时间',
      introduce: [
        {
          index: 0,
          title: '创办时间',
          desc: '2016年成立于重庆，原为重庆七空间艺术工作室。'
        },
        {
          index: 1,
          title: '重要里程',
          desc: '2019年更名为品贤画室，在西安和成都开设了两家店。'
        },
        {
          index: 2,
          title: '画室理念',
          desc: '致力于打造专业系统的成人美术教育；注重培养学生审美与绘画技巧。'
        },
        {
          index: 3,
          title: '专业师资',
          desc: '老师都是科班出身教学经验丰富,一对一教学，上课时间灵活。'
        },
        {
          index: 4,
          title: '开设课程',
          desc:
            '开设了素描、油画、国画、水彩、速写、彩铅、插画手绘基础等丰富内容。'
        }
      ]
    }
  },
  computed: {},
  methods: {
    /**
     * @methed 跳转到校务详情页
     * @params {index} 校务对应id
     * @return void
     */
    goDetail(index) {
      this.$router.push({ path: `detail?id=${index}` })
    }
  }
}
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
  border: none;
}
.ant-steps-item-wait .ant-steps-item-icon {
  border-color: @color-brand;
}
</style>
