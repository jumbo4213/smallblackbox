// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
/* eslint-disable no-new */
import mockjs from './mock.js'
import axios from 'axios'
axios.interceptors.request.use(
    config=>{
        if(localStorage.getItem('token')){
          config.headers.Authorization=localStorage.getItem('token')
        }
        return config;
    },
    error => {
      return Promise.reject(error)
    }
);
Vue.prototype.$http=axios;
new Vue({
  router,
  store
}).$mount('#app')
