<template>
	<div>
		<h1>Страноца с постами</h1>
		<my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>
		<div class="app__btns">
			<my-button class="createPost">Создать пост</my-button>

			<my-select v-model="selectedSort"></my-select>
		</div>
		<my-dialog v-model:show="dialogVisible">
			<post-form />
		</my-dialog>
		<post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
		<div v-else>Идет загрузка...</div>
		-->
		<!-- <div class="page__wrapper">
			<div
				v-for="pageNumber in totalPages"
				:key="pageNumber"
				:class="{
					'current-page': page === pageNumber,
					page: true,
				}"
				@click="changePage(pageNumber)"
			>
				{{ pageNumber }}
			</div>
		</div> -->
	</div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import usePosts from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

export default {
	components: {
		PostForm,
		PostList,
	},
	data() {
		return {
			dialogVisible: false,
			sortOptions: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По содержанию' },
			],
		};
	},
	setup(props) {
		const { posts, totalPages, isPostsLoading } = usePosts(10);
		const { sortedPosts, selectedSort } = useSortedPosts(posts);
		const { searchQuery, sortedAndSearchedPosts } =
			useSortedAndSearchedPosts(sortedPosts);
		return {
			totalPages,
			isPostsLoading,
			selectedSort,
			searchQuery,
			sortedAndSearchedPosts,
		};
	},
};
</script>

<style>
.app__btns {
	display: flex;
	justify-content: space-between;
	margin: 15px 0;
}

/* .page__wrapper {
	display: flex;
	margin-top: 15px;
	justify-content: space-around;
}
.page {
	border: 1px solid rgb(206, 205, 205);
	padding: 10px;
	font-size: 19px;
}
.current-page {
	border: 2px solid teal;
} */
.observer {
	height: 30px;
}
</style>
