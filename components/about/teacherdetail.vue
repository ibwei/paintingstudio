<template>
  <div class="teacher-detail">
    <div class="head">
      <div class="head-left">
        <van-icon name="arrow-left" size="16" />
      </div>
      <div class="head-title">教师详情</div>
      <div class="head-right">&nbsp;</div>
    </div>
    <div class></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scope>
.flex {
  display: -webkit-flex;
  display: flex;
}
.head {
  .flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  min-width: 40px;
  padding: 5px;
  text-align: center;
}
.head-title {
  font-size: 16px;
}
.head-right {
  min-width: 40px;
}
</style>
