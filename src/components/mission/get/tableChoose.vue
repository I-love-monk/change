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
              <el-dropdown v-if="scope.$index === 0" @command="seleProvince">
                <span class="el-dropdown-link">
                  {{provinceSele}}
                  <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(item, index) in provinceList"
                                    :command="item.name" :key="index">
                    {{item.name}}
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
              <self-inp></self-inp>
            </template>
          </el-table-column>
          <el-table-column prop="get" label="操作" width="120">
            <template scope="scope">
              <el-button @click="getMission(scope)" type="text">确定</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import selfInp from './selfInp.vue';

  export default {
    components: {selfInp},
    updated () {
      // updated必须
      this.resetStyle();  // 定制ui样式
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
            city: '123',
            area: '123',
            address: '123',
            total: '123'
          },
          {
            city: '456',
            area: '456',
            address: '456',
            total: '456'
          }
        ],
        provinceList: [ // 省级列表
          {name: '广东省'},
          {name: '湖北省'},
          {name: '江苏省'}
        ]
      };
    },
    methods: {
      resetStyle () {
        let header = document.querySelector('.el-table__header-wrapper');
        let headerTh = document.querySelectorAll('.el-table__header th');
        let headerCell = document.querySelectorAll('.el-table__header-wrapper th .cell');
        header.style.fontSize = '20px';
        header.style.color = '#fff';
        headerTh.forEach(item => {
          item.style.backgroundColor = '#59C1D2';
        });
        headerCell.forEach(item => {
          item.style.backgroundColor = '#59C1D2';
          item.style.textAlign = 'center';
        });
      },
      seleProvince (val) {
        this.provinceSele = val;
        // TODO 选择省级，刷新列表
      },
      getMission (row) {
        console.log(row);
        // TODO 领取任务
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
