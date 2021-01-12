import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixin from './util/mixin';
require('./mock');
import axios from 'axios';
Vue.prototype.$axios = axios;
// 引入element
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element);
// 使用mixin 为 全局组件添加 按钮loading
Vue.mixin(mixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
