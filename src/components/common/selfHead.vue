<template>
  <div class="selfHead">
    <div class="right">
      <div class="content-line">
        <div class="txt">你好，</div>
        <router-link class="login" to="login">请登陆</router-link>
        <router-link class="register" to="register">免费注册</router-link>
        <i class="line"></i>
        <router-link to="">我的订单</router-link>
        <i class="line"></i>
        <router-link to="">客户服务</router-link>
      </div>
      <div class="tel-line">
        <i class="line"></i>招商热线：0000000
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import '../../assets/css/common.less';

  .selfHead {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
    margin: 0 auto 0;
    display: flex;
    flex-direction: row-reverse;
  }

  .right {
  }

  .content-line {
    width: 437px;
    height: 46px;
    padding: 6px 28px 0px;
    border: solid 1px @cCyan;
    border-top: none;
    border-radius: 0 0 10px 10px;
    box-shadow: 0.5px 0.9px 1px 0px #035C6B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: @cLight;
    .login, .register {
      color: @cCyan;
    }
    .line {
      display: inline-block;
      width: 1px;
      height: 18px;
      background-color: @cLight;
    }
  }

  .tel-line {
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-top: 37px;
    .line {
      display: inline-block;
      width: 2px;
      height: 22px;
      margin-right: 3px;
      background-color: @cLight;
    }
  }

</style>
