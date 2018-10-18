import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/login.vue'
import index from '@/page/common/index.vue'
import home from '@/page/home/home.vue'
import list from '@/page/list/list.vue'
import person from '@/page/person/person.vue'

Vue.use(Router)

export default new Router({
	routes: [
	{ path: '*', redirect: '/index/home' },
	{ path: '/', redirect: '/index/home' },
	{
		path: '/index',
		component: index,
		children: [
		{
			path: '/index/home',
			component: home,
		},
		{
			path: '/index/list',
			component: list,
		},
		{
			path: '/index/person',
			component: person,
		},
		]
	},
	{
		path: '/login',
		component: login
	}
	]
})
