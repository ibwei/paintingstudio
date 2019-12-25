<template>
  <div class="articleDetails">
    <div class="articleDetails-container">
      <div class="content">
        <banner></banner>
        <div class="mid-content">
          <!-- PC端文章详情 -->
          <news-data-pc :news="news" :user="user"></news-data-pc>
          <!-- 文章详情组件 移动端-->
          <news-data :news="news" :user="user"></news-data>
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
      <nav-bar></nav-bar>
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
      news: {
        id: 1,
        praise: 39,
        browse: 23,
        comments: 23,
        type: 1,
        title: '品贤画室招生呐！',
        title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间',
        describe: `<div class="describe">
        <div class="cont-img" style=" height: 300px;overflow: hidden;"><img src="../../../assets/images/art/art2.jpg" width="100%" alt="图片"></div>
        <p>北京美术培训之所以可以一炮而红在根本上离不开其在升学考试过程中优异的成绩反馈，能真正通过培训提升美术造诣，并在具体的考试中获取良好成绩是家长的诉求，也是服务周到的北京美术培训可以实实在在给到家长和学生的培训成效，尤其各大考生名列前茅的成绩优势展现，更是带动了北京美术培训需求量的增加。</p> 
        <div class="cont-img"><img src="../../../assets/images/art/art3.jpg" alt="图片" width="100%"></div>
        <p>知名度高的北京美术培训口碑好，离不开其一站式的服务完善，尤其对于外地学生，能全面有效的进行整体的规划，帮助考生在学习生活全面的均恒，用更好的凸显出北京美术培训的责任心，也为其的好评奠定提供了必要的基础，这也是缘何近些年来更多的外地考生都愿意选择北京美术培训深化考点学习关键。</p>
        <div class="cont-img"><img src="../../../assets/images/art/art5.jpg" width="100%" alt="图片"></div>
        <p>实事求是的北京美术培训在收费上非常的注重合理性的落实，在确保教学质量的前提下落实收费的开展，实实在在的从市场家长的需求多面考虑完善定价标准，从而让定价的内容更容易被接受。</p>
        <p>不难看出之所以北京美术培训近些年能够如此深受认可，人体的综合培训人数不断上升，一方面与其培训效果实实在在的客观落实有关，另一方面有效的服务开展、更合理的定价，都能取得更好的消费信认，从而依赖于良好口碑的建立促进北京美术培训量化的实现。</p></div>`,
        imgUrl: require('../../../assets/images/art/art1.jpg'),
        info: 1,
        time: '2019-12-12'      }, // 当前文章
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
  created () {
    this.changeTabbarShow(false);
    this.changTopbarShow(false);
  },
  destroyed () {
    this.changeTabbarShow(true);
    this.changTopbarShow(true);
  },
  methods: {
    leftBarClick () {
      this.$router.go(-1);
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
    padding: 0px 10px;
  }
  .news-recom-wrap {
    margin-top: 30px;
  }
}
</style>
