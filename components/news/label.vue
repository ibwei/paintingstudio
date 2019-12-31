import { mapMutations } from 'vuex';
<template>
  <div class="label-wrap">
    <van-tabs swipeable sticky @click="onClick">
      <template v-for="(item,index) of list">
        <van-tab :key="index" :title="item.category" :style="{'flex-basis':'20%'}"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Label',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      active: 1
    }
  },
  created () {
    if (process.client) {
      this.setArticleCategory(this.list[0].category);
    }
  },
  methods: {
    ...mapMutations(['setArticleCategory']),
    onClick (name, title) {
      this.setArticleCategory(title);
    }
  }
}
</script>

<style lang="less" scoped>
</style>
