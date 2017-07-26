export default {
	path: "/video",
	meta: {
		requiresAuth: true
	},
//	redirect: '/video/funny',
	component(resolve) {
		require.ensure(['views/video/index.vue'], () => {
			resolve(require('views/video/index.vue'));
		})
	}
}