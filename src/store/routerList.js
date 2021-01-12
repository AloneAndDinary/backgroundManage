import { setSessionItem, getSessionItem } from '@/util/commonUtil';
import { request } from '@/network/require';
import Layout from '@/components/Layout';
// import router from '@/router';
import Level from '@/components/Layout/levelComponent';
const commonState = {
  state: {
    asyncRouter: getSessionItem('asyncRouter') ? JSON.parse(getSessionItem('asyncRouter')) : []
  },
  mutations: {
    // 设置路由
    SET_ASYNCROUTER(state, data) {
      state.asyncRouter = JSON.stringify(data);
      setSessionItem('asyncRouter', JSON.stringify(data));
    }
  },
  actions: {
    getAsyncRouter() {
      return new Promise((resolve, reject) => {
        const route = [];
        const sendData = {
          method: 'get',
          url: '/router/getRouters'
        };
        request(sendData).then(res => {
          formatRouter(res, route);
          resolve(route);
        }).catch(() => {
          reject();
        });
      });
    }
  }
};
// 格式路由
function formatRouter(data, route) {
  data.forEach(router => {
    if (router.hasChild) {
      router.children = [];
    }
    // 第一级 直接push进数组
    if (router.level === 0) {
      router.component = Layout;
      route.push(router);
    } else {
      // 根据id获取对应的数据 判断数据为第几级 然后赋值
      const item = getItem(route, router.parentId);
      if (router.level > 1 && item.children) {
        item.component = Level;
        item.children.push(router);
      } else {
        router.component = () => import('@/views' + router.filePath + '.vue');
        item.children.push(router);
      }
    }
  });
}

// 获取数据中与指定id相同的值
function getItem(list, id) {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item.id === id) {
      return item;
    } else {
      if (item.children) {
        const returnData = getItem(item.children, id);
        if (returnData) {
          return returnData;
        }
      }
    }
  }
}

export default commonState;
