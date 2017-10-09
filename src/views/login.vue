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
