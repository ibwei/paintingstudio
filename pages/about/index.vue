<template>
  <div>
    <paintEnvironment />
    <teacher />
  </div>
</template>

<script>
import paintEnvironment from '@/components/about/paintEnvironment';
import teacher from '@/components/about/teacher';
export default {
  components: {
    paintEnvironment,
    teacher
  },
  methods: {},
  watch: {
    /** 监听路由 */
    $router(to, from) {
      console.log('routerto :', to);
      console.log('router from :', from);
    },
  }
};
</script>

<style lang="less" scoped></style>
