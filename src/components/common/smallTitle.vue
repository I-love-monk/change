<template>
  <!--登录页面用的-->
  <div class="smallTitle">
    <i class="bar"></i>
    <div class="txt">{{txt}}</div>
    <i class="bar"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      txt: {type: String}
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import '../../assets/css/common.less';

  .smallTitle {
    display: flex;
    align-items: center;
    .bar {
      display: inline-block;
      flex: 1;
      height: 1px;
      background-color: @cBorder;
    }
    .txt {
      margin: 0 15px;
      font-size: 24px;
      color: @cWhite;
    }
  }

</style>
