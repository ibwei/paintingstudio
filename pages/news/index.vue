<template>
  <div class="news">
    <div class="news-container">
      <breadcrumb />
      <div class="content">
        <div class="mid-content">
          <vlabel></vlabel>
          <newslist></newslist>
        </div>
        <div class="left-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumb from '../../components/common/breadcrumb';
import vlabel from '../../components/news/label'
import newslist from '../../components/news/newslist'
export default {
  components: {
    breadcrumb,
    vlabel,
    newslist
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
  .news-list {
    margin-top: 20px;
  }
}
</style>
