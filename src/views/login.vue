<template>
  <div class="login">
    <!--<self-head></self-head>-->
    <!--<self-nav></self-nav>-->
    <div class="content">
      <div class="left">
        <div class="img-line1">
          <img src=""><img src="">
        </div>
        <div class="img-line2">
          <img src=""><img src="">
        </div>
      </div>
      <div class="right">
        <small-title txt="账户登录"></small-title>
        <login-form></login-form>
        <div class="register">
          <router-link class="router" to="/register">新用户注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import selfHead from '../components/common/selfHead.vue';
  import selfNav from '../components/common/selfNav.vue';
  import smallTitle from '../components/common/smallTitle.vue';
  import loginForm from '../components/login/loginForm.vue';
  export default {
    components: {selfHead, selfNav, smallTitle, loginForm}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../assets/css/common.less";

  .login {
    width: 100%;
    // background: linear-gradient(to right, @cCyan, #67eeff);
    background-color: @cCyan;
  }

  .content {
    width: 1200px;
    padding: 30px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .left {
    width: 400px;
  }

  .right {
    width: 400px;
    .register {
      width: 200px;
      padding-top: 10px;
      border-top: 1px solid @cWhite;
      margin: 10px auto 0;
      text-align: center;
      .router {
        color: @cWhite;
      }
    }
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
