import Vue from 'vue'
import App from './App'
//路由
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
//状态管理 vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import store from 'state'
//解决移动端点击延迟的插件
import FastClick from 'fastclick'
// ajax 请求

//过滤器
import 'assets/js/filter.js'
//组件
import 'components/index.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})