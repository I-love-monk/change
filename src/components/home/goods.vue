<template>
  <div class="goods">
    <self-title leftTxt="返利商品" rightTxt="更多产品&gt;&gt;"></self-title>
    <el-carousel trigger="click" height="324px" arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../../assets/img/goods-poster1.png" alt="">
        {{item}}
      </el-carousel-item>
    </el-carousel>
    <div class="img-wrap">
      <div class="col1">
        <img src="../../assets/img/goods1.png">
      </div>
      <div class="col2">
        <img src="../../assets/img/goods2.png">
        <img src="../../assets/img/goods3.png">
      </div>
      <div class="col3">
        <img src="../../assets/img/goods4.png">
        <img src="../../assets/img/goods5.png">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import selfTitle from './selfTitle.vue';
  export default {
    components: {selfTitle}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .goods {
    margin-bottom: 97px;
  }

  .img-wrap {
    width: 1200px;
    margin: 68px auto 0;
    display: flex;
    justify-content: space-between;
    .col1 {
      img {
        display: inline-block;
        width: 449px;
        height: 625px;
      }
    }
    .col2, .col3 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        display: inline-block;
        width: 256px;
        height: 256px;
      }
    }
  }
</style>
