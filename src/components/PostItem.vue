<template>
	<div class="post">
		<div>
			<div><strong>Название</strong> {{ post.title }}</div>
			<div style="margin-top: 10px">
				<strong>Описание</strong> {{ post.body }}
			</div>
		</div>
		<div class="post__btns">
			<my-button @click="$router.push(`/pages/${post.id}`)">Открыть</my-button>
			<my-button
				@click="$emit('remove', post)"
				style="border-color: red; color: red"
				>Delete</my-button
			>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.post {
	margin-top: 15px;
	padding: 15px;
	border: 2px solid green;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.post__btns {
	display: flex;
}
</style>
