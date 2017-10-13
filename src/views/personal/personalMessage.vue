<template>
  <div class="personalMessage" style="line-height: 150%">
    <div class="content">
      <div class="message">
        会员等级：{{grade}}<br/>
        号召力账号：{{account}}<br/>
        注册时间：{{regTime}}<br/>
        真实姓名：{{realName}}<br/>
        手机号码：{{mobile}}<br/>
        身份证号：{{ide}}<br/>
        户口地址：{{homeAddress}}<br/>
        现居地址：{{address}}<br/>
      </div>
      <div class="divider"></div>
      <div class="occupation">
        职业：{{occ}}<br/>
        个人爱好：{{hobby}}<br/>
        Q Q：{{qq}}<br/>
        微信：{{wx}}<br/>
        邮箱：{{email}}<br/>
      </div>
      <div class="divider"></div>
      <div class="emergency">
        紧急联系人：{{urgent}}
        关系：{{relationship}}
        手机号码：{{reMobile}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        grade: '一级会员',
        account: 'HZL0123',
        regTime: '2017-4-10',
        realName: '李思雨',
        mobile: '13565487455',
        ide: '441212********5647',
        homeAddress: '广东省清远市清新镇中上二路106号绿地新城A16-1201',
        address: '广东省广州市',
        occ: '外企采购员',
        hobby: '打篮球、旅游',
        qq: '123456789',
        wx: '123456789',
        email: '123456789@163.com',
        urgent: '李英明',
        relationship: '姐姐',
        reMobile: '12345678901'
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .content{
    font-size: 23px;
    .message,.occupation,.emergency{
      color: #606060;
      line-height: 200%;
    }
    .divider{
      width: 100%;
      height: 1px;
      background-color: #2ca3b6;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
</style>
