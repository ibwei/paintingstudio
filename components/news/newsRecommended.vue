<template>
  <div class="news-recom"></div>
</template>

<script>
export default {
  props: {
    recommended: {
      type: Array,
      default: () => []
    }
  },
  created () {
    console.log(this.recommended)
  }

}
</script>

<style>
</style>
