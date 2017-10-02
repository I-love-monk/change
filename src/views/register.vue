<template>
  <div class="register">
    <self-head></self-head>
    <self-nav></self-nav>
    <register-form></register-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import selfHead from '../components/common/selfHead.vue';
  import selfNav from '../components/common/selfNav.vue';
  import registerForm from '../components/register/registerForm.vue';
  export default {
    components: {selfHead, selfNav,registerForm}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .register {

  }
</style>
