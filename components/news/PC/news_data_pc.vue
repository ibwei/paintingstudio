<template>
  <div class="news-data-pc-wrap">
    <div class="news-title-wrap">{{ news.title }}</div>
    <div class="user-info-wrap">
      <div class="info-wrap">
        <div class="info-top">
          <div class="news-title">{{ 565 }}</div>
          <div class="lable">
            <van-tag color="#f2826a" class="tag">{{ 5656 }}</van-tag>
          </div>
        </div>
        <div class="info-bottom">
          <div class="news-browse">浏览{{ news.browse }}次</div>
          <div class="news-time">{{ news.updated_at }}</div>
        </div>
      </div>
    </div>
    <div class="news-content-wrap">
      <div v-html="news.content"></div>
    </div>
  </div>
</template>

<script>
export default {
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
  }

}
</script>

<style scoped>
.news-data-pc-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #fff;
  padding: 15px;
  width: 100%;
}
.news-title-wrap {
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  margin: 10px auto;
}
.user-img {
  width: 45px;
  border-radius: 50%;
  overflow: hidden;
}
.user-info-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.info-top,
.info-bottom {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
}
.lable {
  margin-left: 5px;
}
.info-bottom {
  font-size: 13px;
  color: #969696;
  margin-top: 5px;
}
.news-title {
  font-size: 16px;
}
.news-time {
  margin-left: 20px;
}
.news-content-wrap {
  margin-top: 15px;
}
</style>
