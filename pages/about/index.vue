<template>
  <div>
    <paintEnvironment />
    <studentWork />
    <teacher />
  </div>
</template>

<script>
import paintEnvironment from '@/components/about/paintEnvironment';
import studentWork from '@/components/about/studentWork';
import teacher from '@/components/about/teacher';
export default {
  components: {
    paintEnvironment,
    teacher,
    studentWork
  },
  watch: {
    /** 监听路由 */
    $router (to, from) {
      console.log('routerto :', to);
      console.log('router from :', from);
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped></style>
