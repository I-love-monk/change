// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import './api';
import router from './router';

import './assets/css/reset.css';  // 重置样式
import ElementUI from 'element-ui'; // 引入ui组件
import 'element-ui/lib/theme-default/index.css';  // ui-css
import './utils/vee-validate'; // 表单验证

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
