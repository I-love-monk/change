<template>
  <input type="text" :placeholder="'最多' + max" class="selfInp" v-model.lazy="val">
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      max: {
        type: Number, // 期望数字
        required: true
      }
    },
    data () {
      return {
        val: null
      };
    },
    watch: {
      val (newVal) {
        this.$nextTick(() => {
          if (newVal > this.max) {
            this.val = this.max;
          } else {
            this.val = newVal - newVal % 100; // 100的整数倍
          }
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
