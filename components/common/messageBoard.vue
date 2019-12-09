<template>
  <div class="msg-board">
    <!-- 头部文字 -->
    <v-title v-bind:initTitle="initTtile"></v-title>
    <div class="title">
      <span>请留下您的邮箱和联系方式，我们客服专员会把资料发送至您的QQ邮箱并第一时间联系您。</span>
    </div>
    <!-- 表单内容 -->
    <van-cell-group class="form">
      <van-field v-model="name" label="姓 名" placeholder="请输入姓名" label-class="name" required />
      <van-field v-model="phone" label="电 话" placeholder="请输入电话号码" required />
      <van-field v-model="weChat" label="微 信" placeholder="请填写你的微信号" />
      <van-field
        readonly
        clickable
        label="选择课程"
        :value="value"
        placeholder="请选择课程"
        @click="showPicker = true"
        class="select"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="courses"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="留 言"
        type="textarea"
        maxlength="300"
        placeholder="请输入留言"
        show-word-limit
      />
    </van-cell-group>
    <van-button class="submit" @click="submit">提交</van-button>
    <div class="contact-us"></div>
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
      /* 标题初始化 */
      initTtile: {
        cnTitle: '在线报名',
        enTitle: 'Contact Us Online',
        mode: 'black',
        icon: '&#xe616;'
      },
      // 表单绑定值
      name: '',
      phone: '',
      weChat: '',
      time: '',
      message: '',
      // 课程选择
      value: '',
      showPicker: false,
      courses: [
        '短期班（25次半天）',
        '长期班（50次半天）',
        '直通班（不限课）',
        '强化班（1年上完）',
        '协议班（1年上完）'
      ]
    };
  },
  methods: {
    /**
     * submit 提交所有数据
     * @return void
     */
    submit () {
      this.$toast('提交了所有数据');
    },
    /**
     * onConfirm 点击完成按钮时触发
     * @param value{String} 选择值
     */
    onConfirm (value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color.less');
.msg-board {
  padding: 40px 10px 20px 10px;
  background: #fff;
  .title {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    margin: 10px;
    padding: 10px 5px;
    .title-desc1 {
      font-weight: bolder;
      margin-bottom: 15px;
    }
  }
  .form {
    border-top: 1px solid @color-bg-grey;
    word-spacing: 25px;
    margin-top: 15px;
    .pc-select {
      display: none;
    }
    .btn {
      width: 80%;
      height: 30px;
      border-radius: 20px 20px;
      margin: 10px 10vw;

      background-color: @color-brand;
      color: #fff;
    }
  }
}
@media screen and (min-width: 720px) {
  .msg-board {
    width: 50vw;
    margin: 0 auto;
    background: #fff;
    .form {
      .select {
        display: none;
      }
      .pc-select {
        display: block;
      }
      .btn {
        width: 10vw;
        margin: 0 20vw;
        border-radius: 0;
      }
    }
  }
}
.submit {
  text-align: center;
  width: 100%;
  margin-top: 10px;
}
</style>
