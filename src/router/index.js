import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../components/Layout';
import Level from '../components/Layout/levelComponent';
Vue.use(VueRouter);
const baseRoutes = [
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
  },
  {
    path: '/test11',
    name: 'test11',
    otherName: '测试页面11',
    component: Layout,
    meta: {canLogin: false},
    redirect: '/test11/test1',
    children: [
      {
        path: '/test11/test1',
        name: 'welcomeIndex',
        otherName: '测试页面11-1',
        component: () => import('../views/test/test1.vue'),
        meta: {canLogin: false}
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    otherName: '测试页面1',
    component: Layout,
    meta: {canLogin: false},
    redirect: '/test/test1',
    children: [
      {
        path: '/test/test1',
        otherName: '测试页面1-1',
        name: 'welcomeIndex',
        component: () => import('../views/test/test11.vue'),
        meta: {canLogin: true}
      },
      {
        path: '/test/test2',
        name: 'welcomeIndex',
        otherName: '测试页面1-2',
        component: () => import('../views/test/test12.vue'),
        meta: {canLogin: false}
      },
      {
        path: '/test/test3',
        name: 'welcomeIndex',
        otherName: '测试页面1-3',
        component: Level,
        meta: {canLogin: false},
        redirect: '/test/test31',
        children: [
          {
            path: '/test/test31',
            otherName: '测试页面3-1-1',
            name: 'welcomeIndex',
            component: () => import('../views/test/test131.vue'),
            meta: {canLogin: false}
          },
          {
            path: '/test/test32',
            otherName: '测试页面3-1-1',
            name: 'welcomeIndex',
            component: Level,
            meta: {canLogin: false},
            redirect: '/test/test313',
            children: [
              {
                path: '/test/test313',
                otherName: '测试页面3-1-1',
                name: 'welcomeIndex',
                component: () => import('../views/test/test131.vue'),
                meta: {canLogin: false}
              },
            ]
          },
        ]
      },
      {
        path: '/test/test4',
        name: 'welcomeIndex',
        otherName: '测试页面1-4',
        component: () => import('../views/test/test14.vue'),
        meta: {canLogin: false}
      }
    ]
  }

];

const router = new VueRouter({
  base: '/cms/',
  routes:baseRoutes,
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
