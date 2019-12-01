<template>
  <div class="teacher-wrap">
    <v-title v-bind:initTitle="initTtile"></v-title>
    <div class="content">
      <div class="grid">
        <div v-for="(item,index) of environmentList" class="grid-item" :key="index">
          <div class="gird-item">
            <van-image :src="item" fit="fill" @click="showPreview(index)">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </div>
        </div>
      </div>
    </div>

    <van-image-preview
      :show-indicators="true"
      v-model="show"
      :images="environmentList"
      @change="onChange"
    >
      <template v-slot:index>第{{ index }}张</template>
    </van-image-preview>
  </div>
</template>

<script>
import vTitle from '../../components/common/vTitle'
export default {
  components: {
    vTitle,
  },
  data () {
    return {
      initTtile: {
        cnTitle: '画室环境',
        enTitle: 'Painting Studio Environment',
        mode: 'black',
        icon: '&#xe66c;'
      },
      index: 1,
      show: false,
      environmentList: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575201060352&di=a04888acbf343948cec3e40b19a5062e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3fc54b57b6305493fa092d5f08435b4bd0651bf326d10b-tuMpWK_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575203006573&di=b6f9b699174c0e40466865db8d314091&imgtype=0&src=http%3A%2F%2Fimg3.epanshi.com%2F7923%2Fproduct%2Fw-535a456f4ad02.JPG', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575203006572&di=d387b26786bafc4ca868c5172c458144&imgtype=0&src=http%3A%2F%2Falipic.files.mozhan.com%2Fmozhan%2F20180329%2F615151301fc5d98383733a5d382f1311.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575201060352&di=a04888acbf343948cec3e40b19a5062e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3fc54b57b6305493fa092d5f08435b4bd0651bf326d10b-tuMpWK_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575201060352&di=a04888acbf343948cec3e40b19a5062e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3fc54b57b6305493fa092d5f08435b4bd0651bf326d10b-tuMpWK_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575201060352&di=a04888acbf343948cec3e40b19a5062e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3fc54b57b6305493fa092d5f08435b4bd0651bf326d10b-tuMpWK_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575201060352&di=a04888acbf343948cec3e40b19a5062e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3fc54b57b6305493fa092d5f08435b4bd0651bf326d10b-tuMpWK_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575201060352&di=a04888acbf343948cec3e40b19a5062e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3fc54b57b6305493fa092d5f08435b4bd0651bf326d10b-tuMpWK_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575201060352&di=a04888acbf343948cec3e40b19a5062e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3fc54b57b6305493fa092d5f08435b4bd0651bf326d10b-tuMpWK_fw658',
      ]
    }
  },
  methods: {
    onChange (index) {
      this.index = index + 1;
    },
    showPreview (index) {
      this.index = index + 1;
      this.show = true;
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
.content {
  margin: 20px 10px;
  max-width: 1200px;
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
  border: 1px solid #fff;
}
</style>