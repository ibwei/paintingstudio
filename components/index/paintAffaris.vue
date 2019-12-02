<template>
  <!-- 画室动态 -->

  <div class="affaris">
    <!-- pc端画室动态左边图片 -->
    <div class="affaris-left">
      <img src="../../assets/images/index/2017330105615377.jpg" />
    </div>
    <!-- 画室动态 -->
    <div class="affaris-right">
      <div class="right-head" @click="goAffaris">
        <v-title v-bind:initTitle="initTtile"></v-title>
      </div>
      <!-- 画室动态列表 -->
      <van-list>
        <div v-for="item of list" :key="item.id" @click="goDetail(item.id)">
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
        <van-button plain type="danger" size="small" @click="goAffaris">查看更多</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import vTitle from '../common/vTitle'
export default {
  components: {
    vTitle,
  },
  data () {
    return {
      initTtile: {
        cnTitle: '画室动态',
        enTitle: 'Painting Studio News',
        mode: 'red',
        icon: '&#xe6d9;'
      },
      /** 画室动态列表 */
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
    }
  },
  methods: {
    /**
     * @method 跳转学校事务新闻页
     * @params {null}
     * @return voic
     */
    goAffaris () {
      console.log('affaris :');
      this.$router.push({ path: 'news' });
    }
  }
}
</script>

<style lang="less" scope>
@import url('../../assets/css/color');
.affaris {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 20px 0 10px 0px;
  margin-left: 10px;
  margin-right: 10px;
  max-width: 1200px;
  margin: 0 auto;
}
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
    }
  }
}
.list-date {
  color: #777777;
}
.more {
  text-align: right;
}
.right-head {
  color: @color-brand;
  .head-text {
    display: inline-block;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 1.5em;
    padding: 0 10px;
    border-bottom: 1px solid @color-brand;
  }
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
@media screen and (max-width: 720px) {
  .affaris-left {
    display: none;
  }
  .affaris {
    flex-flow: column wrap;
  }
  .affaris-right {
    display: flex;
    width: 100%;
    flex-flow: column wrap;
    padding: 8px;
    ul {
      padding: 5px 20px;
    }
  }
  .more {
    text-align: center;
    cursor: pointer;
    margin: 20px;
  }
}
</style>
