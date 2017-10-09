<template>
  <div class="aMap">
    <div id="container" tabindex="0"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import AMap from 'AMap';
  export default {
    mounted () {
      this.initMap();
      this.initMarker();
    },
    data () {
      return {
        map: null, // 地图实例
        marker: null  // 标记
      };
    },
    methods: {
      initMap () {
        this.map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 17,
          center: [113.40780, 23.05765]
        }); // 创建地图
      },
      initMarker () {
        this.marker = new AMap.Marker({map: this.map});
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .aMap {

  }

  #container {
    width: 800px;
    height: 600px;
  }
</style>
