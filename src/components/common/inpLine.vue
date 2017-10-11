<template>
  <div class="inp-line">
    <slot name="left"></slot>
    <!--文本inp-->
    <input :type="inpType" :placeholder="placeTxt" :value="value" @input="updateValue($event.target.value)">
    <slot name="right"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      placeTxt: {
        type: String,
        default: ''
      },
      inpType: {
        type: String,
        default: 'text'
      },
      value: {}
    },
    methods: {
      updateValue (value) {
        var formattedValue = value;
        // 通过 input 事件发出数值
        this.$emit('input', formattedValue);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .inp-line {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 64px;
    border: 1px solid #959595;
    margin-bottom: 20px;
    overflow: hidden;
    line-height: 64px;
    font-size: 24px;
  }

  input {
    display: inline-block;
    width: 10px;
    flex: 1 1 10px;
    height: 64px;
    border: none;
    padding-left: 5px;
    font-size: 24px;
  }
</style>
