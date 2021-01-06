import Vue from 'vue';
import Vuex from 'vuex';
import commonState from './commonState';
import routerList from './routerList';
import userInfo from './userInfo';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    commonState,
    routerList,
    userInfo
  },
  getters: {
    openMenuList: state => state.commonState.openMenuList,
    activeIndex: state => state.commonState.activeIndex,
    asyncRouter: state => state.routerList.asyncRouter
  }
});
