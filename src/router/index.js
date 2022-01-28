import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage';
import About from '@/pages/About';

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/pages',
		component: PostPage,
	},
	{
		path: '/about',
		component: About,
	},
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	// 		import(/* webpackChunkName: "about" */ '../views/About.vue'),
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
