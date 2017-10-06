<template>
  <div class="home">
    <self-head></self-head>
    <self-nav></self-nav>
    <self-map></self-map>
    <goods></goods>
    <life></life>
    <info></info>
  </div>
</template>

<script type="text/ecmascript-6">
  import selfHead from '../components/common/selfHead.vue';
  import selfNav from '../components/common/selfNav.vue';
  import selfMap from '../components/home/selfMap.vue';
  import goods from '../components/home/goods.vue';
  import life from '../components/home/life.vue';
  import info from '../components/home/info.vue';
  export default {
    components: {selfHead, selfNav, selfMap, goods, life, info},
    data () {
      return {};
    },
    methods: {}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
