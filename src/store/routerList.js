import { setLocalItem, getLocalItem } from '@/util/commonUtil';
import { request } from '@/network/require';
import Layout from '@/components/Layout';
const commonState = {
  state: {
    asyncRouter: getLocalItem('asyncRouter')?getLocalItem('asyncRouter'):[]
  },
  mutations: {
    // 设置路由
    SET_ASYNCROUTER(state, data) {
      console.log('设置');
      state.asyncRouter = JSON.stringify(data);
      setLocalItem('asyncRouter', JSON.stringify(data));
    }
  },
  actions: {
    getAsyncRouter({commit}) {
      const route = [];
      let sendData = {
        method: 'get',
        url: '/router/getRouters',
        data: {
          page: 1,
          size: 10
        }
      };
      request(sendData).then(res => {
        formatRouter(res, route);
        commit('SET_ASYNCROUTER', route);
      });
    }
  }
};
// 格式路由
function formatRouter(data, route) {
  data.forEach(router=>{
    if(router.hasChild) {
      router.children = [];
    }
    if(router.level === 0) {
      router.component = Layout;
      route.push(router);
    } else {
      const item = getItem(route, router.parentId);
      if(item.children){
        router.component = () => import("@/views" + router.path + ".vue");
        item.children.push(router);
      } else {
        item.children = [];
        item.children.push(router);
      }
    }
  });
}

// 获取数据中与指定id相同的值
function getItem(list,id) {
  for(let i = 0; i < list.length; i++) {
    let item = list[i];
    if(item.id === id){
      return item;
    } else {
      if (item.children) {
        let returnData = getItem(item.children, id);
        if(returnData) {
          return returnData;
        }
      }
    }
  }
}

export default commonState;
