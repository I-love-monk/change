<template>
  <div class="registerForm">
    <form>
      <inp-line placeTxt="您的账户名和登录名" v-model="formData.username"
                v-validate="'required'" name="用户名">
        <span slot="left" class="left">用户名</span>
      </inp-line>
      <inp-line placeTxt="建议至少使用两种字符组合" v-model="formData.pwd"
                v-validate="'required'" name="密码">
        <span slot="left" class="left">设置密码</span>
      </inp-line>
      <inp-line placeTxt="再次输入密码" v-model="formData.pwd2"
                v-validate="'required'" name="密码">
        <span slot="left" class="left">确认密码</span>
      </inp-line>
      <inp-line placeTxt="建议使用常用手机" v-model="formData.phone"
                v-validate="'required|mobile'" name="手机号">
        <span slot="left" class="left">手机号码</span>
      </inp-line>
      <inp-line placeTxt="请输入验证码" v-model="formData.imgCode"
                v-validate="'required|mobile'" name="验证码">
        <span slot="left" class="left">验证码</span>
        <img slot="right" class="right" src="" alt="获取失败" @click="getImgCode">
      </inp-line>
      <inp-line placeTxt="手机验证码" v-model="formData.msgCode"
                v-validate="'required|mobile'" name="手机验证码">
        <span slot="left" class="left">手机验证码</span>
        <div slot="right" class="right" @click="getMsgCode">获取验证码</div>
      </inp-line>
      <div class="submit" @click="submit">立即注册</div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import inpLine from '../common/inpLine.vue';

  export default {
    components: {inpLine},
    data () {
      return {
        formData: {
          username: null,
          pwd: null,
          pwd2: null,
          phone: null,
          imgCode: null,  // 图形验证码
          msgCode: null
        }
      };
    },
    methods: {
      getImgCode () {
        // TODO 获取图形验证码
      },
      getMsgCode () {
        // TODO 获取短信验证码
      },
      submit () {
        console.log(12);
        this.checkForm() && this.ajaxRegister();
      },
      checkForm () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            return result;
          } else {
            this.$alert(this.errors.all()[0], '填写错误');
            return result;
          }
        });
      },
      ajaxRegister () {
        // TODO 注册
        this.$http.get('/someUrl').then(res => {
          // get body data
          res.body;
        }, errs => {
          // error callback
        });
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../assets/css/common.less";

  .registerForm {

  }

  form {
    width: 585px;
    margin: 0 auto;
    .inp-line {
      .left {
        box-sizing: border-box;
        width: 155px;
        padding: 0 20px;
        text-align-last: justify;
      }
      .right {
        padding: 0 10px;
        border-left: 1px solid #959595;
        cursor: pointer;
      }
    }
    .submit {
      width: 100%;
      height: 64px;
      text-align: center;
      background-color: @cCyan;
      cursor: pointer;
      line-height: 64px;
      font-size: 24px;
      color: @cWhite;
    }
  }
</style>
