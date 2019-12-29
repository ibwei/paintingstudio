<template>
  <div class="about">
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
  methods: {}
};
</script>

<style lang="less" scoped>
.about {
  padding-bottom: 60px;
}
</style>
