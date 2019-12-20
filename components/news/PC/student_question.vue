<template>
  <div class="student_question">
    <div class="title">学生问答：</div>
    <div class="question-content">
      <div class="question-list-wrap">
        <div v-for="(item,index) of questions" :key="index" class="question-wrap">
          <div class="question-word">{{ item.question }}</div>
          <div class="number">
            <van-icon name="fire" :class="'icon'+index" />
            <span class="redu">{{ item.redu }}</span>
          </div>
        </div>
      </div>
      <div class="btn">了解更多</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      questions: [{ id: 1, question: '品贤书院的老师水平怎么样？', redu: 890 }, { id: 2, question: '品贤书院的环境好么？', redu: 880 }, { id: 3, question: '品贤书院的环境好么？', redu: 650 }, { id: 4, question: '品贤书院的环境好么？', redu: 224 }, { id: 5, question: '品贤书院的环境好么？', redu: 134 }]
    }
  }

}
</script>

<style scoped>
.student_question {
  padding: 15px;
  padding-bottom: 10px;
  background: #f2f2f5;
  width: 100%;
}
.title {
  font-weight: bold;
}
.title::before {
  content: '';
  border-left: 4px solid #e00;
  margin-right: 5px;
}
.question-list-wrap {
  padding-top: 5px;
  width: 100%;
}
.question-content {
  border-top: 1px solid #e00;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.question-wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
  align-items: center;
  justify-content: space-between;
}
.btn {
  margin-top: 10px;
  border: 1px solid #666;
  color: #666;
  padding: 5px 10px;
  width: 72px;
  font-size: 12px;
  cursor: pointer;
}
.btn:hover {
  color: #e00;
  border-color: #e00;
}
.number {
  margin-top: 4px;
}
.question-list-wrap {
  font-size: 12px;
  cursor: pointer;
}
.question-word:hover {
  color: #fa7d3c;
  cursor: pointer;
}
.icon0 {
  color: #df3e3e;
}
.icon1 {
  color: #f76401;
}
.icon2 {
  color: #fa7d3c;
}
</style>
