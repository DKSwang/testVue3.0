/*
 * @Author: xxuzhong.wang
 * @Date: 2020-05-21 16:45:58
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2020-07-29 13:53:59
 * @Description:
 */
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
