<template>
  <div class="news">
    <div class="news-container">
      <div class="content">
        <div class="mid-content">
          <vlabel v-if="isPhone"></vlabel>
          <newslist v-if="isPhone"></newslist>
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
.news-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  margin: 0px auto;
}
.left-content {
  width: 300px;
  min-height: 200px;
}
.note_label {
  margin-top: 30px;
}
@media screen and (max-width: 720px) {
  .bread {
    display: none;
  }
  .taglist {
    display: none;
  }
  .news-list {
    margin-top: 20px;
  }
}
</style>
