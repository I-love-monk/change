<template>
  <div class="registerForm">
    <form>
      <el-input placeholder="placeTxt" v-model="input3">
        <template slot="prepend">{{preTxt}}</template>
      </el-input>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        formList: [
          {preTxt: '用户名', placeTxt: '您的账户名和登录名'},
          {preTxt: '设置密码', placeTxt: '您的账户名和登录名'},
          {preTxt: '确认密码', placeTxt: '您的账户名和登录名'},
          {preTxt: '手机号码', placeTxt: '您的账户名和登录名'},
          {preTxt: '验证码', placeTxt: '您的账户名和登录名'},
          {preTxt: '手机验证码', placeTxt: '您的账户名和登录名', btnTxt: '获取验证码'}
        ],
        formData: {
          username: null,
          pwd: null,
          pwd2: null,
          tel: null,
          imgCode: null,  // 图形验证码
          msgCode: null,  // 短信验证码
        }
      };
    },
    methods:{
      ajaxMsg () {
        // 获取短信验证码
        this.$http.get('http://localhost:3000/test').then(res => {
          // 成功回调
          console.log(res);
        }, err => {
          // 失败回调
          console.log(err);
        });
      },
      ajaxRegister () {
        // 注册
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
