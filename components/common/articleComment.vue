<template>
  <div class="comment-list">
    <van-divider>文章评论区</van-divider>
    <div class="skill skill-m">
      <van-field
        v-model="message"
        rows="4"
        autosize
        show-word-limit
        label="评论"
        maxlength="200"
        type="textarea"
        :border="true"
        placeholder="请编辑你的评论"
      />
      <van-button style="margin-top:10px" @click="addComment" size="small"
        >发表评论</van-button
      >
    </div>
    <template v-if="list.length">
      <div style="padding:20px;" v-for="(item, index) of list" :key="index">
        <van-divider />
        <div class="list-item">
          <div class="left">
            <van-icon :name="item.avatar" size="40px" />
          </div>
          <div class="right">
            <div class="first">
              <span class="name">{{ item.name }}</span>
              <span class="time">{{ item.created_at }}</span>
            </div>
            <div class="second">
              <p>{{ item.content }}</p>
            </div>
            <div class="third" @click="reply">回复</div>
          </div>
        </div>
      </div>
      <van-divider>到底了</van-divider>
    </template>
    <div v-else class="student-appraise">
      暂无评论
    </div>
  </div>
</template>

<script>
import { Api } from '../../api/index';
import { mapState, mapMutations } from 'vuex';
export default {
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
      message: ''
    };
  },
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    ...mapMutations(['changeLoginDialogShow']),
    async addComment() {
      if (!this.isLogin) {
        this.changeLoginDialogShow(true);
        this.$toast('发表评论前，请先登录');
        return false;
      }
      if (this.message.length < 4) {
        this.$toast('评论字数太少，请重新编辑！');
        return false;
      }
      const { data } = await this.$axios({
        method: 'post',
        url: Api.articleCommentAdd,
        params: {
          token: localStorage.getItem('token')
        },
        data: {
          content: this.message,
          article_id: this.$route.query.news_id,
          level: 0,
          parent_id: 0
        }
      });
      if (data.resultCode === 0) {
        this.$toast.success('评论发表成功，管理员审核通过之后方可显示');
        this.message = '';
      } else {
        this.$toast.success(data.resultMessage);
      }
    },
    reply() {
      this.$toast('暂不支持回复');
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
.list-item {
  color: @color-grey-2;
  font-size: 14px;
  display: flex;
  line-height: 2;
  width: 100%;
  flex-flow: row nowrap;
}
.right {
  width: 100%;
  margin-left: 10px;
}
.first {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.time {
  font-size: 12px;
}
.student-appraise {
  margin-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.skill {
  padding-top: 15px;
  padding-bottom: 10px;
}
.skill-m {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
