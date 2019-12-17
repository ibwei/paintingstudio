<template>
  <div class="nav-bar-wrap">
    <div class="icon left">&#xe645;</div>
    <div class="srk">
      <van-field v-model="value" placeholder="我也来说两句……" right-icon="smile-o" />
    </div>
    <div class="icon-wrap">
      <van-icon name="comment-o" info="99+" />
      <div class="icon sc">&#xe611;</div>
      <div class="icon fx">&#xe637;</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
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
