<template>
  <div class="news-recom-phone-wrap">
    <div class="news-recom-title">相关推荐</div>
    <div class="news-recom-cont">
      <div v-for="(item,index) of recommendeds" :key="index" class="news-recom">
        <div class="news-recom-cont-wrap">
          <div class="news-content-word">
            <div class="news-title">{{ item.title_info }}</div>
            <div class="news-user-name">
              <span>{{ user.username }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>
          <div class="news-content-img">
            <img :src="item.imgUrl" width="100%" />
          </div>
        </div>
        <van-divider />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendeds: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      user: {
        username: '程序员阿森'
      }
    }
  }
}
</script>

<style scoped>
.news-recom-phone-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 20px 10px;
}
.news-recom-title {
  font-weight: 300;
  font-size: 16px;
  color: #616161;
}
.news-recom-title::before {
  content: '';
  height: 16px;
  display: inline-block;
  border: 2px solid #e00;
  border-radius: 1px;
  margin-right: 5px;
  margin-bottom: -2px;
}
.news-recom-cont {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.news-recom {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.news-recom-cont-wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.news-content-img {
  width: 35%;
  border-radius: 5px;
}
.news-content-word {
  padding-right: 4px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news-title {
  font-size: 14px;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news-user-name {
  margin-top: 20px;
  font-size: 12px;
  color: #616161;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.news-user-name span {
  display: block;
  margin-right: 20px;
}
.van-divider {
  margin: 10px 0px;
}
</style>
