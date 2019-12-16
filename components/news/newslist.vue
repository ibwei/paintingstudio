<template>
  <div class="news-list">
    <template v-for="(item,index) in listnews">
      <template v-if="item.imgUrls.length===1">
        <div :key="index" class="word" @click="onclick(item)">
          <div class="content">
            <div class="cont-wrap">
              <div class="word-wrap">
                <div class="title-1">{{ item.title_info }}</div>
                <div :key="index" class="time">
                  <span>浏览{{ item.browse }}次</span>
                  <span>评论{{ item.comments }}</span>
                  <span>赞{{ item.praise }}</span>
                  <span>发布时间：{{ item.time }}</span>
                </div>
              </div>
              <div class="img-1">
                <img :src="item.imgUrl" width="100%" />
              </div>
            </div>
            <van-divider />
          </div>
        </div>
      </template>
      <template v-else-if="item.imgUrls.length===2">
        <div :key="index" class="word" @click="onclick(item)">
          <div class="content">
            <div class="title-2">{{ item.title_info }}</div>
            <div class="img-2">
              <template v-for="(elem,val) of item.imgUrls">
                <template v-if="elem.id<=2">
                  <div :key="val" class="img">
                    <img :src="elem.imgUrl" width="100%" />
                  </div>
                </template>
              </template>
            </div>
            <div :key="index" class="time">
              <span>浏览{{ item.browse }}次</span>
              <span>评论{{ item.comments }}</span>
              <span>赞{{ item.praise }}</span>
              <span>发布时间：{{ item.time }}</span>
            </div>
            <van-divider />
          </div>
        </div>
      </template>
      <template v-else>
        <div :key="index" class="word" @click="onclick(item)">
          <div class="content">
            <div class="title-2">{{ item.title_info }}</div>
            <div class="img-3">
              <template v-for="(elem,val) of item.imgUrls">
                <template v-if="elem.id<=3">
                  <div :key="val" class="img">
                    <img :src="elem.imgUrl" width="100%" />
                  </div>
                </template>
              </template>
            </div>
            <div :key="index" class="time">
              <span>浏览{{ item.browse }}次</span>
              <span>评论{{ item.comments }}</span>
              <span>赞{{ item.praise }}</span>
              <span>发布时间：{{ item.time }}</span>
            </div>
            <van-divider />
          </div>
        </div>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Newslist',
  data () {
    return {
      listnews: [{
        id: 1, praise: 39, browse: 23, comments: 23, type: 1, title: '品贤画室招生呐！', title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../assets/images/art/art1.jpg'), 
        imgUrls: [
          { id: 1, imgUrl: require('../../assets/images/art/art1.jpg') },
          { id: 2, imgUrl: require('../../assets/images/art/art1.jpg') },
          { id: 3, imgUrl: require('../../assets/images/art/art1.jpg') }
          ], 
          info: 1, time: '2019-12-12'
      }, {
        id: 2, praise: 39, browse: 34, comments: 23, type: 1, title: '品贤画室招生呐！', title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../assets/images/art/art1.jpg'), imgUrls: [{ id: 1, imgUrl: require('../../assets/images/art/art1.jpg') }], info: 1, time: '2019-12-12'
      }, {
        id: 3, praise: 39, browse: 32, comments: 23, type: 1, title: '品贤画室招生呐！', title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../assets/images/art/art1.jpg'), imgUrls: [{ id: 1, imgUrl: require('../../assets/images/art/art1.jpg') }, { id: 2, imgUrl: require('../../assets/images/art/art1.jpg') }], info: 1, time: '2019-12-12'
      }, {
        id: 4, praise: 39, browse: 25, comments: 23, type: 1, title: '品贤画室招生呐！', title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../assets/images/art/art1.jpg'), imgUrls: [{ id: 1, imgUrl: require('../../assets/images/art/art1.jpg') }], info: 1, time: '2019-12-12'
      }, {
        id: 5, praise: 39, browse: 64, comments: 23, type: 1, title: '品贤画室招生呐！', title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../assets/images/art/art1.jpg'), imgUrls: [{ id: 1, imgUrl: require('../../assets/images/art/art1.jpg') }, { id: 2, imgUrl: require('../../assets/images/art/art1.jpg') }, { id: 3, imgUrl: require('../../assets/images/art/art1.jpg') }], info: 1, time: '2019-12-12'
      }]
    }
  },
  methods: {
    onclick (item) {
      this.$router.push({ path: '/news/articleDetails', query: item });
      console.log(item)
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and(max-width:720px) {
  .news-list {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .cont-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .word {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5px;
  }
  .word-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .img-2,
  .img-3 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
  }
  .img-2 > .img {
    width: 48%;
    overflow: hidden;
  }
  .img-3 > .img {
    width: 32%;
    overflow: hidden;
  }
  .img-1 {
    width: 30%;
    margin-left: 10px;
  }
  .title-1 {
    margin-left: 10px;
    font-size: 16px;
  }
  .title-2 {
    padding: 0px 10px;
  }
  .time {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .time > span {
    font-size: 12px;
  }
  .title-2 {
    font-size: 16px;
  }
  img {
    border-radius: 3px;
  }
}
</style>
