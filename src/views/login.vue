<template>
  <div class="login">
    <div class="content">
      <div class="left">
        <div class="img-line1">
          <img src="../assets/img/goods6.png"><img src="../assets/img/goods7.png">
        </div>
        <div class="img-line2">
          <img src="../assets/img/goods8.png"><img src="../assets/img/goods9.png">
        </div>
      </div>
      <div class="right">
        <small-title txt="账户登录" color="#fff"></small-title>
        <login-form></login-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import smallTitle from '../components/common/smallTitle.vue';
  import loginForm from '../components/login/loginForm.vue';
  export default {
    components: {smallTitle, loginForm}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../assets/css/common.less";

  .login {
    width: 100%;
    background-color: @cCyan;
  }

  .content {
    width: 1050px;
    padding: 30px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .left {
    width: 539px;
    height: 462px;
    display: flex;
    justify-content: space-between;
    .img-line1, .img-line2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        display: inline-block;
      }
    }
  }

  .right {
    width: 432px;
  }

  .smallTitle {
    margin-bottom: 40px;
  }
</style>
