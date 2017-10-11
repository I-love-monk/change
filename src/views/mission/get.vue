<template>
  <div class="get">
    <div class="content">
      <table-choose></table-choose>
      <table-complete></table-complete>
      <upload></upload>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import tableChoose from '../../components/mission/get/tableChoose.vue';
  import tableComplete from '../../components/mission/get/tableComplete.vue';
  import upload from '../../components/mission/get/upload.vue';

  export default {
    components: {tableChoose, tableComplete, upload},
    data () {
      return {
        pickerOptions: {
          dateSele: Date.now(),  // 选择的时间
          disabledDate (time) {
            return time.getTime() > Date.now(); // 设置禁选未来时间
          }
        }
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .get {
  }
</style>
