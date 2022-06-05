import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const mainTitle = '项目主标题';

const router = new VueRouter({
  mode: 'hash', //默认是hash模式，可设置为history模式
  routes: [{
      path: '/',
      name: 'index',
      component: () => import('@/views/index/index'), //首页
      meta: {
        title: mainTitle,
        keepAlive: true,
        requireLogin: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login'), //登录
      meta: {
        title: mainTitle + ' ~ 登录',
      }
    },
    {
      path: '/404',
      meta: {
        title: mainTitle,
      },
      component: () => import('@/views/404'),
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  /**
   * 登录校验判断逻辑
   * 如果当前是login页面则继续，防止死循环跳转
   * 判断requireLogin是否为true
   * 为true时，判断token是否存在，不存在则跳转到login
   **/
  if (to.name == 'login') {
    if (token) {
      next('/404');
    } else {
      next();
    }
  } else if (to.meta.requireLogin) {
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
})
export default router;