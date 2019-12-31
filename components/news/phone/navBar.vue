<template>
  <div class="nav-bar-wrap">
    <div class="icon left iconfont">
      <van-icon name="arrow-left" />
    </div>
    <div class="srk">
      <van-field v-model="value" placeholder="我也来说两句……" right-icon="smile-o" />
    </div>
    <div class="icon-wrap">
      <template v-if="news.comment_count <=0">
        <van-icon name="comment-o" />
      </template>
      <template v-else>
        <van-icon name="comment-o" :info="news.comment_count" />
      </template>

      <div @click="handlerClickZan(zan)">
        <template v-if="zan">
          <van-icon name="good-job" />
        </template>
        <template v-else>
          <van-icon name="good-job-o" />
        </template>
        {{ news.praise_count }}
      </div>
      <div class="icon fx">&#xe637;</div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  props: ['news', 'zan'],
  data () {
    return {
      value: ''
    }
  },
  watch: {
    zan (val, oldVal) {
    }

  },
  methods: {
    // 点赞
    handlerClickZan (val) {
      if (val) {
        Dialog.confirm({
          title: '标题',
          message: '是否取消赞'
        }).then(() => {
          this.zan = !val;
          this.$emit('changeZan', !val)

          this.$toast('取消点赞')
        }).catch(() => {
          // on cancel
        });
      } else {
        this.zan = !val;
        this.$emit('changeZan', !val)
      }
    }
  }
}
</script>

<style scoped>
.nav-bar-wrap {
  padding: 8px 0px;
  background: #fff;
}
.van-icon {
  font-size: 24px;
}
.van-info {
  font-size: 10px;
}
.left {
  margin-left: 5px;
}
.srk {
  margin-left: 5px;
}
.icon-wrap {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
}
.pl {
  margin-right: 5px;
}
.sc {
  margin-right: 5px;
}
.van-cell {
  padding: 4px 16px;
  border-radius: 5px;
}
.nav-bar-wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.icon {
  font-size: 24px;
}
</style>
