<template>
  <div class="news-detile">
    <div class="title">{{ news.title }}</div>
    <div class="user">
      <div class="user-img">
        <img :src="user.imgUrl" width="100%" />
      </div>
      <div class="user-info">
        <div class="user-name">{{ user.name }}</div>
        <div class="user-tag-wrap">
          <div class="user-tag">
            <van-tag color="#f2826a" plain>{{ user.info }}</van-tag>
          </div>
          <div class="time">{{ news.time }}</div>
        </div>
      </div>
    </div>
    <div class="desc-wrap" v-html="news.describe"></div>
    <div class="state">
      <div class="state-left">
        <div class="browse">
          <van-icon name="fire" />
          {{ news.browse }}
        </div>
        <div @click="handlerClickZan">
          <template v-if="isZan">
            <van-icon name="good-job-o" />
          </template>
          <template v-else>
            <van-icon name="good-job" />
          </template>
          {{ news.praise }}
        </div>
        <div>
          <van-icon name="chat-o" />
          {{ news.browse }}
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
export default {
  name: 'Newsdata',
  props: ['user', 'news'],
  data () {
    return {
      isZan: true
    }
  },
  methods: {
    handlerClickZan () {
      this.isZan = !this.isZan;
    }
  }

}
</script>

<style lang="less" scoped>
@media screen and (max-width: 720px) {
  .news-detile {
    display: flex;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .time {
    margin-left: 4px;
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
