import { mapState } from 'vuex';
<template>
  <div class="ifame" :style="{height:isPhone?height:'700px'}">
    <div class="play" @click="load3D" v-if="!isLoad">
      <van-icon size="40px" name="play-circle-o" />
      <span>For Art, For You</span>
    </div>
    <iframe
      v-else
      ref="gallery"
      class="ifa"
      width="100%"
      height="100%"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { GalleryUrl } from '@/config/index'
export default {
  props: {
    height: {
      type: String,
      default: '300px',
    }
  },
  computed: {
    ...mapState(['isPhone']),
  },
  data () {
    return {
      isLoad: false,
    }
  },
  created () {
    if (process.client) {
      const isLoad3d = localStorage.getItem('isLoad3d');
      if (isLoad3d === 'true') {
        this.load3D();
      }
    }
  },
  methods: {
    load3D () {
      this.isLoad = true;
      localStorage.setItem('isLoad3d', 'true');
      this.$nextTick(() => {
        this.$refs.gallery.src = GalleryUrl;
      })
    }
  }
}
</script>

<style scoped>
.ifame {
  border: none;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.play {
  display: flex;
  flex-flow: column nowrap;
  line-height: 4;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
</style>