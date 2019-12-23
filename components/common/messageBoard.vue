<template>
  <div class="msg-board">
    <!-- 头部文字 -->
    <v-title v-bind:initTitle="initTtile"></v-title>
    <div class="title">
      <span>请留下您的邮箱和联系方式，我们客服专员会把资料发送至您的QQ邮箱并第一时间联系您。</span>
    </div>
    <!-- 表单内容 -->
    <van-cell-group class="form">
      <van-field
        v-model="name"
        label="姓 名"
        maxlength="10"
        placeholder="请输入姓名"
        label-class="name"
        :error-message="error.name"
        required
      />
      <van-field
        v-model="phone"
        :error-message="error.phone"
        type="tel"
        label="电 话"
        maxlength="11"
        placeholder="请输入电话号码"
        required
      />
      <van-field v-model="email" label="电子邮箱" maxlength="22" placeholder="强烈建议填写您的电子邮箱 " />
      <van-field
        clickable
        required
        readonly
        label="报名课程"
        v-model="course"
        placeholder="请选择课程"
        :error-message="error.course"
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
    </van-cell-group>
    <div class="submit-area">
      <van-button class="submit" :disabled="canSubmit" @click="submit">提交</van-button>
    </div>
    <div class="contact-us"></div>
  </div>
</template>

<script>
import vTitle from '../../components/common/vTitle';
import { Api } from '@/api/index';
export default {
  components: {
    vTitle
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
      email: '',
      course: '',
      time: '',

      canSubmit: false,
      // 课程选择
      value: '',
      showPicker: false,
      error: {
        name: '',
        phone: '',
        course: '',
      },
      courses: [
        '体验课',
        '素描班',
        '短期综合班',
        '综合班',
        '色彩班',
        '油画定制课',
        '长期班',
        '国画书法班',
        '艺考基础班',
        '留学考研班',
      ]
    };
  },
  methods: {
    /**
     * submit 提交所有数据
     * @return void
     */
    submit () {
      this.error = {
        name: '',
        phone: '',
        course: '',
      }
      //表单验证
      if (!this.name) {
        this.error = { ...this.error, 'name': '这是必填项' };
        return false;
      }
      if (!/^[1]\d{10}$/.test(this.phone)) {
        this.error = { ...this.error, 'phone': '联系号码不正确' };
        return false;
      }
      if (!this.course) {
        this.error = { ...this.error, 'course': '请选择课程' };
        return false;
      }

      this.canSubmit = true;

      this.error = {
        name: '',
        phone: '',
        course: '',
      }

      this.$axios({        method: 'post', url: Api.courseEnroll, data: {
          name: this.name,
          phone: this.phone,
          course_name: this.course,
          email: this.email,
        },      }).then((res) => {
        if (res.data.resultCode === 0) {
          this.canSubmit = false;
          this.name = '';
          this.phone = '';
          this.course = '';
          this.email = '';
          this.$toast('提交成功');
        } else {
          this.canSubmit = false;
          this.$toast('报名失败,请联系画室管理员');
        }
      }).catch((e) => {
        this.canSubmit = false;
        this.$toast('网络异常!');
      })


    },
    /**
     * onConfirm 点击完成按钮时触发
     * @param value{String} 选择值
     */
    onConfirm (value) {
      this.course = value;
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
    max-width: 450px;
    margin: 0 auto;
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
.submit-area {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.submit {
  text-align: center;
  width: 100%;
  margin-top: 10px;
  max-width: 450px;
  margin: 20px auto;
  cursor: pointer;
}
@media screen and (min-width: 720px) {
  .submit-area {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .submit {
    text-align: center;
    max-width: 450px;
    margin-top: 10px;
    margin: 20px auto;
    cursor: pointer;
  }
  .msg-board {
    width: 50vw;
    margin: 0 auto;
    background: #fff;
    .form {
      margin-top: 40px;
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
</style>
