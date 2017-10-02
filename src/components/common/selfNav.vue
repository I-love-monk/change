<template>
  <div class="selfNav">
    <div class="txt-line"><img src="../../assets/img/nav-txt.png"></div>
    <div class="router-line">
      <router-link class="routers" v-for="(item, index) in routerList"
                   :to="item.to" :key="index">
        {{item.info}}
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        routerList: [
          {to: '/home/home', info: '首页'},
          {to: '/home/mission', info: '任务发布'},
          {to: '/home/seller', info: '商家'},
          {to: '/home/brief', info: '简介'},
          {to: '/home/info', info: '资讯'}
        ]
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../assets/css/common.less";

  .selfNav {
    position: relative;
    width: 100%;
    height: 274px;
    background-image: url("../../assets/img/nav-bg.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 20px;
  }

  .txt-line {
    position: absolute;
    top: 80px;
    left: 500px;
  }

  .router-line {
    position: absolute;
    bottom: 29px;
    width: 100%;
    border-bottom: 3px solid @cCyan;
    display: flex;
    justify-content: center;
    .routers {
      display: inline-block;
      width: 130px;
      height: 40px;
      border: 1px solid @cCyan;
      border-bottom: none;
      border-radius: 10px 10px 0 0;
      margin: 0 12.5px;
      line-height: 40px;
      font-size: 24px;
      text-align: center;
    }
    .router-link-active {
      background-color: @cCyan;
      color: @cWhite;
    }
  }
</style>
