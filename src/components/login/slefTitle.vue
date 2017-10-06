<template>
  <!--登录页面用的-->
  <div class="selfTitle">
    <div class="line"></div>
    <div class="txt"></div>
    <div class="line"></div>
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
  .selfTitle {
    display: flex;
    align-items: center;
    .line {
      flex: 1;
      height: 1px;
    }
    .txt {

    }
  }

</style>
