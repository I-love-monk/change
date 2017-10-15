<template>
  <div class="bank">
    <small-title txt="欢迎注册" color="#59C1D2"></small-title>
    <form>
      <inp-line placeTxt="您的账户名和登录名" v-model="formData.username"
                v-validate="'required'" name="用户名">
        <span slot="left" class="left">用户名</span>
      </inp-line>
      <inp-line placeTxt="建议至少使用两种字符组合" inpType="password"
                v-model="formData.pwd" v-validate="'required'" name="密码">
        <span slot="left" class="left">设置密码</span>
      </inp-line>
      <inp-line placeTxt="再次输入密码" inpType="password"
                v-model="formData.pwd2" v-validate="'required'" name="确认密码">
        <span slot="left" class="left">确认密码</span>
      </inp-line>
      <inp-line placeTxt="建议使用常用手机" v-model="formData.phone"
                v-validate="'required|mobile'" name="手机号">
        <span slot="left" class="left">手机号码</span>
      </inp-line>
      <inp-line placeTxt="请输入验证码" v-model="formData.imgCode"
                v-validate="'required'" name="验证码">
        <span slot="left" class="left">验证码</span>
        <img slot="right" class="right imgCode" :src="imgCodeSrc" alt="...">
      </inp-line>
      <inp-line placeTxt="手机验证码" v-model="formData.msgCode"
                v-validate="'required'" name="手机验证码">
        <span slot="left" class="left">手机验证码</span>
        <div slot="right" class="right" @click="getMsgCode">获取验证码</div>
      </inp-line>
      <div class="submit" @click="submit">立即注册</div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
