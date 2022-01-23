<template>
	<div>
		<form></form>
		<div class="post" v-for="post in posts">
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
		};
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

.post {
	padding: 15px;
	border: 2px solid green;
}
</style>
