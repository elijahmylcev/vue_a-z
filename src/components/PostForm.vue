<template>
	<form @submit.prevent>
		<h3>Создание поста</h3>
		<input
			v-bind:value="title"
			@input="title = $event.target.value"
			class="input"
			type="text"
			placeholder="Название поста"
		/>
		<input
			v-bind:value="body"
			@input="body = $event.target.value"
			class="input"
			type="text"
			placeholder="Описание поста"
		/>

		<button class="btn">Создать</button>
	</form>
</template>

<script>
export default {};
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
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
