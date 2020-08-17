import Vue from 'vue';
import Vuex from 'vuex';
import commonState from './commonState';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    commonState
  },
  getters: {
    openMenuList: state => state.commonState.openMenuList,
    activeIndex: state => state.commonState.activeIndex
  }
});
