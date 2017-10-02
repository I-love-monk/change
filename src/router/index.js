import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import Home from '../views/home.vue';
import Login from '../views/login.vue';

Vue.use(Router);
let router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
});

// 路由导航拦截器
router.beforeEach((to, from, next) => {
  // 验证登陆
  if (to.matched.some(record => record.meta.requireLogin) &&
    sessionStorage.getItem('userName')) {
    // TODO ui提示
    next('/');  // TODO 登陆页面
  } else {
    next();
  }
});

export default router;
