<template>
	<div class="app">
		<h2>Страноца с постами</h2>
		<my-button @click="this.dialogVisible = true" class="createPost"
			>Создать пост</my-button
		>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<post-list @remove="removePost" :posts="posts" />
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
					id: 2,
					title: 'Пост о JS',
					body: 'JS делает сайты интерактивными',
				},
				{
					id: 3,
					title: 'Пост о JS',
					body: 'JS был представлен в 1995 году',
				},
			],
			dialogVisible: false,
		};
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
			this.dialogVisible = false;
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id);
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
.createPost {
	margin: 15px 0 15px 0;
}
</style>
