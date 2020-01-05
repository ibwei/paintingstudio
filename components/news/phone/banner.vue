<template>
  <div class="banner">
    <div class="left" @click="huitui">
      <span style="margin-left:10px;">返回</span>
    </div>
    <div class="banner-cont">{{ news.title?news.title:'加载中...' }}</div>
    <div class="right" @click="showAction">
      <van-icon name="ellipsis" color="rgba(0,0,0,.4)" />
    </div>
    <!-- van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      title="分享"
      @cancel="onCancel"
    />-->
    <vue-native-share
      @click="handleShare"
      v-if="show"
      class="share"
      :shareMenu="shareMenu"
      :config="config"
    />
  </div>
</template>

<script>
import { getSimpleText } from '../../../utils/handleText';
export default {
  props: {
    news: {
      type: Object,
      default () {
        return {
          title: '文章标题',
          thumbnail: '',
        }
      }
    }
  },
  data () {
    return {
      show: false,
      actions: [
        { name: '分享到qq空间' },
        { name: '分享到朋友圈', subname: '让更多人看到' },
        { name: '分享到微博' }
      ],
      shareMenu: [0, 1, 2, 3, 4, 5],
      config: {
      }
    };
  },
  mounted () {
    if (process.client) {
      console.log(this.news)
      console.log(this.config)
    }
  },
  methods: {
    huitui () {
      this.$router.push('/news')
    },
    onCancel () {
      this.show = false;
    },
    handleShare (e) {
      console.log(e)
    },
    showAction () {
      this.show = true;
      this.config = {        title: this.news.title,
        desc: getSimpleText(this.news.content).slice(0, 40) + "...",
        img: this.news.thumbnail.split('-')[0],
        img_title: '图片标题',
        link: window.location.href,
        url: window.location.href,
        success: () => { console.log('success') }, //成功回调
        cancel: () => { console.log('cancel') }, //取消回调
      }
      console.log(this.config)
    }
  }
}
</script>

<style scoped>
.label {
  color: #fff;
}
.list-item {
  color: #fff;
}
.banner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 1px 1px 5px rgba(33, 33, 33, 0.1);
  position: fixed;
  top: 0px;
  padding: 8px 10px;
  z-index: 999;
}
.share {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
}
.van-icon {
  font-size: 22px;
}
.left {
  padding-left: 8px;
  width: 60px;
  color: rgba(0, 0, 0, 0.4);
}
.right {
  margin-right: 10px;
}
.right .van-icon {
  font-size: 26px;
}
.banner-cont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
  font-size: 16px;
}
</style>
