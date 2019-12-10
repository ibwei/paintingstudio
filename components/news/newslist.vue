<template>
  <div class="news-list">
    <template v-for="item in listnews">
      <template v-if="item.imgUrl"></template>
      <div class="card"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Newslist',
  data () {
    return {
      listnews: [{
        id: 1, praise: 1, browse: 1, type: 1, title: '品贤画室招生呐！', describe: '两兄弟创建的品贤画室开业了，教学环境秀丽优美，师资力量强大，就等你来', imgUrl: require('../../assets/images/art/art1.jpg'), imgUrls: [{ imgUrl: require('../../assets/images/art/art1.jpg') }, { imgUrl: require('../../assets/images/art/art1.jpg') }, { imgUrl: require('../../assets/images/art/art1.jpg') }], info: 1
      }]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
