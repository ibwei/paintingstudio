<template>
  <div class="footer-wrap">
    <div class="contact">
      <div class="c-one">
        <div class="phone">
          <van-icon size="20px" name="phone-circle-o" />
          <a class="tel" href="tel:18883923917">18883923917</a>
        </div>
        <div class="address">
          <van-icon size="20px" name="location-o" />重庆·沙坪坝区·大学城
          品贤画室
        </div>
      </div>
      <div class="c-two">
        <div class="copyright">COPYRIGHT © 2019</div>
        <div class="owner">版权所有：重庆品贤艺术培训中心</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
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
  padding: 40px 0;
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
