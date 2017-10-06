<template>
  <!--主页用的-->
  <div class="selfTitle">
    <div class="title-line">
      <div class="left">{{leftTxt}}</div>
      <div class="right">{{rightTxt}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      leftTxt: {
        type: String
      },
      rightTxt: {
        type: String
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../assets/css/common.less";

  .selfTitle {
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 31px;
  }

  .title-line {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .left {
      width: 130px;
      height: 39px;
      border-radius: 10px 10px 0 0;
      background-color: @cCyan;
      line-height: 39px;
      font-size: 24px;
      text-align: center;
      color: @cWhite;
    }
    .right {
      font-size: 21px;
      color: #C8C8C8;
    }
  }

</style>
