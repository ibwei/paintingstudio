<template>
  <div class="teacher-detail">
    <div class="head">
      <div class="head-left" @click="back">
        <van-icon name="arrow-left" size="16" />
      </div>
      <div class="head-title">教师详情</div>
      <div class="head-right">&nbsp;</div>
    </div>
    <div class="content">
      <div class="info">
        <div class="info-img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            :src="teacher.photo"
          />
        </div>
        <div class="info-basic">
          <div class="name">{{ teacher.name }}</div>
          <div class="rate">
            <van-rate
              v-model="teacher.rate"
              :size="16"
              readonly
              allow-half
              :color="Color.colorbrand"
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <div class="honor">
            <van-icon name="fire" size="16" :color="Color.colorbrand" />
            <span>2019年最受欢迎教师</span>
          </div>
        </div>
      </div>
      <div class="introduction">
        <div class="introduction-title">
          <div class="title-text">老师简介</div>
        </div>
        <div class="introduction-content">{{ teacher.desc }}</div>
      </div>
      <div class="skill">
        <div class="skill-title">曾获荣誉</div>
        <div class="deed">
          <div
            v-for="(item, index) of teacher.deed"
            :key="index"
            class="deed-item"
          >
            <span
              style="
                 {
                  marginright: '10px';
                }
              "
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <div class="skill">
        <div class="skill-title">擅长课程</div>
        <div class="skill-content">
          <van-tag
            v-for="(item, index) of teacher.good_ats"
            :key="index"
            plain
            :style="{ marginRight: '10px' }"
          >
            {{ item }}
          </van-tag>
        </div>
      </div>
      <van-divider>评论区</van-divider>
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
          placeholder="请输入评论"
        />

        <van-cell :value="`${star}分`">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <van-rate v-model="star" allow-half />
          </template>
        </van-cell>
        <van-button style="margin-top: 10px;" @click="addComment" size="small"
          >评分并评论</van-button
        >
      </div>
      <div class="appraise">
        <div class="appraise-title">
          <div class="title-text">学员评价</div>
          <div class="more">
            共{{ teacher.commentList.length }}条
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="appraise-content">
          <van-tag
            v-for="(item, index) of teacher.impressions"
            :key="index"
            plain
            >{{ item }}</van-tag
          >
          <div v-if="!this.teacher.commentList.length" class="student-appraise">
            暂无评论
          </div>
          <div v-else>
            <comment :list="this.teacher.commentList" />
            <van-divider>已到底部</van-divider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Color, tagsColor } from '../../config/color';
import { Api } from '@/api/index';
import teacher from '@/components/about/teacher';
import comment from '@/components/common/comment';
import { List } from 'ant-design-vue';
import { mapState, mapMutations } from 'vuex';
export default {
  components: {
    comment,
  },
  data() {
    return {
      message: '',
      Color,
      star: 5,
      pageNum: 1,
      pageSize: 50,
      teacher: {
        name: '',
        photo: '',
        rate: 0,
        desc: '',
        deeds: '',
        impression: '',
        good_at: '',
        commentList: [],
      },
    };
  },
  computed: {
    ...mapState(['isLogin']),
  },
  mounted() {
    this.getTeacherDetail();
  },
  activated() {
    this.getTeacherDetail();
  },
  methods: {
    ...mapMutations(['changeLoginDialogShow']),
    getTeacherDetail() {
      this.$axios({
        method: 'post',
        url: Api.teacherDetail,
        data: {
          id: this.$route.query.teacherId,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
      })
        .then((res) => {
          if (res.data.resultCode === 0) {
            this.teacher = res.data.data;
            this.teacher.good_ats = this.teacher.good_at.split('-');
            this.teacher.impressions = this.teacher.impression.split('-');
            this.teacher.deed = this.teacher.deeds.split('-');
            this.teacher.commentList = res.data.commentList;
          } else {
            this.$toast('获取教师信息失败！');
          }
        })
        .catch(() => {});
    },
    /* 获取随机颜色 */
    getRandomColor() {
      return tagsColor[Math.floor(Math.random() * tagsColor.length)];
    },
    back() {
      this.$router.back();
    },
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
        url: Api.teacherCommentAdd,
        params: {
          token: localStorage.getItem('token'),
        },
        data: {
          content: this.message,
          parent_id: 0,
          level: 0,
          teacher_id: this.$route.query.teacherId,
          star: this.star,
        },
      });
      if (data.resultCode === 0) {
        this.$toast.success('评论发表成功，管理员审核通过之后方可显示');
        this.message = '';
      } else {
        this.$toast.success(data.resultMessage);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color.less');
.teacher-detail {
  margin-bottom: 50px;
}
.flex {
  display: -webkit-flex;
  display: flex;
}
.head {
  .flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fafafa;
}

.head-left {
  min-width: 40px;
  text-align: center;
  height: 16px;
}
.head-title {
  font-size: 14px;
  line-height: 16px;
}
.head-right {
  min-width: 40px;
}
.content {
  padding: 15px;
}
.info {
  .flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.info-img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
}
.info-basic {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  padding-left: 15px;
  flex: 1;
  div {
    width: 100%;
  }
}
.name {
  font-size: 14px;
  font-weight: 300;
  padding-top: 5px;
}
.honor {
  font-size: 13px;
  .flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-end;
  span {
    padding-left: 5px;
  }
}
.introduction {
  flex: 1;
  height: auto;
}
.introduction,
.skill,
.appraise {
  padding-top: 15px;
  padding-bottom: 10px;
}
.introduction-title,
.appraise-title {
  .flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
}
.title-text,
.skill-title {
  font-size: 14px;
  font-weight: 300;
}
.more {
  font-size: 13px;
}
.introduction-content {
  padding-top: 10px;
  font-size: 13px;
  line-height: 1.5em;
  color: @color-grey-2;
}
.skill-content,
.appraise-content {
  padding-top: 10px;
}
.appraise-content {
  span {
    margin: 2.5px;
  }
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
.deed {
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-flow: column nowrap;
}
.deed-item {
  margin-top: 5px;
  color: #999;
  font-size: 13px;
  line-height: 1.5;
}
.skill-m {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
