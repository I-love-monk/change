import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Brief from '../views/brief.vue';

Vue.use(Router);
let router = new Router({
  routes: [
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
    {
      path: '/brief',
      component: Brief
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
