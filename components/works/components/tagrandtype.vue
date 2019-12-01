<template>
  <div class="tag-info">
    <van-tag
      v-for="(item,index) of infos"
      :key="index"
      :color="colors[index].color?colors[index].color:colors[index-length+1].color"
      :plain="true"
    >
{{ item }}
</van-tag>
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
      colors: [{ color: '#f2826a', plain: 'false' }, { color: '#f2826a', plain: 'true' }, { color: '#7232dd', plain: 'false' }, { color: '#7232dd', plain: 'true' }, { color: 'rgb(228,249,238)', plain: 'true' }, { color: '#1989FA', plain: 'true' }, { color: 'rgb(7,193,96)', plain: 'false' }, { color: '#1989FA', plain: 'true' }]
    }
  }
}
</script>
<style lang="less" scoped>
.van-tag {
  font-size: 14px;
  padding: 4px 8px;
  margin: 15px 5px;
}
.tag-info {
  display: inline-block;
}
</style>
