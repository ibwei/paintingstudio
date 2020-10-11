<template>
  <div class="teacher-wrap">
    <div class="title">
      <v-title :init-title="initTtile"></v-title>
    </div>
    <div class="content">
      <div class="grid">
        <div
          v-for="(item, index) of environmentList"
          :key="index"
          class="grid-item"
        >
          <div v-if="index < 9" class="gird-item">
            <van-image :src="item" class="en-image" @click="showPreview(index)">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </div>
        </div>
      </div>
    </div>
    <div class="preview-area">
      <van-image-preview
        v-model="show"
        :show-indicators="true"
        :images="environmentList"
        @change="onChange"
      >
        <template v-slot:index>第{{ index }}张</template>
      </van-image-preview>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vTitle from '../../components/common/vTitle'
export default {
  components: {
    vTitle
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    ...mapState(['isPhone'])
  },
  data() {
    return {
      initTtile: {
        cnTitle: '画室环境',
        enTitle: 'Painting Studio Environment',
        mode: 'black',
        icon: '&#xe66c;'
      },
      index: 1,
      show: false,
      environmentList: []
    }
  },
  created() {
    if (process.client) {
      this.handleList()
    }
  },
  methods: {
    handleList() {
      this.environmentList = this.list.map((item) => {
        return item.url
      })
    },
    onChange(index) {
      this.index = index + 1
    },
    /* 打开图片预览 */
    showPreview(index) {
      if (!this.isPhone) {
        window.open(this.environmentList[index])
        return
      }
      this.index = index + 1
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/color');
.teacher-wrap {
  position: relative;
  box-sizing: border-box;
  z-index: 999;
  margin: 0 auto;
  margin: 10px;
  padding: 20px 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: @color-bg-base;
  background-image: linear-gradient(30deg, @color-bg-base, @color-bg-grey);
}
.title {
  width: 100%;
}
.content {
  margin: 20px 10px;
  max-width: 1200px;
}
.en-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  overflow: hidden;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
.gird-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 1px solid #fff;
}
@media screen and(max-width: 780px) {
  .en-image {
    width: 100%;
    height: auto;
    max-height: 80px;
    overflow: hidden;
  }
}
</style>
