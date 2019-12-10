<template>
  <div class="label-wrap">
    <van-tabs swipeable sticky @click="onClick">
      <template v-for="item of labels">
        <van-tab :key="item.id" :title="item.value"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Label',
  data () {
    return {
      active: 1,
      labels: [
        { id: 1, value: '最新' }, { id: 2, value: '最热' }, { id: 3, value: '课程' }, { id: 4, value: '师资' }, { id: 5, value: '教学环境' }
      ]
    }
  },
  methods: {
    onClick (name, title) {
      this.$toast(title);
    }
  }
}
</script>

<style lang="less" scoped>
</style>
