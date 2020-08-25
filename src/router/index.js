import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../components/Layout';
import store from '@/store';

// import Level from '../components/Layout/levelComponent';
Vue.use(VueRouter);
let baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: { canLogin: false },
    redirect: '/welcome'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404Page.vue'),
    meta: { canLogin: false }
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Layout,
    meta: {canLogin: false},
    redirect: '/welcome/index',
    children: [
      {
        path: '/welcome/index',
        name: 'welcomeIndex',
        component: () => import('../views/welcome.vue'),
        meta: {canLogin: false}
      }
    ]
  }
];

const router = new VueRouter({
  base: '/cms/',
  routes:baseRoutes,
});
console.log(store);
store.dispatch('getAsyncRouter').then(() => {
  console.log('123');
  console.log(store.state.routerList.asyncRouter);
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.canLogin)) {
    console.log('需要登录');
    // 判断是否登录，若未登录跳转至登录页，若已登录则继续
  }else {
    console.log('不需要登录');
    next();
  }
});

// 处理路由冗余报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
