<template>
  <div class="home">
    <self-head></self-head>
    <self-nav></self-nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import selfHead from '../components/home/selfHead.vue';
  import selfNav from '../components/home/selfNav.vue';
  export default {
    components: {selfHead, selfNav}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
