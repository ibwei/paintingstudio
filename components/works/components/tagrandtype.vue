<template>
  <div class="tag-info">
    <template v-for="(item, index) of taglist">
      <template v-if="item.plain">
        <van-tag :key="index" :color="item.color" plain class="tag">{{ item.info }}</van-tag>
      </template>
      <template v-else>
        <van-tag :key="index" :color="item.color" class="tag">{{ item.info }}</van-tag>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    infos: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      taglist: [],
      colors: [
        { color: '#f2826a', plain: false },
        { color: '#f2826a', plain: true },
        { color: '#7232dd', plain: false },
        { color: '#7232dd', plain: true },
        { color: 'rgb(228,249,238)', plain: true },
        { color: '#1989FA', plain: true },
        { color: 'rgb(7,193,96)', plain: false },
        { color: '#1989FA', plain: true }
      ]
    };
  },
  created () {
    const colorsLength = this.colors.length;
    const infosLength = this.infos.length;
    this.$nextTick(() => {
      for (let i = 0; i < infosLength; i++) {
        let random = Math.floor(Math.random() * colorsLength);
        const temp = { info: this.infos[i], ...this.colors[random] };
        this.taglist.push(temp);
      }
    })
  }
};
</script>
<style lang="less" scoped>
.van-tag {
  font-size: 12px;
  padding: 4px 6px;
  margin: 4px 4px;
}
.tag-info {
  display: inline-block;
}
</style>
