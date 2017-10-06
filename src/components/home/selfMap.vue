<template>
  <div class="selfMap">
    <div class="content">
      <div class="title-box">
        <div class="title-line">市场更新分布图</div>
        <div class="txt">
          <i class="point red"></i>已开放市场
        </div>
        <div class="txt">
          <i class="point"></i><span class="grey-txt">未开放市场</span>
        </div>
      </div>
      <img src="../../assets/img/map.png" alt="" class="map">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../assets/css/common.less";

  .selfMap {
  }

  .content {
    position: relative;
    width: 1200px;
    height: 954px;
    margin: 0 auto;
  }

  .title-box {
    position: absolute;
    top: 71px;
    .title-line {
      width: 281px;
      height: 48px;
      padding-left: 18px;
      border-radius: 10px;
      margin-bottom: 26px;
      background: url("../../assets/img/map-title.png") no-repeat;
      background-size: cover;
      line-height: 48px;
      font-size: 24px;
      color: @cWhite;
    }
    .txt {
      margin-bottom: 18px;
      font-size: 18px;
      .point {
        display: inline-block;
        vertical-align: middle;
        width: 17px;
        height: 18px;
        border-radius: 7px;
        background-color: #E5E5E5;
        margin-right: 4px;
      }
      .red {
        background-color: #F00;
      }
      .grey-txt {
        color: #E5E5E5;
      }
    }
  }

  .map {
    position: absolute;
    top: 71px;
    left: 50%;
    transform: translateX(-50%);
    width: 950px;
    height: 784px;
  }
</style>
