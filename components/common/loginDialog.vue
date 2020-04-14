<template>
  <div class="login-dialog">
    <van-dialog
      v-model="show"
      overlay-class="login-dialog"
      :get-container="getContainer"
      :closeable="true"
      :show-confirm-button="false"
      :lock-scroll="true"
      style="padding:10px;padding-top:20px;"
      :show-error-message="false"
      :title="loginDialogType === 'login' ? '登录' : '注册'"
    >
      <van-icon
        name="cross"
        style="position:absolute;top:20px;right:20px;"
        size="20px"
        @click="closeLoginDialog"
      />
      <van-divider />
      <van-form @submit="onSubmit" style="margin-top:20px;">
        <van-field
          v-model="username"
          name="用户名"
          required
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="phone"
          name="电话"
          v-if="loginDialogType === 'register'"
          required
          label="电话号码"
          placeholder="请输入电话号码"
          :rules="
            loginDialogType === 'login'
              ? null
              : [{ required: true, message: '请填写电话号码' }]
          "
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          required
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-if="loginDialogType === 'register'"
          v-model="email"
          name="邮箱"
          label="邮箱"
          placeholder="请输入电子邮箱"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            {{ loginDialogType === 'login' ? '登录' : '注册' }}
          </van-button>
        </div>
        <div style="margin: 16px;">
          <van-button
            round
            block
            hairline
            type="default"
            @click="switchOrClose"
            native-type="button"
          >
            {{ loginDialogType === 'login' ? '去注册' : '去登陆' }}
          </van-button>
        </div>
      </van-form>
    </van-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { Api } from '@/api/index';
export default {
  data() {
    return {
      username: 'baiwei',
      password: 'admin',
      email: '',
      phone: '',
      show: false
    };
  },
  computed: {
    ...mapState(['loginDialogType', 'loginDialogShow'])
  },
  watch: {
    loginDialogShow(newV) {
      this.show = newV;
    }
  },
  methods: {
    ...mapMutations([
      'changeLoginDialogShow',
      'changeLoginDialogType',
      'changeUser',
      'changeIsLoin'
    ]),
    getContainer() {
      return document.getElementsByTagName('body')[0];
    },
    async onSubmit() {
      const result = await this.$axios({
        method: 'post',
        url:
          this.loginDialogType === 'login' ? Api.userLogin : Api.userRegister,
        data: {
          username: this.username,
          password: this.password,
          type: 0,
          email: this.email,
          phone: this.phone
        }
      });
      if (result.data.resultCode === 0) {
        localStorage.setItem('token', result.data.data.token);
        this.changeUser(result.data.data.user);
        this.changeIsLoin(true);
        if (this.loginDialogType === 'login') {
          this.$toast.success('登录成功');
        } else {
          this.$toast.success('注册成功并已自动登录');
        }
        this.closeLoginDialog();
      } else {
        this.$toast.fail(result.data.resultMessage);
      }
    },
    closeLoginDialog() {
      this.changeLoginDialogShow(false);
    },
    switchOrClose() {
      if (this.loginDialogType === 'login') {
        this.changeLoginDialogType('register');
      } else {
        this.changeLoginDialogType('login');
      }
      return false;
    }
  }
};
</script>

<style lang="less" scoped></style>
