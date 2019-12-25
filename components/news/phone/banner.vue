<template>
  <div class="banner">
    <div class="left" @click="huitui">
      <van-icon name="arrow-left" />
    </div>
    <div class="banner-cont">动态详情</div>
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
  background: #fff;
  padding: 8px 0px;
  position: fixed;
  top: 0px;
}
.van-icon {
  font-size: 22px;
}
.left {
  margin-left: 8px;
}
.right {
  margin-right: 10px;
}
.right .van-icon {
  font-size: 26px;
}
.banner-cont {
  color: #e00;
  font-size: 16px;
}
</style>
