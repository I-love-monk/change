<template>
  <input type="text" placeholder="100的整数倍" class="selfInp" v-model.lazy="val">
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        val: null
      };
    },
    watch: {
      val (newVal) {
        this.$nextTick(() => {
          this.val = newVal - newVal % 100;
        });
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .selfInp {
    width: 80px;
  }
</style>
