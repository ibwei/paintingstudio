<template>
  <div class="time-wrap animated bounceInDown delay-0.5s">
    <van-steps :active="active" direction="vertical">
      <van-step v-for="(item,index) of courseSchedual" :key="index">
        <div class="date">
          <div class="day-name">{{ item.name }}</div>
          <div class="day-detail" :class="{'active':index===active}">
            <div class="day">
              <div class="time">上午</div>
              <div class="available">{{ getCourseStatus(item.course[0]) }}</div>
            </div>
            <div class="day">
              <div class="time">下午</div>
              <div class="available">{{ getCourseStatus(item.course[1]) }}</div>
            </div>
            <div class="day">
              <div class="time">晚上</div>
              <div class="available">{{ getCourseStatus(item.course[2]) }}</div>
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
  created () {
    this.getToday();
  },
  methods: {
    getCourseStatus (number) {
      if (number === 1) {
        return '上课';
      } else if (number === 0) {
        return '放假';
      }
      return '预约';
    },
    getToday () {
      const date = new Date().getDay();
      this.active = date;
    }
  }
}
</script>

<style scoped lang="less">
.time-wrap {
  box-sizing: border-box;
  width: 100%;
  margin-left: 0px;
  max-width: 100%;
  border: none;
}
.time,
.available {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0px;
  display: flex;
  padding: 4px;
  flex-flow: column nowrap;
  border: 1px solid #dcdee2;
}
.time {
  margin-top: 5px;
}
.available {
  border-top: none;
}
.date {
  position: relative;
  top: -20px;
  width: 100%;
  margin-top: 10px;
}
.day-detail {
  width: 100%;
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
.active {
  .time,
  .available {
    border: none;
    font-weight: 400;
    color: #07c160;
    font-size: 14px;
  }
  box-sizing: border-box;
  margin-top: 3px;
  border: 1px solid #07c160;
  padding: 3px 5px;
  padding-bottom: 7px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
@media screen and(max-width:720px) {
  .time-wrap {
    box-sizing: border-box;
    width: 100%;
    margin-left: 0px;
    max-width: 100%;
    border: none;
  }
}
</style>
