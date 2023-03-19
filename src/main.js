// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import axios from "axios";
// import jsCookie from 'js-cookie'


import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;

const service = axios.create({
  baseURL: "https://netease-cloud-music-api-nine-pearl-57.vercel.app/",
  timeout: 2000
});

const TOKEN_INVALID = '认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

// service.interceptors.request.use((res)=>{
//   console.log(localStorage.getItem('token'),'434343')
//   res.headers.Cookie = localStorage.getItem('token')
//   return res

// })


service.interceptors.response.use((res) => {
  const { code, cookie, createTime } = res.data;
  if (code === 200) {
      return res;
  } else if (code !== 200) {
      ElMessage.error(TOKEN_INVALID)
      setTimeout(() => {
          router.push('/login')
      }, 1500)
      return Promise.reject(TOKEN_INVALID)
  }
})
// Vue.prototype.$cookie = jsCookie
Vue.prototype.$axios = service;
Vue.use(axios);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
