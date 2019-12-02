<template>
  <div class="contact">
    <!-- 头部图片信息 -->
    <div class="contact-img">
      <van-image width="100%" :src="bgUrl" />
      <div class="bg-title">
        <h1>您好，很高兴为您服务</h1>
        <h2>
          2019年创办于重庆大学城，两兄弟所办,朝气蓬勃,全年开课，随到随学，自由选择学习时间,给我们留下您宝贵的留言吧
        </h2>
      </div>
    </div>

    <div class="online">
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
    <div class="more-links">
      <div class="weChat">
        <div class="icon iconfont " style="color:#1aad19;font-size:32px;">&#xe685;</div>
        <span>微信</span>
        <span>1368590868</span>
      </div>
      <div class="qq">
        <div class="icon iconfont " style="color:rgb(207, 39, 41);font-size:32px;">&#xe6e3;</div>
        <span>QQ</span>
        <span>1368590868</span>
      </div>
      <div class="tell">
        <div class="icon iconfont " style="color:rgb(72, 137, 247);font-size:32px;">&#xe601;</div>
        <span>电话</span>
        <span>18166334475</span>
      </div>
      <div class="Email">
        <div class="icon iconfont " style="color:#1aad19;font-size:32px;">&#xe66d;</div>
        <span>邮箱</span>
        <span>i.ranlin@qq.com</span>
      </div>
    </div>
  </div>
</template>

<script>
import vTitle from '../common/vTitle'
export default {
  components:{
    vTitle
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
        enTitle: 'Online feedback',
        mode: 'black',
        icon: '&#xe66f;'
      },
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
  .more-links{
     .qq,.Email,.tell,.weChat{
      width: 25%;
      display: flex;
      flex-flow: row nowrap;
}}}
</style>
