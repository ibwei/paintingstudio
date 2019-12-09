<template>
  <div id="news">
    <div class="news-container">
      <breadcrumb />
      <div class="content">
        <div class="mid-content"></div>
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
export default {
  components: {
    breadcrumb,
    taglist
  }
};
</script>

<style></style>
