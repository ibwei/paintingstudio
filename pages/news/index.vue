<template>
  <div class="news">
    <div class="news-container">
      <div class="content">
        <div class="mid-content">
          <!-- 手机端的label选项 -->
          <vlabel></vlabel>
          <!-- 手机端的内容 -->
          <newslist></newslist>
          <!-- PC端的主体内容 -->
          <mid-content></mid-content>
        </div>
        <div class="left-content">
          <student-question></student-question>
          <note-label></note-label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import vlabel from '../../components/news/label'
import newslist from '../../components/news/newslist'
import midContent from '../../components/news/PC/mid_content'
import studentQuestion from '../../components/news/PC/student_question'
import noteLabel from '../../components/news/PC/note_label'
export default {
  components: {
    vlabel,
    midContent,
    noteLabel,
    studentQuestion,
    newslist
  },
  computed: {
    ...mapState(['isPhone']) // 加载设备类型
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  border: 1px solid block;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.news-list {
  display: none;
}
.pc-mid-content {
  display: block;
}
.news-container {
  display: flex;
  flex-direction: row;
  margin: 0px auto;
}
.left-content {
  width: 300px;
  min-height: 200px;
}
.note_label {
  margin-top: 30px;
}
.label-wrap {
  display: none;
}
@media screen and (max-width: 720px) {
  .pc-mid-content {
    display: none;
  }
  .left-content {
    display: none;
  }
  .label-wrap {
    display: block;
  }
  .bread {
    display: none;
  }
  .taglist {
    display: none;
  }
  .news-list {
    display: flex;
    margin-top: 20px;
  }
}
</style>
