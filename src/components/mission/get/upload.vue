<template>
  <div class="upload">
    <div class="content">
      <div class="title-line">
        <h3>任务上传/</h3>
      </div>
      <div class="info-box">
        <div class="left">
          <h3>信息上传说明：</h3>
          <ul>
            <li>1、上传的任务资料重复或有误，经核实后将作废处量，不计任务数量；</li>
            <li>2、所填写的信息要根据格式要求来填写，没有按要求填写的不予通过；</li>
            <li> 3、上传的图片不能要于1M，格式为 jpg、png、pdf；</li>
            <li> 4、上传的资料与你所认领任务区域要一致；</li>
          </ul>
        </div>
        <div class="right">
          <div class="btn" @click="$router.push('/mission/errs')">
            上传重复/有误驳回信息
          </div>
          <div class="btn" @click="$router.push('/mission/upload')">
            上传资料
          </div>
          <div class="btn" @click="$router.push('/mission/search')">
            查找上传任务
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import '../../../assets/css/common.less';

  .content {
    width: 1200px;
    margin: 0 auto 300px;
  }

  .title-line {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    h3 {
      display: inline-block;
      font-size: 24px;
      color: @cCyan;
    }
  }

  .info-box {
    display: flex;
    justify-content: space-between;
    .left {
      width: 746px;
      height: 184px;
      border-top: 1px solid @cBorder;
      font-size: 24px;
      h3 {
        margin: 10px 0;
        color: @cCyan;
      }
    }
    .right {
      width: 315px;
      .btn {
        width: 100%;
        height: 59px;
        margin-bottom: 20px;
        background-color: @cCyan;
        cursor: pointer;
        text-align: center;
        line-height: 59px;
        font-size: 24px;
        color: @cWhite;
      }
      .btn:nth-child(1) {
        background-color: @cBorder;
        color: #000;
      }
    }
  }

</style>
