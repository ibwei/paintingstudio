<template>
  <div class="banner">
    <div class="left" @click="huitui">
      <van-icon name="arrow-left" />
    </div>
    <div class="right" @click="showAction">
      <van-icon name="ellipsis" />
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
  data () {
    return {
      show: false,
      actions: [
        { name: '选项' },
        { name: '选项' },
        { name: '选项', subname: '描述信息' }
      ]
    };
  },
  methods: {
    huitui () {
      this.$router.go(-1)
    },
    onCancel () {
      this.show = false;
      console.log('取消！');
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
  background: #f5f5f5;
  padding: 2px 0px;
  position: fixed;
  top: 0px;
}
.van-icon {
  font-size: 22px;
}
.left {
  margin-left: 2px;
}
.right {
  margin-right: 5px;
}
.right .van-icon {
  font-size: 26px;
}
</style>
