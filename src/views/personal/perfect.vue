<template>
  <div class="perfect" style="line-height: 150%">
    <div class="content">
      <div class="message">
        会员等级：{{grade}}<br/>
        号召力账号：{{account}}<br/>
        注册时间：{{regTime}}<br/>
        真实姓名：{{realName}}<br/>
        手机号码：{{mobile}}<br/>
        身份证号：{{ide}}<br/>
        户口地址：{{homeAddress}}<br/>
      </div>
      <inp-line placeTxt=""
                v-model="formData.address"
                v-validate="'required'" name="现居住地"
                :class="{danger: errors.has('现居住地')}">
        <div slot="left" class="inp-left">现居住地：</div>
      </inp-line>

      <div class="occupation">
        <inp-line placeTxt=""
                  v-model="formData.occ"
                  v-validate="'required'" name="职业"
                  :class="{danger: errors.has('职业')}">
          <div slot="left" class="inp-left">职业：</div>
        </inp-line>
        <inp-line placeTxt=""
                  v-model="formData.hobby"
                  v-validate="'required'" name="个人爱好"
                  :class="{danger: errors.has('个人爱好')}">
          <div slot="left" class="inp-left">个人爱好：</div>
        </inp-line>
        <inp-line placeTxt=""
                  v-model="formData.qq"
                  v-validate="'required'" name="QQ"
                  :class="{danger: errors.has('QQ')}">
          <div slot="left" class="inp-left">QQ：</div>
        </inp-line>
        <inp-line placeTxt=""
                  v-model="formData.wx"
                  v-validate="'required'" name="微信"
                  :class="{danger: errors.has('微信')}">
          <div slot="left" class="inp-left">微信：</div>
        </inp-line>
        <inp-line placeTxt=""
                  v-model="formData.email"
                  v-validate="'required'" name="邮箱"
                  :class="{danger: errors.has('邮箱')}">
          <div slot="left" class="inp-left">邮箱：</div>
        </inp-line>
      </div>
      <div class="emergency">
        紧急联系人：{{urgent}}
        关系：{{relationship}}
        手机号码：{{reMobile}}
      </div>
      <div class="optionBox">
        <div class="recharge">取 消</div>
        <div class="transferAccounts">确 认</div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import inpLine from '../../components/common/inpLine.vue';
  export default {
    components: {inpLine},
    data () {
      return {
        formData: {
          address: null, // 现居住地
          occ: null,  // 职业
          hobby: null,  // 个人爱好
          qq: null, // QQ
          wx: null, // 微信
          email: null // 邮箱
        },
        grade: '一级会员',
        account: 'HZL0123',
        regTime: '2017-4-10',
        realName: '李思雨',
        mobile: '13565487455',
        ide: '441212********5647',
        homeAddress: '广东省清远市清新镇中上二路106号绿地新城A16-1201',
        urgent: '李英明',
        relationship: '姐姐',
        reMobile: '12345678901'
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../assets/css/common.less";
  .content{
    font-size: 23px;
    .message,.occupation,.emergency{
      color: #606060;
      line-height: 200%;
    }
    .occupation,.emergency{
      margin-top: 50px;
    }
    .inp-left{
      padding-left: 20px;
      padding-right: 20px;
    }
    .optionBox{
      width: 100%;
      margin-top: 80px;
      margin-bottom: 100px;
      display: flex;
      .recharge,.transferAccounts{
        color: white;
        padding: 23px 100px;
        margin: 10px;
        background-color: @cGray;
      }
      .transferAccounts{
        background-color: @cCyan;
      }
    }
    .danger {
      border: 1px solid red;
    }
  }

</style>
