import Vue from 'vue'
import App from './App'
import router from './router'

// 引入global.css全局样子 控制 文件
import './assets/css/global.css'

// 引入 图标 css 样式文件
import './assets/fonts/iconfont.css'
// 引入element-ui组件模块
import ElementUI from 'element-ui'

// 引入axios 并做相关配置
import axios from 'axios'
// axios 请求根地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios的请求拦截器(在其中配置token)
axios.interceptors.request.use(
  function(config) {
    // config : 代表axios的子级配置对象
    var token = window.sessionStorage.getItem('token')
    config.headers.Authorization = token
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)
// 给axios 配置给vue 的$http 成员
Vue.prototype.$http = axios

// 把element-ui 注册给vue
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
