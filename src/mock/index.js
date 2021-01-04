const Mock = require('mockjs');
import { funList } from '@/util/publicFun';
// const Random = Mock.Random;

const resourceData = [
  {
    id: 1,
    otherName: '系统1',
    path: '/system1'
  }, {
    id: 2,
    otherName: '系统2',
    path: '/system2'
  }, {
    id: 3,
    otherName: '系统3',
    path: '/system3'
  }, {
    id: 4,
    otherName: '系统4',
    path: '/system4'
  }, {
    id: 5,
    otherName: '系统5',
    path: '/system5'
  }
];

const menuList = [
  {
    id: 1,
    path: '/welcome',
    name: 'home',
    otherName: '首页',
    meta: { canLogin: false },
    parentId: 0,
    hasChild: false,
    isMenu: true,
    level: 0,
    isOpenBlank: false,
    isShow: true,
    filePath: '/welcome',
    sort: 1,
    systemId: 1
  },
  {
    id: 2,
    path: '/powerManage',
    name: 'powerManage',
    otherName: '权限管理',
    meta: { canLogin: false },
    redirect: '/powerManage/menuManage',
    parentId: 0,
    hasChild: true,
    isMenu: true,
    level: 0,
    isOpenBlank: false,
    isShow: true,
    filePath: '/powerManage/menuManage/menuManage',
    sort: 2,
    systemId: 1
  },
  {
    id: 3,
    path: '/powerManage/menuManage',
    name: 'menuManage',
    otherName: '菜单管理',
    meta: { canLogin: false },
    parentId: 2,
    hasChild: false,
    isMenu: true,
    level: 1,
    isOpenBlank: false,
    isShow: true,
    filePath: '/powerManage/menuManage/menuManage',
    sort: 1,
    systemId: 1
  },
  {
    id: 4,
    path: '/powerManage/roleManage',
    name: 'roleManage',
    otherName: '角色管理',
    meta: { canLogin: false },
    parentId: 2,
    hasChild: false,
    isMenu: true,
    level: 1,
    isOpenBlank: false,
    isShow: true,
    filePath: '/powerManage/roleManage/roleManage',
    sort: 2,
    systemId: 1
  },
  {
    id: 5,
    path: '/powerManage/userManage',
    name: 'userManage',
    otherName: '用户管理',
    meta: { canLogin: false },
    parentId: 2,
    hasChild: false,
    isMenu: true,
    level: 1,
    isOpenBlank: false,
    isShow: true,
    filePath: '/powerManage/userManage/userManage',
    sort: 3,
    systemId: 1
  },
  {
    id: 6,
    path: '/test11',
    name: 'test11',
    otherName: '测试页面11',
    meta: { canLogin: false },
    redirect: '/test11/test1',
    parentId: 0,
    hasChild: true,
    isMenu: true,
    level: 0,
    isOpenBlank: false,
    isShow: true,
    filePath: '/test11',
    sort: 3,
    systemId: 1
  },
  {
    id: 7,
    path: '/test11/test1',
    name: 'test1',
    otherName: '测试页面11-1',
    meta: { canLogin: false },
    parentId: 6,
    hasChild: false,
    isMenu: true,
    level: 1,
    isOpenBlank: false,
    isShow: true,
    filePath: '/test11/test1',
    sort: 1,
    systemId: 1
  },
  {
    id: 8,
    path: '/test',
    name: 'test',
    otherName: '测试页面1',
    meta: { canLogin: false },
    redirect: '/test/test1',
    parentId: 0,
    hasChild: true,
    isMenu: true,
    level: 0,
    isOpenBlank: false,
    isShow: true,
    filePath: '/test',
    sort: 4,
    systemId: 1
  },
  {
    id: 9,
    path: '/test/test12',
    name: 'test12',
    otherName: '测试页面1-2',
    meta: { canLogin: false },
    parentId: 8,
    hasChild: false,
    isMenu: true,
    level: 1,
    isOpenBlank: false,
    isShow: true,
    filePath: '/test/test12',
    sort: 1,
    systemId: 1
  },
  {
    id: 10,
    path: '/test/test13',
    name: 'test13',
    otherName: '测试页面1-3',
    meta: { canLogin: false },
    redirect: '/test/test31',
    parentId: 8,
    hasChild: true,
    isMenu: true,
    level: 1,
    isOpenBlank: false,
    isShow: true,
    filePath: '/test/test13',
    sort: 2,
    systemId: 1
  },
  {
    id: 11,
    path: '/test/test131',
    otherName: '测试页面3-1-1',
    name: 'test131',
    meta: { canLogin: false },
    parentId: 10,
    hasChild: false,
    isMenu: true,
    level: 2,
    isOpenBlank: false,
    isShow: true,
    filePath: '/test/test131',
    sort: 1,
    systemId: 1
  },
  {
    id: 12,
    path: '/test/test14',
    name: 'test14',
    otherName: '测试页面1-4',
    meta: { canLogin: false },
    parentId: 8,
    hasChild: false,
    isMenu: true,
    level: 1,
    isOpenBlank: false,
    isShow: true,
    filePath: '/test/test14',
    sort: 3,
    systemId: 1
  }
];

// 获取系统列表
Mock.mock('/powerManage/menuList', 'get', () => {
  const systemData = JSON.parse(JSON.stringify(resourceData));
  const requireData = [];
  const routerList = [];
  let require = [];
  funList.formatRouter(menuList, routerList);
  systemData.forEach(item => {
    item.children = [];
    requireData.push(item);
    routerList.forEach(route => {
      if (route.systemId === item.id) {
        item.children.push(route);
      }
    });
  });
  require = JSON.parse(JSON.stringify(requireData));
  require.forEach(item => {
    item.id = '0' + item.id;
  });
  return require;
});

// 获取系统下的菜单信息
Mock.mock(`/powerManage/getSystemMenu`, 'get', (res) => {
  console.log(JSON.parse(res.body));
  return menuList;
});

// 获取系统的路由信息
Mock.mock('/router/getRouters', 'get', () => {
  return menuList;
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
Mock.mock('/powerManage/getRoleList', 'get', () => {
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
