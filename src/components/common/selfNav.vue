<template>
  <div class="selfNav">
    <img src="../../assets/img/nav-bg.png" alt="" class="bg">
    <div class="tel-line">
      <i class="line"></i>招商热线：0000000
    </div>
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
          {to: '/home', info: '首页'},
          {to: '/mission', info: '任务发布'},
          {to: '/seller', info: '商家'},
          {to: '/brief', info: '简介'},
          {to: '/info', info: '资讯'}
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
    overflow: hidden;
  }

  .bg {
    width: 1920px;
    height: 274px;
  }

  .tel-line {
    position: absolute;
    top: 75px;
    left: 1095px;
    min-width: 250px;
    display: flex;
    align-items: center;
    font-size: 24px;
    .line {
      display: inline-block;
      width: 2px;
      height: 22px;
      margin-right: 3px;
      background-color: @cLight;
    }
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
