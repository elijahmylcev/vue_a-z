<template>
	<div class="app">
		<PostForm @create="createPost" />
		<PostList :posts="posts" />
	</div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
export default {
	components: {
		PostForm,
		PostList,
	},
	data() {
		return {
			posts: [
				{
					id: 1,
					title: 'Пост о JS',
					body: 'JS язык с динамической типизацией',
				},
				{
					id: 1,
					title: 'Пост о JS',
					body: 'JS делает сайты интерактивными',
				},
				{
					id: 1,
					title: 'Пост о JS',
					body: 'JS был представлен в 1995 году',
				},
			],
		};
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
		},
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 15px;
}
</style>
