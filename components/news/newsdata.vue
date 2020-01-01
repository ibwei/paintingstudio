<template>
  <div class="news-detile-phone-wrap">
    <div class="user">
      <div class="user-tag-wrap">
        <div class="user-tag">
          分类：
          <van-tag color="#f2826a" plain>{{ news.tag }}</van-tag>
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
          <van-icon name="fire" />
          <span class="count">{{ news.read_count }}</span>
        </div>
        <div @click="handlerClickZan(zan)">
          <template v-if="zan">
            <van-icon name="good-job" />
          </template>
          <template v-else>
            <van-icon name="good-job-o" />
          </template>
          <span class="count">{{ news.praise_count }}</span>
        </div>
        <div @click="pl">
          <van-icon name="chat-o" />
          <span class="count">{{ news.comment_count }}</span>
        </div>
      </div>
      <div class="state-right">
        <div class="fenxiang">
          <van-icon name="star" />分享
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: 'Newsdata',
  props: {
    news: {
      type: Object,
      default () {
        return {}
      }
    },
    zan: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 点赞
    handlerClickZan (val) {
      if (val) {
        Dialog.confirm({
          title: '标题',
          message: '是否取消赞'
        }).then(() => {
          this.zan = !val;
          this.$emit('changeZan', !val)
          this.$toast('取消点赞')
        }).catch(() => {
          // on cancel
        });
      } else {
        this.$emit('changeZan', !val)
        this.zan = !val;
      }
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
  .count {
    margin-left: 5px;
    font-size: 16px;
    color: #000;
    font-weight: 200;
  }
  .desc-wrap {
    width: 100%;
    padding: 20px;
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
