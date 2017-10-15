<template>
  <div class="tableComplete">
    <div class="content">
      <div class="table-box">
        <div class="title-line">
          <h3>任务完成情况/<label>*会员需完成单项提交任务的数量才可兑换同等金额，如单项没有完成的需完成后才可兑换</label></h3>
          <span>更多&gt;&gt;</span>
        </div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="province" label="省份" width="100">
            <template scope="scope">
              <el-dropdown v-if="scope.$index === 0" @command="seleProvince">
                <span class="el-dropdown-link">
                  {{provinceSele}}
                  <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(item, index) in provinceList"
                                    :command="item" :key="index">
                    {{item}}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="市" width="80">
          </el-table-column>
          <el-table-column prop="area" label="区（县）级">
          </el-table-column>
          <el-table-column prop="address" label="详细地址">
          </el-table-column>
          <el-table-column prop="total" label="发布总数" width="120">
          </el-table-column>
          <el-table-column prop="claimed" label="认领数量" width="120">
          </el-table-column>
          <el-table-column prop="completed" label="完成数量" width="120">
          </el-table-column>
          <el-table-column prop="get" label="操作" width="120">
            <template scope="scope">
              <el-button v-if="scope.row.city" type="text"
                         @click="getCash(scope)"
                         :disabled="scope.row.claimed !== scope.row.completed">
                提现
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Ajax from '@/api';

  export default {
    mounted () {
      this.ajaxGetProList();  // 初始化省级列表
      this.ajaxPersonTasks(); // 初始化当前省个人完成情况
    },
    data () {
      return {
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() > Date.now(); // 设置禁选未来时间
          }
        },
        dateSele: Date.now(),  // 选择的时间
        provinceSele: '广东省',  // 选择的省
        tableData: [
          {
            city: '暂无',
            area: '暂无',
            address: '暂无',
            total: '暂无',  // 总数
            claimed: '暂无',  // 认领
            completed: '暂无' // 完成数
            // pk: 0 // 任务ID
          }
        ],
        provinceList: []  // 省级列表
      };
    },
    methods: {
      methods: {
        seleProvince (val) {
          // 选择省级，刷新列表
          this.provinceSele = val;
          this.ajaxPostTasks();
        },
        getCash (scope) {
          // 提现
          // TODO this.ajaxCash();
        },
        ajaxGetProList () {
          // 省级列表
          Ajax.get({api: 'get_task_province'}).then(res => {
            this.provinceList = res.body.province_list;
          });
        },
        ajaxPersonTasks () {
          // 获取当前省个人完成情况
          let data = {province: this.provinceSele};
          Ajax.save({api: 'show_tasks'}, data).then(res => {
            let data = res.body.list;
            this.tableData = [{}];  // 清空
            data.forEach((val, index) => {
              let addressList = val.fields.address.split('-');
              if (!this.tableData[index]) this.tableData.push({});
              [this.tableData[index].city,
                this.tableData[index].area,
                this.tableData[index].address] = [
                addressList[1],
                addressList[2],
                addressList[3]];
              // TODO this.tableData[index].total = val.fields.total_task_num;
              this.tableData[index].claimed = val.fields.get_task_num;
              this.tableData[index].completed = val.fields.solve_task_num;
              // TODO this.tableData[index].pk = val.pk;
            });
          });
        },
        ajaxCash (province, id, amount) {
          // 获取任务
        }
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import '../../../assets/css/common.less';

  .tableComplete {

  }

  .content {
    width: 1200px;
    margin: 0 auto 300px;
  }

  .table-box {
    .title-line {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      h3, span {
        display: inline-block;
        font-size: 24px;
        color: @cCyan;
      }
      label {
        font-size: 12px;
        color: #000;
      }
    }
    .el-table {
      text-align: center;
    }
  }
</style>
