<template>
  <div class="tableChoose">
    <div class="content">
      <div class="top-line">
        <div class="backBtn" @click="$router.go(-1)">返回</div>
        <div class="date-box">
          发布日期：
          <el-date-picker v-model="dateSele" format="yyyy年MM月dd日"
                          :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </div>
      <div class="table-box">
        <div class="title-line">
          <h3>任务选择/</h3>
          <span>更多&gt;&gt;</span>
        </div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="province" label="省份" width="100">
            <template scope="scope">
              <el-dropdown v-if="scope.$index === 0" trigger="click"
                           @command="seleProvince">
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
          <el-table-column prop="count" label="可认领" width="120">
            <template scope="scope">
              <self-inp v-if="scope.row.city" :max="getMax(scope)"></self-inp>
            </template>
          </el-table-column>
          <el-table-column prop="get" label="操作" width="120">
            <template scope="scope">
              <el-button v-if="scope.row.city"
                         @click="getMission(scope)" type="text">
                确定
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
  import selfInp from './selfInp.vue';

  export default {
    components: {selfInp},
    mounted () {
      this.ajaxGetProList();  // 初始化省级列表
      this.ajaxPostTasks(); // 初始化当前省数据
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
            total: '暂无',
            unclaimed: '暂无',
            pk: 0 // 任务ID
          }
        ],
        provinceList: []  // 省级列表
      };
    },
    methods: {
      seleProvince (val) {
        // 选择省级，刷新列表
        this.provinceSele = val;
        this.ajaxPostTasks();
      },
      getMax (scope) {
        return scope.row.unclaimed - 0;
      },
      getMission (scope) {
        let amount = document.querySelectorAll('.selfInp')[scope.$index].value;
        this.ajaxClaimed(this.provinceSele, scope.row.pk, amount);
      },
      ajaxGetProList () {
        // 省级列表
        Ajax.get({api: 'get_task_province'}).then(res => {
          this.provinceList = res.body.province_list;
        });
      },
      ajaxPostTasks () {
        // 市、区级列表
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
            this.tableData[index].total = val.fields.total_task_num;
            this.tableData[index].unclaimed = val.fields.avali_task_num;
            this.tableData[index].pk = val.pk;
          });
        });
      },
      ajaxClaimed (province, id, amount) {
        // 获取任务
        let data = {province, task_id: id, amount};
        Ajax.save({api: 'get_tasks'}, data).then(res => {
          if (res.body.status === 200) {
            this.$message({message: '认领任务成功', type: 'success'});
          }
        });
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../../assets/css/common.less";

  .tableChoose {
  }

  .content {
    width: 1200px;
    margin: 0 auto 300px;
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
    .date-box {
      font-size: 20px;
      .el-date-picker {
      }
    }
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
    }
    .el-table {
      text-align: center;
    }
  }
</style>
