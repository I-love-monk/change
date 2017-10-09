<template>
  <div class="loginForm">
    <form>
      <input type="text" class="username" placeholder="用户名"
             v-validate="'required'" name="用户名">
      <input type="password" class="pwd" placeholder="密码"
             v-validate="'required'" name="密码">
    </form>
    <div class="check-box">
      <label><input type="checkbox">自动登录</label>
      <label><input type="checkbox">显示密码</label>
      <label><input type="checkbox">隐藏密码</label>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        form: {
          username: null,
          pwd: null
        }
      };
    },
    methods: {
      ajaxLogin () {
        // 登录
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
