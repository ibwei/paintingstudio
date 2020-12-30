<template>
  <div class="time-wrap">
    <div v-html="zpcg" class="html"></div>
    <div class="time-notice">
      <span>
        <b>上课时间</b> 上午：9:00——12:00 下午：14:00——17:00晚上：18:00——21:00
      </span>
      <span class="notice">提醒：预约上课需要提前一天预约</span>
    </div>
    <van-divider>日程安排</van-divider>
    <van-steps :active="active" direction="vertical">
      <van-step v-for="(item, index) of courseSchedual" :key="index">
        <div class="date">
          <div class="day-name">{{ item.name }}</div>
          <div class="day-detail" :class="{ active: index === active }">
            <div class="day">
              <div class="time">上午</div>
              <div class="available">
                <template
                  v-if="getCourseStatus(item.course[0].status) === '预约'"
                >
                  <van-button
                    type="primary"
                    size="small"
                    :disabled="isDisabled(index) || hasBook(index, 2)"
                    @click="bookSchedule(item.course[0].id, index, 0)"
                  >
                    预约
                  </van-button>
                </template>
                <template v-else>
                  {{ getCourseStatus(item.course[0].status) }}
                </template>
              </div>
            </div>
            <div class="day">
              <div class="time">下午</div>
              <div class="available">
                <template
                  v-if="getCourseStatus(item.course[1].status) === '预约'"
                >
                  <van-button
                    type="primary"
                    size="small"
                    :disabled="isDisabled(index) || hasBook(index, 2)"
                    @click="bookSchedule(item.course[1].id, index, 1)"
                  >
                    预约
                  </van-button>
                </template>
                <template v-else>
                  {{ getCourseStatus(item.course[1].status) }}
                </template>
              </div>
            </div>
            <div class="day">
              <div class="time">晚上</div>
              <div class="available">
                <template
                  v-if="getCourseStatus(item.course[2].status) === '预约'"
                >
                  <van-button
                    type="primary"
                    size="small"
                    :disabled="isDisabled(index) || hasBook(index, 2)"
                    @click="bookSchedule(item.course[2].id, index, 2)"
                  >
                    预约
                  </van-button>
                </template>
                <template v-else>
                  {{ getCourseStatus(item.course[2].status) }}
                </template>
              </div>
            </div>
          </div>
        </div>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import { Color } from '../../../config/color'
import { Api } from '@/api/index'
export default {
  data() {
    return {
      zpcg: '',
      active: 1,
      Color,
      courseSchedual: [
        {
          name: '星期日',
          course: [
            { status: 0, id: 1 },
            { status: 0, id: 1 },
            { status: 0, id: 1 }
          ]
        },
        {
          name: '星期一',
          course: [
            { status: 0, id: 1 },
            { status: 0, id: 1 },
            { status: 0, id: 1 }
          ]
        },
        {
          name: '星期二',
          course: [
            { status: 0, id: 1 },
            { status: 0, id: 1 },
            { status: 0, id: 1 }
          ]
        },
        {
          name: '星期三',
          course: [
            { status: 0, id: 1 },
            { status: 0, id: 1 },
            { status: 0, id: 1 }
          ]
        },
        {
          name: '星期四',
          course: [
            { status: 0, id: 1 },
            { status: 0, id: 1 },
            { status: 0, id: 1 }
          ]
        },
        {
          name: '星期五',
          course: [
            { status: 0, id: 1 },
            { status: 0, id: 1 },
            { status: 0, id: 1 }
          ]
        },
        {
          name: '星期六',
          course: [
            { status: 0, id: 1 },
            { status: 0, id: 1 },
            { status: 0, id: 1 }
          ]
        }
      ],
      alreadyBook: []
    }
  },
  created() {
    if (process.client) {
      this.getResult()
      this.getToday()
      this.getScheduleList()
    }
  },
  methods: {
    async getResult() {
      console.log('ahahah')
      const res = await this.$axios({
        method: 'post',
        url: Api.getArticle,
        data: {
          id: 2
        }
      })
      this.zpcg = res.data.data[0].content
    },
    hasBook(day, time) {
      return this.alreadyBook.includes(`${day}${time}`)
    },
    async bookSchedule(scheduleId, day, time) {
      try {
        const data = await this.$axios({
          method: 'post',
          url: Api.bookShedule,
          params: {
            token: localStorage.getItem('token')
          },
          data: {
            scheduleId,
            status: 0
          }
        })
        if (data.resultCode === 1) {
          this.$toast.fail(data.resultMessage)
        } else {
          this.$toast.success(
            '你成功申请预约,等待管理员，审核结果将以邮件告知。'
          )
          this.alreadyBook.push(`${day}${time}`)
        }
      } catch {
        this.$toast.fail('未知错误!')
      }
    },
    isDisabled(index) {
      if (index === 0) {
        return false
      }
      if (index < this.active) {
        return true
      } else {
        return false
      }
    },
    async getScheduleList() {
      const { data } = await this.$axios({
        method: 'post',
        url: Api.scheduleList
      })
      const rawData = data.data
      let i = 0
      for (let out = 0; out < this.courseSchedual.length; out++) {
        const dayArray = []
        for (let inner = 0; inner < 3; inner++) {
          dayArray.push({ id: rawData[i].id, status: rawData[i++].status })
        }
        this.courseSchedual.splice(out, 1, {
          ...this.courseSchedual[out],
          course: dayArray
        })
      }
    },
    getCourseStatus(number) {
      if (number === 1) {
        return '上课'
      } else if (number === 0) {
        return '放假'
      }
      return '预约'
    },
    getToday() {
      const date = new Date().getDay()
      this.active = date
    }
  }
}
</script>

<style scoped lang="less">
.html {
  padding: 10px 10px;
}
.time-wrap {
  box-sizing: border-box;
  width: 100%;
  margin-left: 0px;
  max-width: 100%;
  border: none;
}
.time-notice {
  margin: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 20px;
}
.notice {
  margin: 15px 0;
  color: #f00;
}
.time,
.available {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0px;
  height: 40px;
  display: flex;
  padding: 4px;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
