<template>
  <div class="register">
    <small-title txt="欢迎注册" color="#59C1D2"></small-title>
    <register-form></register-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import smallTitle from '../components/common/smallTitle.vue';
  import registerForm from '../components/register/registerForm.vue';
  export default {
    components: {smallTitle, registerForm}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .register {
    width: 585px;
    margin: 40px auto 0;
  }
  .smallTitle{
    margin-bottom: 40px;
  }
</style>
