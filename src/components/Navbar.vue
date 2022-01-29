<template>
	<div class="navbar">
		<div @click="$router.push('/')" class="logo">Vue3</div>
		<div class="navbar__btns">
			<my-button @click="$router.push('/store')" class="btn">Store</my-button>
			<my-button @click="$router.push('/pages')" class="btn">Посты</my-button>
			<my-button @click="$router.push('/about')" class="btns">О нас</my-button>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
	cursor: pointer;
}
.navbar {
	padding: 0 15px;
	height: 50px;
	background-color: lightgray;
	box-shadow: 2px 2px 4px gray;
	display: flex;
	align-items: center;
}
.navbar__btns {
	margin-left: auto;
}
.btn {
	margin-left: 10px;
}
</style>
