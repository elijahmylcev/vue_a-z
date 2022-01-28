import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage';
import About from '@/pages/About';
import PostIdPages from '@/pages/PostIdPages';

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
	{
		path: '/pages/:id',
		component: PostIdPages,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
