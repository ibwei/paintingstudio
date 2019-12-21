<template>
  <div class="note_label">
    <div class="title">热门标签：</div>
    <div class="label-content">
      <div class="label-list-wrap">
        <tag :infos="infos"></tag>
      </div>
      <div class="btn">了解更多</div>
    </div>
  </div>
</template>

<script>
import tag from '../../works/components/tagrandtype'
export default {
  components: {
    tag
  },
  data () {
    return {
      infos: ['有趣', '专业性强', '环境好', '师资力量雄厚', '科班出身', '老师有耐心', '交通方便', '有趣', '专业性强', '环境好', '师资力量雄厚', '科班出身', '老师有耐心', '交通方便']
    }
  }

}
</script>

<style scoped>
.note_label {
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
.label-list-wrap {
  padding-top: 5px;
  width: 100%;
}
.label-content {
  border-top: 1px solid #e00;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.label-wrap {
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
.label-list-wrap {
  font-size: 12px;
  cursor: pointer;
}
.label-word:hover {
  color: #fa7d3c;
  cursor: pointer;
}
.tag {
  margin-top: 20px;
}
</style>
