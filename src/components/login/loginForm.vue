<template>
  <div class="loginForm">
    <form>
      <input type="text" class="username" placeholder="用户名"
             v-model="form.username" v-validate="'required'" name="用户名">
      <input type="password" class="pwd" placeholder="密码"
             v-model="form.pwd" v-validate="'required'" name="密码">
    </form>
    <div class="check-box">
      <label><input type="checkbox">自动登录</label>
      <!--<label><input type="checkbox">显示密码</label>-->
      <!--<label><input type="checkbox">隐藏密码</label>-->
    </div>
    <div class="forgetPwd-line">
      <router-link class="forgetPwd" to="/forgetPwd">忘记密码？</router-link>
    </div>
    <div class="submit">确定登录</div>
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
  @import "../../assets/css/common.less";

  .loginForm {
    margin-top: 15px;
  }

  form {
    .username, .pwd {
      display: inline-block;
      width: 100%;
      height: 48px;
      padding: 0 10px;
      border: 1px solid @cBorder;
      border-radius: 2px;
      margin-bottom: 18px;
      background-color: @cCyan;
      line-height: 48px;
      font-size: 20px;
      // placeholder处理
      &::-webkit-input-placeholder {
        color: @cWhite;
      }
      &:-moz-placeholder {
        color: @cWhite;
      }
      &::-moz-placeholder {
        color: @cWhite;
      }
      &:-ms-input-placeholder {
        color: @cWhite;
      }
    }
  }

  .check-box {
    color: @cWhite;
    label {
      vertical-align: middle;
    }
    input {
      vertical-align: middle;
    }
  }

  .forgetPwd-line {
    text-align: right;
    .forgetPwd {
      color: @cWhite;
    }
  }

  .submit {
    width: 100%;
    height: 48px;
    margin-top: 30px;
    background-color: @cBorder;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
  }
</style>
