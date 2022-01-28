<template>
	<form @submit.prevent>
		<h3>Создание поста</h3>
		<my-input
			v-focus
			v-model="post.title"
			type="text"
			placeholder="Название поста"
		/>
		<my-input v-model="post.body" type="text" placeholder="Описание поста" />

		<my-button class="btn" @click="createPost">Создать</my-button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				title: '',
				body: '',
			},
		};
	},
	methods: {
		createPost() {
			if (this.post.title === '' || this.post.body === '') {
				return;
			} else {
				this.post.id = Date.now();

				this.$emit('create', this.post);

				this.post = {
					title: '',
					body: '',
				};
			}
		},
	},
};
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
}

.btn {
	margin-top: 15px;
}
</style>
