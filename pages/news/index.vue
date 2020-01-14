<template>
  <div class="news">
    <div class="news-container">
      <div class="content">
        <!-- 手机端的label选项 -->
        <vlabel :list="categoryList"></vlabel>
        <!-- 手机端的内容 -->
        <newslist :list="articleList"></newslist>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import vlabel from '../../components/news/label';
import newslist from '../../components/news/newslist';
import { Api } from '@/api/index';
export default {
  components: {
    vlabel,
    newslist
  },
  computed: {
    ...mapState(['isPhone']) // 加载设备类型
  },
  async asyncData({ $axios }) {
    // 获取首页文章分类列表
    const categoryList = await $axios({
      method: 'get',
      url: Api.getArticleType
    });
    // 根据第一个分类名获取文章列表
    const articleList = await $axios({
      method: 'post',
      url: Api.getArticleListByType,
      data: {
        pageNum: 1,
        pageSize: 10,
        category: categoryList.data.data[0].category
      }
    });
    return {
      categoryList: categoryList.data.data,
      articleList: articleList.data.data[categoryList.data.data[0].category]
    };
  },
  mounted() {
    this.changeTabbarShow(true);
    this.changTopbarShow(true);
  },
  activated() {
    this.changeTabbarShow(true);
    this.changTopbarShow(true);
  },
  methods: {
    ...mapMutations(['changeTabbarShow', 'changTopbarShow'])
  }
};
</script>

<style lang="less" scoped>
.content {
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  border: 1px solid block;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  position: relative;
}
.mid-content {
  width: 100%;
}
.news-container {
  display: flex;
  flex-direction: row;
  margin: 0px auto;
}
.note_label {
  margin-top: 30px;
}
.bread {
  display: none;
}
.taglist {
  display: none;
}
.news-list {
  display: flex;
  width: 100%;
  margin-top: 20px;
}
</style>
