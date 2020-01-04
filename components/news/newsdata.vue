<template>
  <div class="news-detile-phone-wrap">
    <div class="user">
      <div class="user-tag-wrap">
        <div class="user-tag">
          分类：
          <van-tag color="#f2826a" plain v-for="(item,index) of news.tag" :key="index">{{ item }}</van-tag>
        </div>
        <div class="time">{{ news.updated_at }}</div>
      </div>
    </div>
    <div class="news-img">
      <!-- <img :src="news." alt /> -->
    </div>
    <div class="desc-wrap" v-html="news.content"></div>
    <div class="state">
      <div class="state-left">
        <div class="browse">
          <van-icon size="16px" name="fire-o" />
          <span class="count">{{ news.read_count }}</span>
        </div>
        <div>
          <template v-if="zan">
            <van-icon size="16px" name="like" :color="Color.colorbrand" />
          </template>
          <template v-else>
            <van-icon @click="handlerClickZan()" size="16px" name="like-o" />
          </template>
          <span class="count">{{ news.praise_count }}</span>
        </div>
        <div @click="pl">
          <van-icon size="16px" name="chat-o" />
          <span class="count">{{ news.comment_count }}</span>
        </div>
      </div>
      <div class="state-right">
        <div class="fenxiang">
          <van-icon size="16px" name="star" />分享
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import { Color } from '@/config/color';
import { Api } from '@/api/index'
export default {
  name: 'Newsdata',
  props: {
    news: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    if (process.client) {
      this.news.tag = this.news.tags ? this.news.tags.split('-') : ['无'];
      const zan = localStorage.getItem('article' + this.news.id);
      if (zan === '1') {
        this.zan = true;
      }
    }
  },
  data () {
    return {
      Color,
      zan: false,
    }
  },
  methods: {
    // 点赞
    handlerClickZan () {
      this.$axios({ method: 'post', url: Api.addPraise, data: { id: this.news.id } }).then((res) => {
        if (res.data.resultCode === 0) {
          this.zan = !this.zan;
          localStorage.setItem('article' + this.news.id, '1');
          this.$toast('已点赞');
        } else {
          this.$toast('点赞失败,未知异常');
        }
      }).catch(() => {
        this.$toast('网络异常');
      })

    },
    // 点击评论按钮
    pl () {
      this.$toast('暂未开放评论系统')
    }
  }

}
</script>

<style lang="less" scoped>
@media screen and (max-width: 720px) {
  .desc-wrap img {
    width: 30% !important;
    height: auto;
  }
  .count {
    margin-left: 5px;
    font-size: 16px;
    color: #000;
    font-weight: 200;
  }
  .desc-wrap {
    width: 100%;
    overflow: hidden;
    padding: 20px;
    padding-top: 5px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .news-detile-phone-wrap {
    display: flex;
    background: #fff;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .user {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }
  .user-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    overflow: hidden;
  }
  .user-info {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
  }
  .user-tag {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }
  .user-tag-wrap {
    margin-top: 5px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .time {
    margin-left: 4px;
    font-size: 12px;
    color: #bdbdbd;
  }
  .describe {
    border: 1px solid black;
  }
  .desc-wrap {
    margin-top: 10px;
  }
  .state {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  .state div {
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .state div:nth-of-type(1) {
    margin-left: 5px;
  }
  .state .van-icon {
    font-size: 22px;
  }
  .reco-title {
    font-size: 16px;
    color: #bdbdbd;
  }
  .reco-title span:after {
    content: '';
    width: 2px;
    height: 100%;
    background: #e00;
  }
  .fenxiang {
    margin-right: 15px;
  }
}
</style>
