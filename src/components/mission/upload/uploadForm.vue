<template>
  <div class="uploadForm">
    <div class="left">
      <img class="leftImg">
      <div class="btn-line">
        <div class="loadBtn">
          图片上传
          <input type="file" class="imgInp" @change="onPhoto"
                 accept="image/jpg,image/jpeg,image/png">
        </div>
        <i class="bar">|</i>
        <div class="delBtn" @click="$emit('subtractForm',index)">删除选项</div>
      </div>
    </div>
    <div class="right">
      <form>
        <inp-line placeTxt="请输入商家名" v-model="formData.name"
                  v-validate="'required'" name="名称"
                  :class="{danger: errors.has('名称')}">
          <div slot="left" class="inp-left">名称{{index}}</div>
        </inp-line>
        <inp-line placeTxt="请输入详细地址" v-model="formData.detailAddress"
                  v-validate="'required'" name="地址"
                  :class="{danger: errors.has('地址')|| seleAddress === null}">
          <div slot="left" class="inp-left-line">
            <span class="inp-left">地址</span>
            <el-cascader :options="addressList"
                         @active-item-change="getMoreAddress"
                         :props="cascaderInit"
                         v-model="seleAddress">
            </el-cascader>
          </div>
        </inp-line>
        <inp-line placeTxt="请输入商家手机号或固定号码"
                  v-model="formData.phone"
                  v-validate="'required'" name="电话"
                  :class="{danger: errors.has('电话')}">
          <div slot="left" class="inp-left">电话</div>
        </inp-line>
        <inp-line placeTxt="请输入行业（如：超市、家居电器等）"
                  v-model="formData.trade"
                  v-validate="'required'" name="行业"
                  :class="{danger: errors.has('行业')}">
          <div slot="left" class="inp-left">行业</div>
        </inp-line>
        <inp-line placeTxt="请输入主要出售的商品（如：空调、电视等）"
                  v-model="formData.feature"
                  v-validate="'required'" name="特色"
                  :class="{danger: errors.has('特色')}">
          <div slot="left" class="inp-left">特色</div>
        </inp-line>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Ajax from '@/api';
  import inpLine from '../../../components/common/inpLine.vue';

  export default {
    components: {inpLine},
    props: {
      index: {
        type: Number
      }
    },
    updated () {
      this.initStyle(); // 定制多级联动样式
    },
    data () {
      return {
        formData: {
          name: null, // 名字
          detailAddress: null,  // 详细地址
          trade: null,  // 行业
          feature: null // 特色
        },
        seleAddress: null, // 多级联动选择结果
        addressList: [  // 多级联动地址
          {
            label: '广东',
            children: [
              {
                label: '广州',
                children: [
                  {label: '天河'},
                  {label: '白云'}
                ]
              }
            ]
          }
        ],
        cascaderInit: { // 多级联动设置
          value: 'label'
        }
      };
    },
    methods: {
      initStyle () {
        let elLabel = document.querySelector('.el-cascader__label');
        elLabel.style.lineHeight = '70px';
      },
      onPhoto (index) {
        // 获取图片
        let inp = document.querySelector('.imgInp');
        if (inp.files && inp.files[0]) {
          // console.log(inp.files[0].size);
          this.condense(inp.files[0], index);
        }
      },
      condense (file, index) {
        // 压缩图片
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          var img = new Image();
          var width = 355;  // image resize
          var quality = 1;  // image quality
          var canvas = document.createElement('canvas');
          var drawer = canvas.getContext('2d');
          img.src = this.result;
          img.onload = function () {
            canvas.width = width;
            canvas.height = width * (img.height / img.width);
            drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
            document.querySelector('.leftImg').src = canvas.toDataURL('image/jpeg', quality);  // 压缩完毕的图片
          };
        };
      },
      ajaxGetProList () {
        // 省级列表
        Ajax.get({api: 'get_task_province'}).then(res => {
          this.provinceList = res.body.province_list;
        });
      },
      ajaxPostLocList (api, data, reback) {
        // 市、区列表
        Ajax.save({api: api}, data).then(res => {
          this[reback];
        });
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../../assets/css/common.less";

  .uploadForm {
    width: 100%;
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
  }

  .left {
    width: 355px;
    img {
      display: inline-block;
      box-sizing: border-box;
      width: 355px;
      height: 355px;
      border: 1px solid @cBorder;
    }
    .btn-line {
      margin-top: 18px;
      display: flex;
      justify-content: center;
      font-size: 24px;
      color: @cCyan;
      .loadBtn, .delBtn {
        position: relative;
        display: inline-block;
        width: 4em;
        cursor: pointer;
        .imgInp {
          position: absolute;
          top: 0;
          left: 0;
          width: 4em;
          opacity: 0;
        }
      }
      .bar {
        display: inline-block;
        margin: 0 10px;
      }
    }
  }

  .right {
    width: 710px;
    form {
      .inp-left {
        display: inline-block;
        width: 4em;
        text-align: center;
        &::after {
          content: '|';
          margin: 0 5px 0 15px;
        }
      }
      input {
        padding: 0;
      }
      .danger {
        border: 1px solid red;
      }
    }
  }
</style>
