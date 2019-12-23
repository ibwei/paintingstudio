<template>
  <div class="amap-page-container">
    <div :style="{ width: '100%', height: '300px' }">
      <el-amap
        vid="amap"
        :zoom="zoom"
        visible
        :plugin="plugin"
        class="amap-demo"
        :center="center"
      >
        <el-amap-marker :label="label"></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['paintingInfo'])
  },
  data() {
    return {
      zoom: 14, // 缩放比例
      label: {
        content: '品贤画室',
        offset: [20, 2]
      },
      center: [105.927043, 29.369582],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 100, // 超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, // 显示定位按钮，默认：true
          buttonPosition: 'LT', // 定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions: 'all',
          pName: 'Geolocation'
        }
      ]
    };
  },
  mounted() {
    this.center = this.paintingInfo.address_location.split(',');
  }
};
</script>

<style lang="less" scoped>
.amap-page-container {
  margin-top: 20px;
  width: 100%;
  .amap-demo {
    height: 300px;
  }
}
@media screen and (min-width: 720px) {
  .amap-page-container {
    .amap-demo {
      max-height: 450px;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
