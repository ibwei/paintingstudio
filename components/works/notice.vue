<template>
  <div class="notice">
    <div class="title"></div>
    <div class="container">
      <div class="content">
        <p class="word" v-html="contentWord"></p>
        <div class="button">More...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentWord:
        '武汉（江汉路·光谷），成都（春熙路·武侯），西安，长沙，重庆（沙区·观音桥·南坪·大坪），苏州，宁波分点已开，学费及地址详情请点击“招生简章”；另外请留言时务必填联系电话。\n...'
    };
  }
};
</script>

<style></style>
