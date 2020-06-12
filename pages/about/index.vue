<template>
  <div class="about">
    <teacher />
  </div>
</template>
<script>
import teacher from '@/components/about/teacher';
export default {
  head() {
    return {
      title: '品贤画室 | 关于我们',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: '关于品贤,品贤画室,成都品贤'
        }
      ]
    };
  },
  components: {
    teacher
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.about {
  padding-bottom: 60px;
}
</style>
