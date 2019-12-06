<template>
  <div class="contact">
    <!-- 头部图片信息 -->
    <div class="contact-img" v-scroll-reveal.scaleUp="{scale:0.15}">
      <van-image class="bgImg" width="100%" :src="bgUrl" />
      <div class="bg-title">
        <h1>您好，很高兴为您服务</h1>
        <h2>
          2019年创办于重庆大学城，两兄弟所办,朝气蓬勃,全年开课，随到随学，自由选择学习时间,给我们留下您宝贵的留言吧
        </h2>
      </div>
    </div>

    <div class="online" v-scroll-reveal.smooth="{easing:'ease-in'}">
      <v-title :init-title='initTtile'></v-title>
      <!-- 表单内容 -->
      <van-cell-group class="form">
        <van-field
          v-model="name"
          label="姓 名"
          placeholder="您的姓名"
          label-class="name"
          required
        />
        <van-field
          v-model="phone"
          label="电 话"
          placeholder="您的电话号码"
          required
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
        />
      </van-cell-group>
      <van-button class="submit" size="large" @click="submit"
        >提交信息</van-button
      >
    </div>
    <v-title :init-title='initMap' v-scroll-reveal.smooth="{easing:'ease-in'}"></v-title>
    <!-- 插入地图 -->
    <g-map></g-map>
  </div>
</template>

<script>
import vTitle from '../../components/common/vTitle'
import gMap from '../../components/common/gMap'
export default {
  components:{
    vTitle,
    gMap
  },
  data() {
    return {
      bgUrl: require('../../assets/images/index/worksImg04.png'),
      // 表单绑定值
      name: '',
      phone: '',
      weChat: '',
      time: '',
      message: '',
      // 意见反馈
      initTtile: {
        cnTitle: '在线意见反馈',
        enTitle: 'Feedback Online ',
        mode: 'black',
        icon: '&#xe66f;'
      },
      //地图标题
      initMap:{
        cnTitle: '联系地址',
        enTitle: 'Contact Address',
        mode: 'black',
        icon: '&#xe600;'
      }
    };
  },
  methods: {
    /**
     * submit 提交所有数据
     * @return void
     */
    submit() {
      this.$toast('提交了所有数据');
    }
  }
};
</script>

<style lang="less" scope>
.contact {
  .contact-img {
    position: relative;
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
        font-size: 24px;
        font-weight: bold;
        color: #fff;
      }
      h2 {
        font-size: 16px;
        text-align: center;
        color: #fff;
        margin-top: 15px;
      }
    }
  }
  .online {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .form {
      width: 100%;
      margin-top: 20px;
    }
    .submit{
        margin-bottom: 30px;
    }
    .online-desc {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .more-links{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .qq,.Email,.tell,.weChat{
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
  .contact{
    width: 100%;
    .contact-img{
      .bg-title{
        padding: 20px;
        h1{
          font-size: 3vw;
        }
        h2{
          font-size: 2vw;
        }
      }
    }
    .online{
      .form{
  max-width: 450px;
      margin: 0 auto;
      }
      .submit{
        max-width: 450px;
      }
    
    }
  }
}
</style>
