import { mapState } from 'vuex';
<template>
  <div class="iframe" :style="{height:isPhone?height:'700px'}">
    <div v-if="!isLoad" class="play" @click="load3D">
      <van-icon size="40px" name="play-circle-o" />
      <span>For Art, For You</span>
    </div>
    <iframe v-else :src="GalleryUrl" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { GalleryUrl } from '@/config/index'
export default {
  props: {
    height: {
      type: String,
      default: '300px'
    }
  },
  computed: {
    ...mapState(['isPhone'])
  },
  data () {
    return {
      isLoad: false,
      GalleryUrl
    }
  },
  mounted () {
    const isLoad3d = localStorage.getItem('isLoad3d');
    if (isLoad3d === 'true') {
      this.isLoad = true;
    }
  },
  methods: {
    load3D () {
      this.isLoad = true;
      localStorage.setItem('isLoad3d', 'true');
    }
  }
}
</script>

<style scoped>
.iframe {
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
