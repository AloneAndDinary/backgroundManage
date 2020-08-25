const Mock = require('mockjs');
// const Random = Mock.Random;
Mock.mock('/powerManage/menuList', 'get', () => {
  let systemList = [];
  let date = new Date();
  for(let i=0;i<5;i++) {
    systemList.push({
      systemName: `系统${i}`,
      updateTime: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`,
      visitAddress: `/cms`
    });
  }
  return systemList;
});

Mock.mock('/router/getRouters', 'get', () => {
  const routerList = [
    {
      id: 1,
      path: '/powerManage',
      name: 'powerManage',
      otherName: '权限管理',
      // component: Layout,
      meta: {canLogin: false},
      redirect: '/powerManage/menuManage',
      parentId: 0,
      hasChild: true,
      isMenu: true,
      level: 0
    },
    {
      id: 2,
      path: '/powerManage/menuManage',
      name: 'menuManage',
      otherName: '菜单管理',
      // component: () => import('../views/powerManage/menuManage.vue'),
      meta: {canLogin: false},
      parentId: 1,
      hasChild: false,
      isMenu: true,
      level: 1
    },
    {
      id: 3,
      path: '/powerManage/roleManage',
      name: 'roleManage',
      otherName: '角色管理',
      // component: () => import('../views/powerManage/roleManage.vue'),
      meta: {canLogin: false},
      parentId: 1,
      hasChild: false,
      isMenu: true,
      level: 1
    },
    {
      id: 4,
      path: '/powerManage/powerManage',
      name: 'powerManage',
      otherName: '权限管理',
      // component: () => import('../views/powerManage/powerManage.vue'),
      meta: {canLogin: false},
      parentId: 1,
      hasChild: false,
      isMenu: true,
      level: 1
    },
    {
      id: 5,
      path: '/test11',
      name: 'test11',
      otherName: '测试页面11',
      // component: Layout,
      meta: {canLogin: false},
      redirect: '/test11/test1',
      parentId: 0,
      hasChild: true,
      isMenu: true,
      level: 0
    },
    {
      id: 6,
      path: '/test11/test1',
      name: 'welcomeIndex',
      otherName: '测试页面11-1',
      // component: () => import('../views/welcome.vue'),
      meta: {canLogin: false},
      parentId: 5,
      hasChild: false,
      isMenu: true,
      level: 1
    },
    {
      id: 7,
      path: '/test',
      name: 'test',
      otherName: '测试页面1',
      // component: Layout,
      meta: {canLogin: false},
      redirect: '/test/test1',
      parentId: 0,
      hasChild: true,
      isMenu: true,
      level: 0
    },
    {
      id: 8,
      path: '/test/test12',
      name: 'welcomeIndex',
      otherName: '测试页面1-2',
      // component: () => import('../views/welcome.vue'),
      meta: {canLogin: false},
      parentId: 7,
      hasChild: false,
      isMenu: true,
      level: 1
    },
    {
      id: 9,
      path: '/test/test13',
      name: 'welcomeIndex',
      otherName: '测试页面1-3',
      // component: () => import('../views/welcome.vue'),
      meta: {canLogin: false},
      redirect: '/test/test31',
      parentId: 7,
      hasChild: true,
      isMenu: true,
      level: 1,
    },
    {
      id: 10,
      path: '/test/test131',
      otherName: '测试页面3-1-1',
      name: 'welcomeIndex',
      // component: () => import('../views/welcome.vue'),
      meta: {canLogin: false},
      parentId: 9,
      hasChild: false,
      isMenu: true,
      level: 2,
    },
    {
      id: 11,
      path: '/test/test14',
      name: 'welcomeIndex',
      otherName: '测试页面1-4',
      // component: () => import('../views/welcome.vue'),
      meta: {canLogin: false},
      parentId: 7,
      hasChild: false,
      isMenu: true,
      level: 1,
    }
  ];
  return routerList;
});
