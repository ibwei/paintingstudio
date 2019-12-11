<template>
  <div class="articleDetails">
    <div class="articleDetails-container">
      <bread-crumb />
      <div class="content">
        <div class="mid-content">
          <!-- 文章详情组件 -->
          <news-data :news="news"></news-data>
          <!-- 推荐文章组件 -->
          <news-recommended :recommended="recommended"></news-recommended>
          <!-- 评论列表组件 -->
          <comments :comments="comments"></comments>
        </div>
        <div class="left-content">
          <div class="left-content-top"></div>
          <div class="left-content-bottom"></div>
        </div>
      </div>
      <!-- 浮动到最下面得操作框 -->
      <div class="nav-bar">
        <div class="left-bar" @click="leftBarClick"><</div>
        <div>
          <span>我来说两句</span>
          <van-icon name="smile-o" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadCrumb from '../../../components/common/breadcrumb';
import newsData from '../../../components/news/newsdata'
import newsRecommended from '../../../components/news/newsRecommended'
import comments from '../../../components/news/comments'
export default {
  name: 'ArticleDetails',
  components: {
    breadCrumb,
    newsData,
    newsRecommended,
    comments

  },
  data () {
    return {
      news: '', // 当前文章
      user: { id: 1, name: '程序员阿森', imgUrl: require('../../../assets/images/art/art1.jpg'), info: '最骚程序员' }, // 当前文章得作者
      recommended: [{
        id: 1, title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../../assets/images/art/art1.jpg'), time: '2019-12-12' }, {
        id: 2, title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../../assets/images/art/art1.jpg'), time: '2019-12-12' }, {
        id: 3, title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../../assets/images/art/art1.jpg'), time: '2019-12-12' }, {
        id: 4, title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../../assets/images/art/art1.jpg'), time: '2019-12-12' }], // 文章相关推荐列表
      comments: []// 文章相关评论列表
    }
  },
  created () {
    this.news = this.$route.query;
  }
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 720px) {
  .bread {
    display: none;
  }
  .nav-bar {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 50px;
    border: 1px solid red;
    z-index: 99;
    background: #eee;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
