<template>
  <div class="footer-wrap">
    <div class="contact">
      <div class="c-one">
        <div class="address">成都：{{ paintingInfo.address }}</div>
        <div class="phone">
          <a class="tel" :href="phoneUrl"
            >电话(微信)：{{ paintingInfo.phone }}</a
          >
        </div>
        <div class="address">
          西安:雁塔区小寨街道含光南路与丁白路交叉口 <br />美苑楼尚17楼1732
        </div>
        <div class="phone">
          <a class="tel" :href="phoneUrl">电话(微信):17316670635</a>
        </div>
      </div>
      <div class="c-two">
        <div class="copyright">COPYRIGHT © 2021</div>
        <div class="owner">版权所有：{{ paintingInfo.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    paintingInfo: {
      type: Object,
      default() {
        return {
          address: '重庆·沙坪坝区·大学城'
        }
      }
    }
  },
  data() {
    return {
      phoneUrl: ''
    }
  },
  computed: {},
  created() {
    if (process.client) {
      this.phoneUrl = `tel:${this.paintingInfo.phone}`
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="less">
@import url('../../assets/css/color.less');
.footer-wrap {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  margin-bottom: 0px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;

  height: auto;
}
.logo-image {
  max-width: 400px;
  height: auto;
  margin: 60px 0;
}
.contact {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: @color-bg-base;
  width: 100%;
  padding: 20px 0;
  line-height: 2;
}
.c-one,
.c-two {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.address,
.phone {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.tel {
  text-decoration: underline;
}

@media screen and (max-width: 720px) {
  .footer-wrap {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #fff;
    margin-bottom: 40px;
  }
  .c-one,
  .c-two {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-image {
    max-width: 60%;
    height: auto;
    margin: 20px 0;
  }
  .contact {
    padding: 20px 0;
    margin-bottom: 0;
  }
}
</style>
