<template>
  <div class="login">
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
        <login-form></login-form>
        <div class="register">
          <router-link class="router" to="/register">新用户注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import loginForm from '../components/login/loginForm.vue';
  export default {
    components: {loginForm}
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
