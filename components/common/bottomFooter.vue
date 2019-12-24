<template>
  <div class="footer-wrap">
    <div class="contact">
      <div class="c-one">
        <div class="phone">
          <van-icon size="20px" name="phone-circle-o" />
          <a class="tel" :href="phoneUrl">{{ paintingInfo.phone }}</a>
        </div>
        <div class="address">
          <van-icon size="20px" name="location-o" />{{ paintingInfo.address }}
        </div>
      </div>
      <div class="c-two">
        <div class="copyright">COPYRIGHT © 2019</div>
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
        };
      }
    }
  },
  data() {
    return {
      phoneUrl: ''
    };
  },
  computed: {},
  created() {
    if (process.client) {
      console.log(this.paintingInfo);
      this.phoneUrl = `tel:${this.paintingInfo.phone}`;
    }
  },
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
