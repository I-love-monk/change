<template>
  <div id="app">
    <self-head></self-head>
    <self-nav></self-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import selfHead from './components/common/selfHead.vue';
  import selfNav from './components/common/selfNav.vue';
  export default {
    name: 'app',
    components: {selfHead, selfNav}
  };
</script>

<style>
  #app {
    font-family: 'Microsoft YaHei', Helvetica, Arial;
  }
</style>
