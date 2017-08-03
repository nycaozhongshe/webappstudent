import Vue from 'vue'
import Router from 'vue-router'
import index from 'views/index.vue'
import login from 'views/login.vue'
import notF from 'views/404.vue'
import vindex from 'views/index/index.vue'
import details from 'views/index/details/index.vue'
import detailsinfo from 'views/index/details/info/index.vue'
import information from 'views/information/index.vue'
import personinfo from 'views/personinfo/index.vue'
import cultivate from 'views/cultivate/index.vue'
Vue.use(Router)
const router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			redirect: 'index',
			component: index,
			children: [{
					path: '/index',
					name: 'index',
					component: vindex,
					meta: {
						requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
					},
				},
				{
					path: '/information',
					name: 'information',
					component: information,
					meta: {
						requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
					}
				},
				{
					path: '/cultivate',
					name: 'cultivate',
					component: cultivate,
					meta: {
						requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
					}
				},
				{
					path: '/personinfo',
					name: 'personinfo',
					component: personinfo,
					meta: {
						requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
					},
				}
			]
		},
		{
			path: '/details',
			name: '/details',
			component: details,
			meta: {
				requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
			},
			children:[{
					path: '/detailsinfo',
					name: 'detailsinfo',
					component: detailsinfo,
					meta: {
						requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
					},
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

router.beforeEach((to, from, next) => {
	if(to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
		if(window.sessionStorage.getItem('jndxyjsuser')) { // 判断是否登录
			next()
		} else { // 没登录则跳转到登录界面
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			})
		}
	} else {
		next()
	}
})

export default router