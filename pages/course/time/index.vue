<template>
  <div class="time-wrap">
    <van-steps :active="active" direction="vertical">
      <van-step>
        <div v-for="(item,index) of courseSchedual" :key="index" class="date">
          <div class="day-name">{{item.name}}</div>
          <div class="day-detail">
            <div class="day">
              <div class="time">上午</div>
              <div class="available">{{getCourseStatus(item.course[0])}}</div>
            </div>
            <div class="day">
              <div class="time">下午</div>
              <div class="available">{{getCourseStatus(item.course[1])}}</div>
            </div>
            <div class="day">
              <div class="time">晚上</div>
              <div class="available">{{getCourseStatus(item.course[2])}}</div>
            </div>
          </div>
        </div>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import { Color } from '../../../config/color';
export default {
  data () {
    return {
      active: 1,
      Color,
      courseSchedual: [
        {
          name: '星期日',
          course: [1, 1, 0]
        }, {
          name: '星期一',
          course: [0, 0, 0]
        }, {
          name: '星期二',
          course: [1, 1, 2]
        }, {
          name: '星期三',
          course: [1, 1, 2]
        }, {
          name: '星期四',
          course: [1, 1, 2]
        }, {
          name: '星期五',
          course: [1, 1, 2]
        }, {
          name: '星期六',
          course: [1, 1, 2]
        }]
    }
  },
  methods: {
    getCourseStatus (number) {
      if (number === 1) {
        return '上课';
      } else if (number === 0) {
        return '放假';
      }
      return '预约';
    }
  }
}
</script>

<style scoped lang="less">
.time-wrap {
  margin: 5px;
  border: 1px solid #dcdee2;
}
.time {
  box-sizing: border-box;
  width: 100%;
  margin-top: 4px;
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #dcdee2;
}
.date {
  width: 100%;
  margin-top: 10px;
}
.day-detail {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  font-size: 14px;
}
.day {
  width: 100%;
  text-align: center;
  line-height: 1.5;
}
</style>