<template>
  <div class="login">
    <self-head></self-head>
    <self-nav></self-nav>
    <div class="content">
      <div class="left">
        <div class="img-line1">
          <img src="" alt=""><img src="" alt="">
        </div>
        <div class="img-line2">
          <img src="" alt=""><img src="" alt="">
        </div>
      </div>
      <div class="right">
        <!--<self-title txt="用户登录"></self-title>-->
        <form>
          <input type="text" class="username" placeholder="用户名">
          <input type="password" class="pwd" placeholder="密码">
        </form>
        <div class="check-box">
          <label><input type="checkbox">自动登录</label>
          <label><input type="checkbox">显示密码</label>
          <label><input type="checkbox">隐藏密码</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import selfHead from '../components/common/selfHead.vue';
  import selfNav from '../components/common/selfNav.vue';
  export default {
    components: {selfHead, selfNav}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../assets/css/common.less";

  .login {
    width: 100%;
    height: 300px;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
    background: linear-gradient(to right, @cCyan, #67eeff);
    display: flex;
    justify-content: space-between;
  }

  .left {
    width: 500px;
  }

  .right {
    width: 500px;
  }

  form {
    .username, .pwd {
      display: block;
    }
  }

  .check-box {
    label {

    }
    input[type="checkbox"] {
      vertical-align: middle;
    }
  }
</style>
