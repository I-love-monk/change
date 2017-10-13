<template>
  <div class="essential" style="line-height: 150%">
    <div class="content">
      <div class="message">
        会员等级：{{grade}}<br/>
        <span class="account">号召力账号：</span>{{account}}<br/>
        注册时间：{{regTime}}<br/>
        真实姓名：{{realName}}<br/>
        手机号码：{{mobile}}<br/>
        身份证号：{{ide}}<br/>
      </div>
      <div class="integral">
        <div class="available">可用积分：{{available}}</div>
        <div class="convertible">
          可兑换积分：{{convertible}}
          <div class="cWithdrawals" @click="cWithdrawals">提现</div>
        </div>
      </div>
      <div class="recharge">
        充值金额：{{rechargeAmount}}
        <div class="rWithdrawals" @click="rWithdrawals">提现</div>
      </div>
      <div class="bankBox">
        <div class="bank">银行账号：{{ide}}</div>
        <div class="bankOption">绑定 | 解绑</div>
      </div>
      <div class="optionBox">
        <div class="optionContent">
          <div class="recharge">充  值</div>
          <div class="transferAccounts">转  账</div>
        </div>
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
        available: '李英明',
        convertible: '800',
        rechargeAmount: '10000'
      };
    },
    methods: {
      cWithdrawals () {
        // TODO 提现
      },
      rWithdrawals () {
        // TODO 提现
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../assets/css/common.less";
.content{
  font-size: 23px;
  color: #606060;
  .message{
    line-height: 200%;
    .account{
      font-size: 19px;
    }
  }
  .integral{
    display: flex;
    margin-top: 5px;
    margin-bottom: 15px;
    align-items: center;
    .available{
      margin-right: 50px;
    }
    .convertible{
      display: flex;
      align-items: center;
      .cWithdrawals{
        margin-left: 20px;
        background-color: @cCyan;
        padding: 10px 20px;
        color: @cWhite;
        cursor: pointer;
      }
    }
  }
  .bankBox{
    display: flex;
    margin-top: 20px;
    .bank{
      margin-right: 50px;
    }
  }
  .recharge{
    display: flex;
    align-items: center;
    .rWithdrawals{
      margin-left: 20px;
      background-color: @cCyan;
      padding: 10px 20px;
      color: @cWhite;
      cursor: pointer;
    }
  }

  .optionBox{
    width: 100%;
    margin-top: 80px;
    .optionContent{
      display: flex;
      margin: 0 auto;
    }
    .recharge,.transferAccounts{
      color: white;
      padding: 23px 100px;
      margin: 10px;
      background-color: @cCyan;
    }
  }
}
</style>
