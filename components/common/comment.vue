<template>
  <div class="comment-list">
    <div v-for="(item, index) of list" :key="index">
      <van-divider />
      <div class="list-item">
        <div class="left">
          <van-icon :name="item.avatar" size="40px" />
        </div>
        <div class="right">
          <div class="first">
            <span class="name">{{ item.name }}</span>
            <van-rate v-model="item.star" allow-half />
          </div>
          <div class="second">
            <p>{{ item.content }}</p>
          </div>
          <div class="third">
            <span class="time">{{ item.created_at }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
.list-item {
  color: @color-grey-2;
  font-size: 14px;
  display: flex;
  line-height: 2;
  width: 100%;
  flex-flow: row nowrap;
}
.right {
  width: 100%;
  margin-left: 10px;
}
.first {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.time {
  font-size: 12px;
}
</style>
