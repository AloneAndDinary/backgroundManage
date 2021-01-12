import { setSessionItem, getSessionItem } from '../util/commonUtil';

const commonState = {
  state: {
    loginFlag: getSessionItem('loginFlag') || ''
  },
  mutations: {
    SET_LOGINFLAG(state, data) {
      state.loginFlag = data;
      setSessionItem('loginFlag', data);
    }
  },
  actions: {}
};
export default commonState;
