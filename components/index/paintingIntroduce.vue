<template>
  <div>
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
    <div class="affaris">
      <div v-show="!isPhone" class="affaris-left">
        <img src="../../assets/images/index/2017330105615377.jpg" />
      </div>
      <div class="affaris-right">
        <div class="right-head" @click="goAffaris">
          <van-divider
            :style="{
              fontSize: '18px',
              color: '#cf2729',
              fontWeight: '300',
              padding: '0 16px'
            }"
          >
            画室动态
          </van-divider>
        </div>
        <van-list>
          <div
            v-for="item of list"
            :key="item.id"
            :title="item.title"
            :label="item.desc"
            :value="item.date"
            @click="goDetail(item.id)"
          >
            <!-- 这里开始循环写文章列表,想怎么写就怎写 -->
            <div class="article">
              <div class="one">
                <div>
                  <span class="title">{{ item.title }}</span>
                  <van-tag :type="item.color">{{ item.type }}</van-tag>
                </div>
                <div class="date">{{ item.date }}</div>
              </div>
              <div class="two">
                <span>{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </van-list>
        <div class="more">
          <van-button plain type="danger" size="small" @click="goAffaris">
            查看更多
          </van-button>
        </div>
      </div>
    </div>
    <van-divider
      :style="{
        fontSize: '18px',
        color: '#cf2729',
        fontWeight: '300',
        padding: '0 16px'
      }"
    >
      学生作品
    </van-divider>
    <div class="works">
      <div v-if="!isPhone" class="student-works">
        <img src="../../assets/images/index/a42.jpg" />
      </div>
      <div v-else>
        <worksCarousel />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import worksCarousel from './worksCarousel';
export default {
  components: {
    worksCarousel
  },
  data() {
    return {
      active: 1,
      list: [
        {
          id: 1,
          title: '重庆品贤画室正在筹备中',
          desc: '预选地点定为莲花购物广场附近，预计12月下旬开业',
          date: '2019/11/22',
          type: '热门',
          color: 'danger'
        },
        {
          id: 2,
          title: '零基础学画画也没有那么难',
          desc:
            '如果你问我：“从毫无基础的绘画小白,到能画出绚丽的油画或插画，要经历多久？',
          date: '2019/11/11',
          type: '教程',
          color: 'primary'
        },
        {
          id: 3,
          title: '宁波品贤画室已开',
          desc: '地点定为莲花购物广场附近，现已开业',
          date: '2019/11/01',
          type: '推送',
          color: 'success'
        },
        {
          id: 4,
          title: '重庆品贤画室已开',
          desc: '地点定为重庆大学城',
          date: '2019/11/01',
          type: '推送',
          color: 'success'
        }
      ]
    };
  },
  methods: {
    /**
     * @methed 跳转到校务详情页
     * @params {index} 校务对应id
     * @return void
     */
    goDetail(index) {
      this.$router.push({ path: `detail?id=${index}` });
    },
    /**
     * @method 跳转学校事务新闻页
     * @params {null}
     * @return voic
     */
    goAffaris() {
      console.log('affaris :');
      this.$router.push({ path: 'news' });
    }
  },
  computed: {
    ...mapState(['isPhone']) // 加载设备类型
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
@affarisRed: #c70b0c;
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
.affaris {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 40px 0 10px 0px;
  margin: 0 auto;
  max-width: 1200px;
  .affaris-left {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .affaris-right {
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    padding: 20px;
    ul {
      display: block;
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        display: -webkit-flex; /* Safari */
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        line-height: 1.5em;
        font-size: 18px;
        a {
          color: #444444;
          text-decoration: none;
        }
        .list-date {
          color: #777777;
        }
      }
    }
  }
}
.more {
  text-align: right;
}
.works {
  margin-top: 20px;
}
.right-head {
  color: @affarisRed;
  .head-text {
    display: inline-block;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1.5em;
    padding: 0 10px;
    border-bottom: 1px solid @affarisRed;
  }
}
.student-works {
  margin-top: 20px;
  img {
    width: 100%;
  }
}

@media screen and (max-width: 720px) {
  .affaris {
    flex-flow: column wrap;
    .affaris-right {
      display: flex;
      width: 100%;
      flex-flow: column wrap;
      padding: 8px;
      ul {
        padding: 5px 20px;
      }
      .more {
        text-align: center;
        cursor: pointer;
        margin: 20px;
      }
    }
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

.article {
  padding: 16px 10px;
  border-bottom: 1px solid @color-grey-4;
}
.article .title {
  margin-top: 10px;
  font-size: 16px;
  color: #000;
}
.one {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.two {
  width: 70%;
  margin-top: 10px;
}
</style>
