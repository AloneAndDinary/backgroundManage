import router from '../router';
import { setSessionItem, getSessionItem } from '@/util/commonUtil';
const commonState = {
  state: {
    openMenuList: getSessionItem('openMenuList') ? JSON.parse(getSessionItem('openMenuList')) : [],
    activeIndex: getSessionItem('activeIndex') ? getSessionItem('activeIndex') : 0
  },
  mutations: {
    // 设置面包屑导航添加一项 同步设置当前激活菜单下标
    SET_MENULIST(state, menu) {
      if (state.openMenuList.some(item => { return item.path === menu.path; })) {
        let index = 0;
        state.openMenuList.forEach((item, i) => {
          if (item.path === menu.path) {
            index = i;
          }
        });
        this.commit('SET_ACTIVEINDEX', index);
        router.push(menu.path);
      } else {
        state.openMenuList.push(menu);
        setSessionItem('openMenuList', JSON.stringify(state.openMenuList));
        this.commit('SET_ACTIVEINDEX', state.openMenuList.length - 1);
      }
    },
    // 删除面包屑导航一项 同步设置当前激活菜单下标
    DELETE_MENULIST_ITEM(state, data) {
      state.openMenuList = state.openMenuList.filter((item) => {
        return item.path !== data.path;
      });
      setSessionItem('openMenuList', JSON.stringify(state.openMenuList.filter((item) => {
        return item.path !== data.path;
      })));
      if (state.openMenuList.length === 0) {
        router.push('/');
      } else {
        let path = '';
        if (data.index === 0) {
          path = state.openMenuList[0].path;
        } else if (data.index === state.openMenuList.length) {
          path = state.openMenuList[state.openMenuList.length - 1].path;
        } else {
          path = state.openMenuList[data.index].path;
        }
        router.push(path);
      }
    },
    // 设置面包屑当前激活菜单下标
    SET_ACTIVEINDEX(state, index) {
      state.activeIndex = index;
      setSessionItem('activeIndex', index);
    }
  },
  actions: {}
};

export default commonState;
