<template>
  <div class="contact">
    <!-- 头部图片信息 -->
    <div v-scroll-reveal.scaleUp="{scale:0.15}" class="contact-img">
      <div class="bg-title">
        <h1>Hey，欢迎来到这里，请联系我们吧</h1>
        <h2>2019年创办于重庆大学城，两兄弟所办朝气蓬勃，全年开课，随到随学，自由选择学习时间，给我们留下您宝贵的留言吧。</h2>
      </div>
    </div>

    <div v-scroll-reveal.smooth="{easing:'ease-in'}" class="online">
      <v-title :init-title="initTtile"></v-title>
      <!-- 表单内容 -->
      <van-cell-group class="form">
        <van-field
          v-model="name"
          label="姓 名"
          placeholder="您的姓名"
          label-class="name"
          required
          :error-message="error.name"
          @blur="checkPhone('name')"
        />
        <van-field
          v-model="phone"
          label="电 话"
          placeholder="您的电话号码"
          :error-message="error.phone"
          required
          @blur="checkPhone('phone')"
        />
        <van-field v-model="weChat" label="微 信" placeholder="您的的微信号" />
        <van-field
          v-model="message"
          rows="3"
          autosize
          label="留 言"
          type="textarea"
          maxlength="300"
          placeholder="留下您反馈内容与宝贵意见"
          show-word-limit
          :error-message="error.cotent"
          @blur="checkPhone('content')"
        />
      </van-cell-group>
      <van-button class="submit" size="large" @click="submit">提交信息</van-button>
    </div>
    <v-title v-scroll-reveal.smooth="{easing:'ease-in'}" :init-title="initMap"></v-title>
    <!-- 插入地图 -->
    <g-map></g-map>
  </div>
</template>

<script>
import vTitle from '../../components/common/vTitle'
import gMap from '../../components/common/gMap'
export default {
  components: {
    vTitle,
    gMap
  },
  data () {
    return {
      // 表单绑定值
      name: '',
      phone: '',
      weChat: '',
      time: '',
      message: '',
      error: {
        phone: '',
        name: '',
        content: ''
      },
      // 意见反馈
      initTtile: {
        cnTitle: '联系我们',
        enTitle: 'Feedback Online ',
        mode: 'black',
        icon: '&#xe66f;'
      },
      // 地图标题
      initMap: {
        cnTitle: '我们在这里',
        enTitle: 'Where Are We Locate',
        mode: 'red',
        icon: '&#xe600;'
      }
    };
  },
  methods: {

    checkPhone (type) {
      const typeTable = {
        phone: '电话',
        name: '姓名',
        content: '反馈内容'
      }
      let reg;
      switch (type) {
        case 'phone':
          reg = /^[1]\d{10}/;
          break;
        case 'name':
          reg = /\S{2,10}/;
          break;
        case 'content':
          reg = /\S{2,300}/;
      }

      if (!reg.test(this[type])) {
        this.error = { ...this.error, [type]: typeTable[type] + '格式错误!' };
      } else {
        this.error = { ...this.error, [type]: '' };
      }
    },
    /**
     * submit 提交所有数据
     * @return void
     */
    submit () {

    }
  }
};
</script>

<style lang="less" scope>
.contact {
  .contact-img {
    position: relative;
    background: url('../../assets/images/index/contact-background.png') top
      center no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 200px;
    .bg-title {
      padding: 20px;
      position: absolute;
      display: flex;
      top: 0;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      h1 {
        font-size: 18px;
        font-weight: 300;
        color: #fff;
      }
      h2 {
        font-size: 14px;
        text-align: center;
        color: #fff;
        margin-top: 15px;
        font-weight: 200;
      }
    }
  }
  .online {
    display: flex;
    // width: 100%;
    padding: 0 10px;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .form {
      // width: 100%;
      margin: 20px 10px;
    }
    .submit {
      margin: 10px 10px;
    }
    .online-desc {
      font-size: 18px;
      font-weight: 200;
    }
  }
  .more-links {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .qq,
    .Email,
    .tell,
    .weChat {
      width: 50%;
      margin-top: 10px;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
    }
  }
}
@media screen and (min-width: 720px) {
  .contact {
    width: 100%;
    .contact-img {
      background: url('../../assets/images/index/contact-background1.png') top
        center no-repeat;
      background-size: 100% 100%;
      height: 400px;
      .bg-title {
        padding: 20px;
        h1 {
          font-size: 24px;
          font-weight: 300;
        }
        h2 {
          font-size: 18px;
          font-weight: 200;
        }
      }
    }
    .online {
      .form {
        max-width: 450px;
        margin: 0 auto;
      }
      .submit {
        max-width: 450px;
      }
    }
  }
}
</style>
