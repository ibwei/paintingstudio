<template>
  <div class="contact">
    <!-- 头部图片信息 -->
    <div v-scroll-reveal.scaleUp="{scale:0.15}" class="contact-img">
      <div class="bg-title">
        <h1>Hey，欢迎来到这里，请联系我们吧</h1>
        <h2>品贤画室于2019年创办于成都 ，我们朝气蓬勃，我们正青春。我们全年开课，随到随学，我们自由选择学习时间，欢迎来体验绘画课或者给我们留下宝贵的建议。</h2>
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
        <van-field v-model="email" label="邮箱" placeholder="强烈建议您填写邮箱" />
        <van-field
          v-model="content"
          rows="3"
          autosize
          label="留 言"
          type="textarea"
          maxlength="300"
          placeholder="留下您反馈内容与宝贵意见"
          show-word-limit
          required
          :error-message="error.content"
          @blur="checkPhone('content')"
        />
      </van-cell-group>
      <van-button class="submit" size="large" :loading="isloading" @click="submit">提交信息</van-button>
    </div>
    <v-title v-scroll-reveal.smooth="{easing:'ease-in'}" :init-title="initMap"></v-title>
    <!-- 插入地图 -->
    <g-map></g-map>
  </div>
</template>

<script>
import vTitle from '../../components/common/vTitle'
import gMap from '../../components/common/gMap'
import { Api } from '../../api//index'
export default {
  components: {
    vTitle,
    gMap
  },
  data () {
    return {
      // 加载状态
      isloading: false,
      // 表单绑定值
      name: '',
      phone: '',
      email: '',
      time: '',
      content: '',
      message: '',
      error: {
        phone: '',
        name: '',
        content: ''
      },
      // 意见反馈
      initTtile: {
        cnTitle: '我要反馈',
        enTitle: 'Complain Or Feedback Online',
        mode: 'black',
        icon: '&#xe66f;'
      },
      // 地图标题
      initMap: {
        cnTitle: '画室地址',
        enTitle: 'Where We Are Locate',
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
      this.isloading = true
      this.$axios({
        method: 'post',
        url: Api.feedbackAdd,
        data: {
          name: this.name,
          phone: this.phone,
          email: this.email,
          wechat: this.phone,
          content: this.content
        }      }).then(() => {
        this.isloading = false,
          this.name = '',
          this.phone = '',
          this.content = '',
          this.email = '',
          this.$toast('反馈内容提交成功')
      })
        .catch(() => this.$toast('填写数据有误，请重新填写'))
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
