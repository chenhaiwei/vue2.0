export default {
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: require('./views/home.vue')
		},
		{
			path: '/list',
			component: require('./views/list.vue')
		},
		{
			path: '/details/:id',
			name: 'details',
			component: require('./views/details.vue')
		}
	]
}
