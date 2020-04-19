import Vue from 'vue';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';

import ElementUI from 'element-ui'
// @element-ui/lib/locale/lang/en
import en from "element-ui";


import axios from 'axios';
import configUrl from '@/utilities/config'


Vue.use(ElementUI, { size: 'small', zIndex: 9999,locale: en});

// Base Url
axios.defaults.baseURL = configUrl.baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// Error when compliler cannot find the right path
// npm install --save-dev url-loader
