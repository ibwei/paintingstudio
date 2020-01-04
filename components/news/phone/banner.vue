<template>
  <div class="banner">
    <div class="left" @click="huitui">
      <span style="margin-left:10px;">返回</span>
    </div>
    <div class="banner-cont">标题：{{ title }}</div>
    <div class="right" @click="showAction">
      <van-icon name="ellipsis" color="rgba(0,0,0,.4)" />
    </div>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      title="分享"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '文章详情'
    }
  },
  data () {
    return {
      show: false,
      actions: [
        { name: '分享到qq空间' },
        { name: '分享到朋友圈', subname: '让更多人看到' },
        { name: '分享到微博' }
      ]
    };
  },
  methods: {
    huitui () {
      this.$router.go(-1)
    },
    onCancel () {
      this.show = false;
    },
    showAction () {
      this.show = true;
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 1px 1px 5px rgba(33, 33, 33, 0.1);
  position: fixed;
  top: 0px;
  padding: 8px 10px;
  z-index: 999;
}
.van-icon {
  font-size: 22px;
}
.left {
  padding-left: 8px;
  width: 60px;
  color: rgba(0, 0, 0, 0.4);
}
.right {
  margin-right: 10px;
}
.right .van-icon {
  font-size: 26px;
}
.banner-cont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
  font-size: 16px;
}
</style>
