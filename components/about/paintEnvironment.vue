<template>
  <div>
    <v-title :init-title="initTtile"></v-title>
  </div>
</template>

<script>
import vTitle from '@/components/common/vTitle';
export default {
  components: {
    vTitle
  },
  data () {
    return {
      initTtile: {
        cnTitle: '画室环境',
        enTitle: 'Student Painting Works',
        mode: 'black',
        icon: '&#xe618;'
      }
    }
  }
}
</script>

<style>
</style>
