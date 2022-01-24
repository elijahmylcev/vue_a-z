<template>
	<div class="app">
		<form>
			<h3>Создание поста</h3>
			<input
				v-bind:value="title"
				class="input"
				type="text"
				placeholder="Название поста"
			/>
			<input
				v-bind:value="body"
				class="input"
				type="text"
				placeholder="Описание поста"
			/>

			<button class="btn" @click="createPost">Создать</button>
		</form>
		<div class="post" v-for="post in posts" :key="post.id">
			<div><strong>Название</strong> {{ post.title }}</div>
			<div><strong>Описание</strong> {{ post.body }}</div>
		</div>
	</div>
</template>

<script>
export default {
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
			title,
			body,
		};
	},
	methods: {
		createPost() {},
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

form {
	display: flex;
	flex-direction: column;
}

.post {
	padding: 15px;
	border: 2px solid green;
}

.input {
	display: block;
	margin: 10px auto 0 auto;
	width: 100%;
	border: 1px solid teal;
	padding: 10px 15px;
}

.btn {
	align-self: flex-end;
	margin-top: 10px;
	padding: 10px 15px;
	background: none;
	color: teal;
	border: 1px solid teal;
}
</style>
