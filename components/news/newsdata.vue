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
    <div v-html="news.describe"></div>
    <div class="state">
      <div class="zan">{{}}</div>
    </div>
    <div class="recommended">
      <div class="reco-title">
        <span>相关搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newsdata',
  props: ['user', 'news']

}
</script>

<style lang="less" scoped>
@media screen and (max-width: 720px) {
  .news-detile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
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
    width: 60px;
    height: 60px;
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
}
</style>
