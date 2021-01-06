import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../components/Layout';
import store from '@/store';
Vue.use(VueRouter);
const baseRoutes = [
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404Page.vue'),
    meta: { canLogin: false }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: { canLogin: false }
  },
  {
    path: '/',
    name: 'homeIndex',
    component: Layout,
    redirect: '/welcome',
    meta: { canLogin: false }
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Layout,
    meta: { canLogin: false },
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcomeIndex',
        component: () => import('@/views/welcome.vue'),
        meta: { canLogin: false }
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  // base: '/cms/',
  routes: baseRoutes
});

// 获取动态路由
store.dispatch('getAsyncRouter').then(res => {
  console.log('顺序1');
  router.addRoutes(res);
  store.commit('SET_ASYNCROUTER', res);
});

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('来源', to);
  console.log('去往', from);
  if (to.matched.some(record => record.meta.canLogin)) {
    // console.log('需要登录');
    // 判断是否登录，若未登录跳转至登录页，若已登录则继续
  } else {
    // console.log('不需要登录');
    next();
  }
});

// 处理路由冗余报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
