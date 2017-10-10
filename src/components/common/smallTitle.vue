<template>
  <!--登录、注册使用-->
  <div class="smallTitle">
    <i class="bar" :style="{backgroundColor: color}"></i>
    <div class="txt" :style="{color: color}">{{txt}}</div>
    <i class="bar" :style="{backgroundColor: color}"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      txt: {type: String},
      color: {
        type: String,
        default: '#E5E5E5'
      }
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
    }
    .txt {
      margin: 0 15px;
      font-size: 24px;
    }
  }

</style>
