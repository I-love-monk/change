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
          <el-table-column prop="province" label="省份">
            <template scope="scope">
              <el-button
                v-if="scope.$index === 0"
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text">
                移除
              </el-button>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="市">
          </el-table-column>
          <el-table-column prop="area" label="区（县）级">
          </el-table-column>
          <el-table-column prop="address" label="详细地址">
          </el-table-column>
          <el-table-column prop="total" label="发布总数">
          </el-table-column>
          <el-table-column prop="claimed" label="已认领">
          </el-table-column>
          <el-table-column prop="unclaimed" label="未认领">
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
        dateSele: Date.now(),  // 选择的时间
        tableData: [
          {
            city: '123',
            area: '123',
            address: '123',
            total: '123',
            claimed: '123',
            unclaimed: '123'
          },
          {
            city: '456',
            area: '456',
            address: '456',
            total: '456',
            claimed: '456',
            unclaimed: '456'
          }
        ]
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
