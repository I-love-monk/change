<template>
  <div class="life">
    <self-title leftTxt="高端商品" rightTxt="更多产品&gt;&gt;"></self-title>
    <div class="img-wrap">
      <div class="img-line1"><img src="../../assets/img/life1.png"></div>
      <div class="img-line2">
        <div class="col1">
          <img src="../../assets/img/life2.png">
          <img src="../../assets/img/life3.png">
        </div>
        <div class="col2">
          <img src="../../assets/img/life4.png">
        </div>
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
  .life {
    margin-bottom: 66px;
  }

  .img-wrap {
    width: 1200px;
    margin: 0 auto;
    .img-line1 {
      margin-bottom: 24px;
      img {
        width: 1200px;
        height: 199px;
      }
    }
    .img-line2 {
      display: flex;
      justify-content: space-between;
      .col1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
          display: inline-block;
          width: 500px;
          height: 254px;
        }
      }
      .col2 {
        img {
          width: 569px;
          height: 572px;
        }
      }
    }
  }
</style>
