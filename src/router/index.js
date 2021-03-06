import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Mission from './mission.js';
import Brief from '../views/brief.vue';
import Persional from './personal.js';

Vue.use(Router);
let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home' // 重定向初始化路由
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    Mission,
    {
      path: '/brief',
      component: Brief
    },
    Persional
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
