<template>
  <div class="msg-board">
    <!-- 头部文字 -->
    <div class="title">
      <span class="title-desc1">在线报名</span>
      <span
        >请留下您的邮箱和联系方式，我们客服专员会把资料发送至您的QQ邮箱并第一时间联系您。</span
      >
    </div>
    <!-- 表单内容 -->
    <van-cell-group class="form">
      <van-field
        v-model="name"
        label="姓 名"
        placeholder="Name"
        label-class="name"
        required
      />
      <van-field v-model="phone" label="电 话" placeholder="Phone" required />
      <van-field v-model="weChat" label="微 信" placeholder="WeChat" />
      <van-field
        v-model="time"
        label="学习时间"
        placeholder="Professional learning time"
      />

      <van-field
        readonly
        clickable
        label="选择课程"
        :value="value"
        placeholder="Select courses"
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

        <select class="pc-select" >
            <option value="1">11</option>
        </select>
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
      <button @click="submit" class="btn">提交</button> 
      
    </van-cell-group>
    <div class="contact-us">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    submit() {
      this.$toast('提交了所有数据');
    },
    /**
     * onConfirm 点击完成按钮时触发
     * @param value{String} 选择值
     */
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/color.less');
.msg-board {
  margin-bottom: 50px;
  .title {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #f08300;
    text-align: center;
    padding: 0 5px;
    .title-desc1 {
      font-weight: bolder;
      margin-bottom: 15px;
    }
  }
  .form {
    border-top: 1px dashed black;
    word-spacing: 25px;
    margin-top: 15px;
    .pc-select{
        display: none;
    }
    .btn {
        width: 80%;
        height:30px;
        border-radius: 20px 20px;
      margin: 10px 10vw;

      background-color: @color-brand;
      color: #fff;
    }
  }
}
@media screen and (min-width: 720px){
    .msg-board {
        width:50vw;
        margin:0 auto;
        .form{
            .select{
                display: none;
            }
            .pc-select{
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
</style>
