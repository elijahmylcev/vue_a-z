<template>
	<button class="btn" @click="createPost">
		<slot></slot>
	</button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
	align-self: flex-end;
	margin-top: 10px;
	padding: 10px 15px;
	background: none;
	color: teal;
	border: 1px solid teal;
}
</style>
