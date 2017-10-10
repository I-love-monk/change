<template>
  <div class="index">
    <div class="content">
      <div class="top-line">
        <div class="missionBtn">任务认领</div>
        <el-date-picker
          v-model="dateSele"
          format="yyyy年MM月dd日"
          :picker-options="pickerOptions"
          :default-value="dateToday">
        </el-date-picker>
      </div>
      <div class="table-box">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() > Date.now(); // 设置禁选未来时间
          }
        },
        dateSele: Date.now()  // 选择的时间
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .index {

  }

  .content {
  }

  .top-line {
  }

  .table-box {
  }
</style>
