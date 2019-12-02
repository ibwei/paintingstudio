<template>
  <div class="tag-info">
    <template v-for="(item,index) of infos">
      <template v-if="colors[index].plain">
        <van-tag
          :color="colors[index].color?colors[index].color:colors[index-length+1].color"
          plain
        >
{{ item }}
</van-tag>
      </template>
      <template v-else>
        <van-tag
          :color="colors[index].color?colors[index].color:colors[index-length+1].color"
        >
{{ item }}
</van-tag>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: {
    infos: {
      type: Array,
      default: () => []
    } },
  data () {
    return {
      length: 8,
      colors: [{ color: '#f2826a', plain: false }, { color: '#f2826a', plain: true }, { color: '#7232dd', plain: false }, { color: '#7232dd', plain: true }, { color: 'rgb(228,249,238)', plain: true }, { color: '#1989FA', plain: true }, { color: 'rgb(7,193,96)', plain: false }, { color: '#1989FA', plain: true }]
    }
  }
}
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
