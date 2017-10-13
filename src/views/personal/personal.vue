<template>
  <div class="personal">
    <div class="content">
      <div class="left">
      <img class="img" :src="img">
      <ul class="list">
        <router-link class="router" tag="li" v-for="(item, index) in aboutList"
                     :to="item.to" :key="index" >
            {{item.txt}}
        </router-link>
      </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import img from '../../assets/img/goods7.png';

  export default {
    data () {
      return {
        aboutList: [   // 左侧选项
          {txt: '基本信息', to: '/personal/essential'},
          {txt: '个人信息', to: '/personal/personalMessage'},
          {txt: '完善信息', to: '/personal/perfect'}
        ],
        img: img,
        activeIndex: 0
      };
    },
    methods: {
      changeTab (index) {
        this.activeIndex = index;
        // TODO ajax变更商品列表
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import "../../assets/css/common.less";

  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;

    .left{
      width: 214px;
      color: @cGray;
      .router{
        margin-top: 20px;
        width: 100%;
        text-align: center;
        margin-right: 50px;
        text-decoration: underline;
        font-size: 20px;
        padding: 5px;
        cursor: pointer;
      }
    }
    .right{
      width: 100%;
      margin-left: 50px;
    }
    .router-link-active {
      color: @cLight;
    }
  }

</style>
