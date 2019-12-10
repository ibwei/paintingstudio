<template>
  <div class="news-detile">
    <div class="title">{{ news.title }}</div>
    <div class="user">
      <div class="user-img">
        <img :src="user.imgUrl" width="100%" />
      </div>
      <div class="user-name">{{ user.name }}</div>
      <div class="user-info">
        <van-tag color="#f2826a" plain>{{ user.info }}</van-tag>
      </div>
    </div>
    <div class="describe">{{ news.describe }}</div>
    <div class="recommended">
      <div class="reco-title">
        <span>相关搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style lang="less" scoped>
</style>
