const Mock = require('mockjs');
// const Random = Mock.Random;
// 获取系统列表
Mock.mock('/powerManage/menuList', 'get', () => {
  let systemList = [];
  let date = new Date();
  for(let i=0;i<5;i++) {
    systemList.push({
      id: i+1,
      systemName: `系统${i}`,
      updateTime: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`,
      visitAddress: `/cms`
    });
  }
  return systemList;
});

// 获取系统下的菜单信息
Mock.mock(`/powerManage/getSystemMenu`, 'get', () => {
  let systemList = [
    {
      id: 101,
      path: '/',
      name: 'welcome',
      otherName: '首页',
      meta: {canLogin: false},
      redirect: '/welcome',
      parentId: 0,
      hasChild: true,
      isMenu: true,
      level: 0
    },
    {
      id: 102,
      path: '/welcome',
      name: 'welcomeIndex',
      otherName: '首页',
      // component: () => import('../views/welcome.vue'),
      meta: {canLogin: false},
      parentId: 101,
      hasChild: false,
      isMenu: true,
      level:1
    },
    {
      id: 1,
      path: '/powerManage',
      name: 'powerManage',
      otherName: '权限管理',
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
      meta: {canLogin: false},
      parentId: 7,
      hasChild: false,
      isMenu: true,
      level: 1,
    }
  ];
  return systemList;
});

// 获取系统的路由信息
Mock.mock('/router/getRouters', 'get', () => {
  const routerList = [
    {
      id: 101,
      path: '/welcome',
      name: 'welcome',
      otherName: '首页',
      meta: {canLogin: false},
      parentId: 0,
      hasChild: false,
      isMenu: true,
      level: 0
    },
    {
      id: 1,
      path: '/powerManage',
      name: 'powerManage',
      otherName: '权限管理',
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
      meta: {canLogin: false},
      parentId: 1,
      hasChild: false,
      isMenu: true,
      level: 1
    },
    {
      id: 4,
      path: '/powerManage/userManage',
      name: 'userManage',
      otherName: '用户管理',
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
      meta: {canLogin: false},
      parentId: 7,
      hasChild: false,
      isMenu: true,
      level: 1,
    }
  ];
  return routerList;
});

// 获取用户列表
Mock.mock('/powerManage/getUserList', 'get', () => {
  const userList = [
    {
      id: 1,
      name: '张三',
      gender: '男',
      role: '管理员',
      roleId: 1
    },
    {
      id: 2,
      name: '李四',
      gender: '男',
      role: '普通用户',
      roleId: 2
    },
    {
      id: 3,
      name: '王五',
      gender: '女',
      role: '普通用户',
      roleId: 2
    },
    {
      id: 4,
      name: '赵六',
      gender: '女',
      role: '普通用户',
      roleId: 2
    }
  ];
  return userList;
});

// 获取角色列表
Mock.mock('/powerManage/getRoleList', 'get',() => {
  const role = [
    {
      id: 1,
      name: '超级管理员',
      createTime: '2020-08-25',
      createName: 'admin'
    },
    {
      id: 2,
      name: '管理员',
      createTime: '2020-08-25',
      createName: 'admin'
    },
    {
      id: 3,
      name: '普通用户',
      createTime: '2020-08-25',
      createName: 'admin'
    }
  ];
  return role;
});
