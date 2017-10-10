<template>
  <div class="loginForm">
    <form>
      <input type="text" class="username" placeholder="用户名"
             v-model="formData.username"
             v-validate="'required'" name="用户名">
      <input type="password" class="pwd" placeholder="密码"
             v-model="formData.pwd"
             v-validate="'required'" name="密码">
    </form>
    <div class="check-box">
      <label><input type="checkbox">自动登录</label>
      <label><input type="checkbox">显示密码</label>
    </div>
    <div class="forgetPwd-line">
      <router-link to="/forgetPwd" tag="span" class="forgetPwd">
        忘记密码？
      </router-link>
    </div>
    <div class="routers-box">
      <div class="btn login" @click="login">确定登录</div>
      <router-link to="/register" tag="div" class="btn register">
        新用户注册
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Ajax from '../../api';

  export default {
    data () {
      return {
        formData: {
          username: null,
          pwd: null
        }
      };
    },
    methods: {
      login () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.ajaxLogin();  // 表单验证成功后ajax
          } else {
            this.$alert(this.errors.all()[0], '填写错误');  // 验证失败提示
          }
        });
      },
      ajaxLogin () {
        let data = {
          username: this.formData.username,
          pwd: this.formData.pwd
        };
        Ajax.save({api: 'login'}, data).then(res => {
          if (res.body.status === 200) {
              // TODO 登录成功
          } else {
            this.$alert(res.body.msg);
          }
        }, errs => {
          // error callback
        });
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import '../../assets/css/common.less';

  .loginForm {
    width: 100%;
  }

  form {
    .username, .pwd {
      display: block;
      width: 100%;
      height: 64px;
      padding: 0 1em;
      border: 1px solid @cWhite;
      margin-bottom: 20px;
      background-color: @cCyan;
      font-size: 24px;
      color: @cWhite;
    }
  }

  .check-box {
    label {
      margin-right: 10px;
      font-size: 18px;
      color: @cWhite;
    }
    input[type="checkbox"] {
      vertical-align: middle;
    }
  }

  .forgetPwd-line {
    span {
      float: right;
      cursor: pointer;
      font-size: 18px;
      color: @cWhite;
    }
  }

  .routers-box {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .btn {
      width: 185px;
      height: 54px;
      cursor: pointer;
      text-align: center;
      line-height: 54px;
      font-size: 24px;
      font-weight: bold;
    }
    .login {
      background-color: @cBorder;
      color: @cDarkCyan;
    }
    .register {
      background-color: @cDarkCyan;
      color: @cBorder;
    }
  }
</style>
