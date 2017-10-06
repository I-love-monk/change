<template>
  <div class="info">
    <self-title leftTxt="任务说明" rightTxt="更多资料&gt;&gt;"></self-title>
    <div class="content">
      <div class="left">
        <img src="../../assets/img/info1.png">
        <p>广州号召力技术有限公司广州号召力技术有限公司广州号召力技术有限公司广州号召力技术有限公司广州号召力技术有限公司广州号召力技术有限公司</p>
      </div>
      <div class="right">
        <img src="../../assets/img/info2.png">
        <p>广州号召力技术有限公司广州号召力技术有限公司广州号召力技术有限公司广州号召力技术有限公司广州号召力技术有限公司广州号召力技术有限公司</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import selfTitle from './selfTitle.vue';
  export default {
    components: {selfTitle}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .info {
    margin-bottom: 374px;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left, .right {
      img {
        vertical-align: middle;
        width: 207px;
        height: 202px;
        margin-right: 28px;
      }
      p {
        vertical-align: middle;
        display: inline-block;
        width: 300px;
        font-size: 18px;
        line-height: 1.5em;
      }
    }
  }
</style>
