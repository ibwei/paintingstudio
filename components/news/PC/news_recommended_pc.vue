<template>
  <div class="recommended-pc-wrap">
    <div class="title">相关推荐</div>
    <div class="recom-news-wrap">
      <div v-for="(item,index) of recommendeds" :key="index" class="recom-news">
        <div class="news-word-wrap">
          <div class="news-title" @click="handlerToDetails(item.id)">{{ item.title_info }}</div>
          <div class="news-cont-wrap">
            <div class="browse">浏览{{ item.browse ||0 }}次</div>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
        <div class="img">
          <img :src="item.imgUrl" width="100%" />
        </div>
        <van-divider />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recommendeds'],
  methods: {
    handlerToDetails (id) {
      console.log('跳转详情页！id：', id)
    }
  }

}
</script>

<style scoped>
.recommended-pc-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  padding: 15px;
}
.title {
  font-weight: bold;
}
.title::before {
  content: '';
  border-left: 4px solid #e00;
  margin-right: 5px;
}
.recom-news {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.img {
  width: 100px;
  min-width: 100px;
  margin-left: 5px;
}
.news-word-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.news-title {
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news-cont-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.time,
.browse {
  color: #969696;
}
.time {
  margin-left: 15px;
}
</style>
