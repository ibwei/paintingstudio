<template>
  <div class="articleDetails">
    <div class="articleDetails-container">
      <div class="content">
        <banner :news="news"></banner>
        <div class="mid-content">
          <!-- 文章详情组件 移动端-->
          <van-skeleton
            style="margin-top:10px"
            title
            :row="10"
            row-width="100%"
            :loading="loading"
          >
            <news-data :news="news"></news-data>
          </van-skeleton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import newsData from '../../../components/news/newsdata';
import banner from '../../../components/news/phone/banner';
import { Api } from '@/api/index';
export default {
  name: 'ArticleDetails',
  components: {
    newsData,
    banner
  },
  data() {
    return {
      zan: false,
      loading: true,
      news: {},
      user: {
        id: 1,
        name: '程序员阿森',
        imgUrl: require('../../../assets/images/user/asen.jpg'),
        info: '最骚程序员'
      }, // 当前文章得作者
      recommended: [
        {
          id: 1,
          title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间',
          describe:
            '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来',
          imgUrl: require('../../../assets/images/art/art1.jpg'),
          time: '2019-12-12',
          userId: 1,
          browse: 23
        },
        {
          id: 2,
          title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间',
          describe:
            '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来',
          imgUrl: require('../../../assets/images/art/art1.jpg'),
          time: '2019-12-12',
          userId: 1,
          browse: 23
        },
        {
          id: 3,
          title_info:
            '评先刷hi是招生那这是一个副标题字数最好在20到50之间是一个副标题字数最好在20到50之间',
          describe:
            '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来',
          imgUrl: require('../../../assets/images/art/art1.jpg'),
          time: '2019-12-12',
          userId: 1,
          browse: 23
        },
        {
          id: 4,
          title_info: '评先刷hi是招生那这是一个副标题字数最好在20到50之间',
          describe:
            '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来',
          imgUrl: require('../../../assets/images/art/art1.jpg'),
          time: '2019-12-12',
          userId: 1,
          browse: 23
        }
      ], // 文章相关推荐列表
      comments: [] // 文章相关评论列表
    };
  },
  computed: {
    ...mapState(['tabbarShow', 'topbarShow']) // 加载设备类型
  },
  created() {
    if (process.client) {
      this.changeTabbarShow(false);
      this.changTopbarShow(false);
      // 通过Id获取当前文章详情数据
      this.$axios({
        method: 'post',
        url: Api.getArticleDetail,
        data: { id: this.$route.query.news_id }
      })
        .then(res => {
          this.news = res.data.data[0];
          this.loading = false;
        })
        .catch(res => {
          this.$toast('网络异常');
          this.loading = true;
        });
      // 阅读量+1
      this.$axios({
        method: 'post',
        url: Api.articleAddRead,
        data: { id: this.$route.query.news_id }
      });
    }
  },
  activated() {
    this.changeTabbarShow(false);
    this.changTopbarShow(false);
  },
  methods: {
    ...mapMutations(['changeTabbarShow', 'changTopbarShow'])
    // 改变点赞状态
  }
};
</script>

<style lang="less" scoped>
.articleDetails {
  width: 100%;
  background: #fff;
}
.news-data-pc-wrap {
  display: flex;
  background: #fff;
  width: 730px;
}
.content {
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.reco-pc-wrap {
  display: block;
}

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
}
.news-recom-wrap {
  margin-top: 30px;
}
</style>
