import Vue from 'vue'
import Router from 'vue-router'
import index from 'views/index.vue'
import login from 'views/login.vue'
import notF from 'views/404.vue'
import vindex from 'views/index/index.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			redirect: 'index',
			component: index,
			children: [{
				path: '/index',
				name: 'index',
				//          redirect: 'hello',
				component: vindex,
			}]

		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '*',
			name: '404',
			component: notF
		}
	]
})