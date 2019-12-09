<template>
  <div class="apply-wrap">
    <div class="title">
      <span class="title-desc1">在线报名</span>
      <span>请留下您的邮箱和联系方式，我们客服专员会把资料发送至您的QQ邮箱并第一时间联系您。</span>
    </div>

    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.apply-wrap{
    margin-bottom: 50px;
    .title{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        color:#f08300;
        text-align: center;
        .title-desc1{
            font-weight: bolder;
        }
    }
}
</style>
