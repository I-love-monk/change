<template>
  <div class="upload">
    <div class="content">
      <div class="top-line">
        <div class="backBtn" @click="$router.go(-1)">返回</div>
      </div>
      <upload-form v-for="(item, index) in formCount"
                   v-if="item >= 0" :key="item"
                   @subtractForm="formCount.splice(index, 1)">
      </upload-form>
      <div class="btn-line">
        <div class="btns" @click="formCount.push(formCount.length)">上传添加</div>
        <div class="btns" @click="submit">确定上传</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import uploadForm from '../../components/mission/upload/uploadForm.vue';

  export default {
    components: {uploadForm},
    data () {
      return {
        formCount: [0], // 上传表单数
        formData: [] // 上传表单数据
      };
    },
    methods: {
      submit () {
        // TODO 上传数据
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../assets/css/common.less";

  .upload {
    padding-bottom: 300px;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
  }

  .top-line {
    margin: 100px 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .backBtn {
      width: 128px;
      height: 36px;
      border-radius: 10px;
      background-color: @cCyan;
      box-shadow: 4.7px 3.8px 2px 0 rgba(0, 0, 0, 0.27),
      inset 9.7px 20.8px 2px 0 rgba(89, 193, 210, 0.39);
      cursor: pointer;
      text-align: center;
      line-height: 36px;
      font-size: 24px;
      color: @cWhite;
    }
  }

  .btn-line {
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .btns {
      width: 175px;
      height: 64px;
      background-color: @cCyan;
      cursor: pointer;
      text-align: center;
      line-height: 64px;
      font-size: 24px;
      color: @cWhite;
    }
  }
</style>
