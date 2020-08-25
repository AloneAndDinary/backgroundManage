import Vue from 'vue';
import Vuex from 'vuex';
import commonState from './commonState';
import routerList from './routerList';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    commonState,
    routerList,
  },
  getters: {
    openMenuList: state => state.commonState.openMenuList,
    activeIndex: state => state.commonState.activeIndex
  }
});
