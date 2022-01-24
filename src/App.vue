<template>
	<div class="app">
		<PostForm />
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
			title: '',
			body: '',
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
		createPost() {
			const newPost = {
				id: Date.now(),
				title: this.title,
				body: this.body,
			};

			this.posts.push(newPost);

			this.title = '';
			this.body = '';
		},
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	margin-top: 15px;
}

.app {
	padding: 15px;
}
</style>
