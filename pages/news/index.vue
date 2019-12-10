<template>
  <div id="news">
    <div class="news-container">
      <breadcrumb />
      <div class="content">
        <div class="mid-content">
          <vlabel></vlabel>
        </div>
        <div class="left-content">
          <taglist />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumb from '../../components/common/breadcrumb';
import taglist from '../../components/news/taglist'
import vlabel from '../../components/news/label'
export default {
  components: {
    breadcrumb,
    taglist,
    vlabel
  }
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 720px) {
  .bread {
    display: none;
  }
  .taglist {
    display: none;
  }
}
</style>
