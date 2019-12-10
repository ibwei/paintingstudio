<template>
  <div class="works">
    <v-title :init-title="initTtile"></v-title>
    <div class="works-content">
      <div class="list">
        <div class="img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="text">写实画cat</div>
      </div>
      <div class="list">
        <div class="img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="text">写实画cat</div>
      </div>
      <div class="list">
        <div class="img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="text">写实画cat</div>
      </div>
      <div class="list">
        <div class="img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="text">写实画cat</div>
      </div>
      <div class="list">
        <div class="img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="text">写实画cat</div>
      </div>
      <div class="list">
        <div class="img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="text">写实画cat</div>
      </div>
      <div class="list">
        <div class="img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="text">写实画cat</div>
      </div>
      <div class="list">
        <div class="img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="text">写实画cat</div>
      </div>
      <div class="list">
        <div class="img">
          <van-image
            fit="cover"
            width="100%"
            height="100%"
            src="/_nuxt/assets/images/index/cat.png"
          />
        </div>
        <div class="text">写实画cat</div>
      </div>
    </div>
  </div>
</template>

<script>
import vTitle from '@/components/common/vTitle';
export default {
  components: {
    vTitle
  },
  data () {
    return {
      initTtile: {
        cnTitle: '学生作品',
        enTitle: 'Student Painting Works',
        mode: 'red',
        icon: '&#xe618;'
      }
    }
  }
}
</script>

<style lang='less' scoped>
.flex {
  display: -webkit-flex;
  display: flex;
}
.works-content {
  .flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px;
}
.list {
  width: 48%;
  padding-bottom: 10px;
}
.img {
  max-height: 120px;
}
.text {
  text-align: center;
}
</style>
