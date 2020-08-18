import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
require('./mock');
import axios from 'axios';
Vue.prototype.$axios = axios;
// 引入element
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
