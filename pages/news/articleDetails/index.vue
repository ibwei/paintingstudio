<template>
  <div class="articleDetails">
    <div class="articleDetails-container">
      <div class="content">
        <banner></banner>
        <div class="mid-content">
          <!-- PC端文章详情 -->
          <news-data-pc :news="news" :user="user"></news-data-pc>
          <!-- 文章详情组件 移动端-->
          <news-data :news="news" :user="user" :zan="zan" @changeZan="changeZan"></news-data>
          <!-- 推荐文章组件 移动端-->
          <news-recommended :recommendeds="recommended"></news-recommended>
          <!-- 评论列表组件 移动端-->
          <comments :comments="comments"></comments>
        </div>
        <div class="left-content">
          <!-- pc端推荐文章组件 -->
          <news-recommended-pc :recommendeds="recommended"></news-recommended-pc>
        </div>
      </div>
    </div>
    <!-- 浮动到最下面得操作框 -->
    <div class="nav-bar">
      <nav-bar :news="news" @changeZan="changeZan"></nav-bar>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import newsData from '../../../components/news/newsdata';
import newsRecommended from '../../../components/news/newsRecommended';
import comments from '../../../components/news/comments';
import banner from '../../../components/news/phone/banner';
import navBar from '../../../components/news/phone/navBar'
import newsDataPc from '../../../components/news/PC/news_data_pc'
import newsRecommendedPc from '../../../components/news/PC/news_recommended_pc'
import { Api } from '@/api/index';
export default {
  name: 'ArticleDetails',
  components: {
    newsData,
    newsRecommended,
    newsRecommendedPc,
    newsDataPc,
    comments,
    banner,
    navBar
  },
  data () {
    return {
      zan: false,
      news: '',
      user: { id: 1, name: '程序员阿森', imgUrl: require('../../../assets/images/user/asen.jpg'), info: '最骚程序员' }, // 当前文章得作者
      recommended: [{
        id: 1, title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../../assets/images/art/art1.jpg'), time: '2019-12-12', userId: 1, browse: 23      }, {
        id: 2, title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../../assets/images/art/art1.jpg'), time: '2019-12-12', userId: 1, browse: 23      }, {
        id: 3, title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../../assets/images/art/art1.jpg'), time: '2019-12-12', userId: 1, browse: 23      }, {
        id: 4, title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../../assets/images/art/art1.jpg'), time: '2019-12-12', userId: 1, browse: 23      }], // 文章相关推荐列表
      comments: []// 文章相关评论列表
    }
  },
  computed: {
    ...mapState(['tabbarShow', 'topbarShow']) // 加载设备类型
  },
  mounted () {
    this.changeTabbarShow(false);
    this.changTopbarShow(false);
    // 通过Id获取当前文章详情数据
    this.$axios({ method: 'post', url: Api.getArticleDetail, data: { id: this.$route.query.news_id } }).then((res) => {
      this.news = res.data.data[0]
    }).catch((res) => {
      this.$toast('网络异常');
    });
    // 阅读量+1
    this.$axios({ method: 'post', url: Api.articleAddRead, data: { id: this.$route.query.news_id } })
  },
  destroyed () {
    this.changeTabbarShow(true);
    this.changTopbarShow(true);
  },
  methods: {
    leftBarClick () {
      this.$router.go(-1);
    },
    // 改变点赞状态
    changeZan (val) {
      this.zan = val;
      console.log(this.zan)
    },
    ...mapMutations(['changeTabbarShow', 'changTopbarShow'])
  }

};
</script>

<style lang="less" scoped>
.articleDetails {
  width: 100%;
  background: #f9f9f9;
}
.news-data-pc-wrap {
  display: flex;
  background: #fff;
  width: 730px;
}
.content {
  width: 1200px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.left-content {
  width: 350px;
  min-height: 200px;
  margin-top: 20px;
}
//文章详情相关推荐页面
.news-recom-phone-wrap {
  display: none;
}
//文章详情文章内容PC页面
.news-detile-phone-wrap {
  display: none;
}
.reco-pc-wrap {
  display: block;
}
//手机端最下面浮动按钮组
.nav-bar-wrap {
  display: none;
}
//手机端的文章详情评论内容
.comments-phone-wrap {
  display: none;
}
@media screen and (max-width: 720px) {
  .left-content {
    display: none;
  }
  .news-data-pc-wrap {
    display: none;
  }
  .news-detile-phone-wrap {
    display: flex;
  }
  .news-recom-phone-wrap {
    margin-top: 20px;
    display: flex;
  }
  .nav-bar-wrap {
    display: flex;
  }
  .reco-pc-wrap {
    display: none;
  }
  .bread {
    display: none;
  }
  .content {
    padding-top: 40px;
    width: 100%;
  }
  .nav-bar {
    width: 100%;
    position: fixed;
    bottom: 5px;
    height: 35px;
    z-index: 99;
    background: #eee;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .articleDetails {
    padding-bottom: 50px;
  }
  .cont-img {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .mid-content {
    width: 100%;
    overflow: hidden;
    padding: 0px 10px;
  }
  .news-recom-wrap {
    margin-top: 30px;
  }
}
</style>
