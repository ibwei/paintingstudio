<template>
  <div>
    <div class="introduce">
      <div class="introduce-title">
        <span>品贤画室</span>
      </div>
      <div class="sign">
        <img src="../../assets/images/index/sign.png" />
      </div>
      <div class="introduce-text">
        <p>06年创办于北京798艺术工厂，两兄弟所办</p>
        <p>优势一：全年开课，随到随学，自由选择学习时间，分开辅导．</p>
        <p>优势二：任何分点报名均可在其他分点学习，课时不作废．</p>
        <p>优势三：主教老师均为固定全职老师，科班出身，专业扎实．</p>
        <p>...</p>
      </div>
    </div>
    <div class="affaris">
      <div v-show="!isPhone" class="affaris-left">
        <img src="../../assets/images/index/2017330105615377.jpg" />
      </div>
      <div class="affaris-right">
        <div class="right-head" @click="goAffaris">
          <span class="head-text">画室动态</span>
        </div>
        <van-cell-group>
          <van-cell
            v-for="item of list"
            :key="item.id"
            :title="item.title"
            :label="item.desc"
            :value="item.date"
            @click="goDetail(item.id)"
          />
        </van-cell-group>
        <div class="more">
          <van-button plain type="danger" size="small" @click="goAffaris">
            More...
          </van-button>
        </div>
      </div>
    </div>
    <div v-if="!isPhone" class="student-works">
      <img src="../../assets/images/index/a42.jpg" />
    </div>
    <div v-else>
      <div class="right-head works">
        <span class="head-text">学生作品</span>
      </div>
      <worksCarousel />
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
      // 动态信息列表
      list: [
        {
          id: 1,
          title: '重庆品贤画室正在筹备中',
          desc: '预选地点定为莲花购物广场附近，预计12月下旬开业',
          date: '2019/11/22'
        },
        {
          id: 2,
          title: '零基础学画画也没有那么难',
          desc:
            '如果你问我：“从毫无基础的绘画小白,到能画出绚丽的油画或插画，要经历多久？',
          date: '2019/11/11'
        },
        {
          id: 3,
          title: '宁波品贤画室已开',
          desc: '地点定为莲花购物广场附近，现已开业',
          date: '2019/11/01'
        },
        {
          id: 3,
          title: '重庆品贤画室已开',
          desc: '地点定为重庆大学城',
          date: '2019/11/01'
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
@affarisRed: #c70b0c;
.introduce {
  background: #efefef;
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
  max-width: 1080px;
  .affaris-left {
    display: inline-block;
    width: 50%;
    img {
      width: 100%;
    }
  }
  .affaris-right {
    display: flex;
    width: 100%;
    flex-flow: column nowrap;

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
.works {
  margin-bottom: 10px;
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
      ul {
        padding: 5px 20px;
      }
      .more {
        text-align: center;
        margin: 5px 10px 0 0;
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
</style>
