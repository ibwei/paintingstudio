<template>
  <div class="app" ref="app">
    <div>
      <top-menu></top-menu>
    </div>
    <!-- <Affix/> -->
    <nuxt class="nuxt-content"/>
    <div>
      <bottom-footer></bottom-footer>
    </div>
  </div>
</template>

<script>
import topMenu from '../components/common/topMenu';
import bottomFooter from '../components/common/bottomFooter';
import sticky from '../components/common/sticky';
export default {
  name: 'Default',
  components: {
    topMenu,
    bottomFooter,
    sticky
  },
  data() {
    return {
      appRef: null
    };
  },
  created() {
    this.$nextTick(() => {
      this.appRef = this.$refs.app;
    });
  }
};
</script>

<style scoped lang="less"></style>
