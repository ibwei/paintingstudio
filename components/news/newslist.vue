<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="news-list">
      <van-list v-model="loading2" :finished="true">
        <template v-for="(item, index) in listNews">
          <van-skeleton
            :key="index"
            title
            :row="3"
            row-width="100%"
            :loading="loading"
          >
            <template v-if="item.imgUrls.length === 1">
              <div class="word" @click="onclick(item)">
                <div class="content">
                  <div class="cont-wrap">
                    <div class="word-wrap">
                      <div class="title-1">{{ item.title }}</div>
                      <div class="content-1" v-html="item.content"></div>
                    </div>
                    <div class="img-1">
                      <img :src="item.imgUrls[0]" width="100%" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-else-if="item.imgUrls.length === 2">
              <div class="word" @click="onclick(item)">
                <div class="content">
                  <div class="title-2">{{ item.title }}</div>
                  <div class="img-2">
                    <template v-for="(elem, val) of item.imgUrls">
                      <div :key="val" class="img">
                        <img :src="elem" width="100%" />
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="word" @click="onclick(item)">
                <div class="content">
                  <div class="title-2">{{ item.title }}</div>
                  <div class="content-1" v-html="item.content"></div>
                  <div class="img-3">
                    <template v-for="(elem, val) of item.imgUrls">
                      <div :key="val" class="img">
                        <img :src="elem" width="100%" />
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </template>
            <div class="time">
              <span>浏览{{ item.read_count }}次</span>
              <span>评论{{ item.comment_count }}</span>
              <span>赞{{ item.praise_count }}</span>
              <span>发布时间：{{ item.created_at }}</span>
            </div>
            <van-divider />
          </van-skeleton>
        </template>
      </van-list>
    </div>
  </van-pull-refresh>
</template>
<script>
import { mapState } from 'vuex';
import { getSimpleText } from '../../utils/handleText';
import { Api } from '@/api/index';
export default {
  name: 'Newslist',
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      loading2: false,
      loading: true,
      isLoading: true,
      listNews: [],
      finished: false
    };
  },
  computed: {
    ...mapState(['articleCategory'])
  },
  watch: {
    articleCategory(newV) {
      this.changeList(newV);
    }
  },
  created() {
    if (process.client) {
      this.listNews = this.list.map((item, index) => {
        const temp = item;
        temp.imgUrls = item.thumbnail ? item.thumbnail.split(',') : [];
        temp.tag = item.tags ? item.tags.split('-') : [];
        temp.content =
          getSimpleText(temp.content ? temp.content : '无内容').slice(0, 40) +
          '...';
        temp.created_at = item.created_at.slice(0, 10);
        return temp;
      });
      this.loading = false;
    }
  },
  methods: {
    onclick(item) {
      this.$router.push({
        path: '/news/articleDetails',
        query: { news_id: item.id }
      });
    },
    changeList(category) {
      this.loading = true;
      this.$axios({
        method: 'post',
        url: Api.getArticleListByType,
        data: { pageNum: 1, pageSize: 10, category }
      })
        .then((res) => {
          if (res.data.resultCode === 0) {
            this.listNews = res.data.data[category].map((item, index) => {
              const temp = item;
              temp.imgUrls = item.thumbnail ? item.thumbnail.split(',') : [];
              temp.tags = item.tags ? item.tags.split('-') : [];
              temp.content = getSimpleText(temp.content).slice(0, 40) + '...';
              temp.created_at = item.created_at.slice(0, 10);
              return temp;
            });
            this.loading = false;
          } else {
            this.$toast('获取失败');
            this.loading = false;
          }
          // eslint-disable-next-line handle-callback-err
        })
        .catch(() => {
          this.$toast('网络异常');
          this.loading = false;
        });
    },
    onRefresh() {
      this.changeList(this.articleCategory);
      this.isLoading = false;
    },
    onLoad() {
      // 加载状态结束
      this.loading = false;
    }
  }
};
</script>

<style lang="less" scoped>
.news-list {
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.cont-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  width: 80%;
  justify-content: flex-start;
}
.content {
  width: 100%;
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
  max-height: 120px;
  overflow: hidden;
}
.img-3 > .img {
  width: 32%;
  max-height: 120px;
  overflow: hidden;
}
.img-1 {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin-left: 10px;
}
.title-1 {
  margin-left: 10px;
  font-size: 16px;
  color: #000;
}
.content-1 {
  margin-left: 10px;
  font-size: 12px;
  color: #666;
  margin-top: 6px;
}
.title-2 {
  padding: 0px 10px;
}
.time {
  margin-top: 10px;
  display: flex;
  margin-left: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.time > span {
  font-size: 12px;
  margin-right: 10px;
}
.title-2 {
  font-size: 16px;
}
.img {
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
