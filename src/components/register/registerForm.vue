<template>
  <div class="registerForm">
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
  import Ajax from '../../api';
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
    computed: {
      imgCodeSrc () {
        if (this.formData.phone && !this.errors.has('手机号')) {
          return 'http://api.haozhaoli510.com/authCode?mobile=' + this.formData.phone;
        } else {
          return;
        }
      }
    },
    methods: {
      getMsgCode () {
        // 获取短信验证码
        let data = {
          mobile: this.formData.phone,
          imageCode: this.formData.imgCode,
          type: '1' // 1 注册 2 积分提现 3 金币提现
        };
        Ajax.save({api: 'send_msg'}, data).then(res => {
          if (res.body.status === 200) {
          } else {
            this.$alert(res.body.msg);
          }
        }, errs => {
        });
      },
      submit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            if (this.formData.pwd === this.formData.pwd2) {
              this.ajaxRegister();  // 表单验证成功后ajax
            } else {
              this.$alert('前后设置的密码不一致', '填写错误');
            }
          } else {
            this.$alert(this.errors.all()[0], '填写错误');  // 验证失败提示
          }
        });
      },
      ajaxRegister () {
        let data = {
          check_code: this.formData.msgCode,
          mobile: this.formData.phone,
          pwd: this.formData.pwd,
          username: this.formData.username
        };
        Ajax.save({api: 'register'}, data).then(res => {
          if (res.body.status === 200) {
            this.$message({message: '注册成功', type: 'success'});
            this.$router.push('/home');
          }
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
    width: 100%;
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
      .imgCode {
        width: 5em;
        padding: 0;
        text-align: center;
      }
    }
    .submit {
      width: 100%;
      height: 64px;
      margin-bottom: 100px;
      text-align: center;
      background-color: @cCyan;
      cursor: pointer;
      line-height: 64px;
      font-size: 24px;
      color: @cWhite;
    }
  }
</style>
