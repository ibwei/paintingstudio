<template>
  <!-- 画室动态 -->

  <div class="affaris">
    <!-- pc端画室动态左边图片 -->
    <div class="affaris-left">
      <van-image :src="leftImg">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
      <!-- <img src="../../assets/images/index/2017330105615377.png" /> -->
    </div>
    <!-- 画室动态 -->
    <div class="affaris-right">
      <div class="right-head" @click="goAffaris">
        <v-title :init-title="initTtile"></v-title>
      </div>
      <!-- 画室动态列表 -->
      <van-list>
        <div v-for="item of articleList" :key="item.id" @click="goDetail(item.id)">
          <div class="article">
            <div class="one">
              <div class="title-area">
                <span class="title">{{ item.title }}</span>
                <van-tag
                  :style="{position:'relative',top:'-2px'}"
                  :type="item.color"
                >{{ item.category }}</van-tag>
              </div>
              <div class="date">{{ item.date }}</div>
            </div>
            <div class="two">
              <span v-html="item.desc"></span>
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
import vTitle from '../common/vTitle';
import { tagsColor } from '@/config/color';
import { getSimpleText } from '@/utils/handleText'
export default {
  components: {
    vTitle
  },
  props: {
    articleList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      tagsColor,
      leftImg: require('../../assets/images/index/2017330105615377.png'),
      initTtile: {
        cnTitle: '画室动态',
        enTitle: 'Painting Studio News',
        mode: 'red',
        icon: '&#xe6d9;'
      },
    };
  },
  created () {
    if (process.client) {

      //处理首页画室动态数据
      for (let i = 0; i < this.articleList.length; i++) {
        this.articleList[i].tags = this.articleList[i].tags.split('-');
        const random = Math.floor(Math.random() * 4);
        this.articleList[i].color = this.tagsColor[random];
        this.articleList[i].desc = getSimpleText(this.articleList[i].content).slice(0, 40) + '...';

        this.articleList[i].date = this.articleList[i].created_at.slice(0, 11);
      }
    }
  },
  methods: {
    /**
     * @method 跳转学校事务新闻页
     * @params {null}
     * @return voic
     */
    goAffaris () {
      this.$router.push({ path: 'news' });
    }
  }
};
</script>

<style lang="less" scoped>
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
.date {
  width: 80px;
  font-size: 12px;
  margin-top: 5px;
  color: #777777;
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
.title-area {
  line-height: 1.5;
  flex: 1;
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
  align-items: flex-start;
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
