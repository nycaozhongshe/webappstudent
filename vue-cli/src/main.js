import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' 
import  'assets/js/filter.js'
// ajax 请求
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(MuseUI)
import 'components/index.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
