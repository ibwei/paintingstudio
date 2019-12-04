<template>
  <div id="news">
    <h2>画室动态</h2>
    <router-link to="/news/articleDetails">详情页</router-link>
    <breadcrumb></breadcrumb>
  </div>
</template>

<script>
import breadcrumb from '../../components/common/breadcrumb';
export default {
  components: {
    breadcrumb
  }
};
</script>

<style></style>
