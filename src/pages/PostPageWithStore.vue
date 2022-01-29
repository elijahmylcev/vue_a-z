<template>
	<div>
		<!-- <h1>
			{{
				$store.state.isAuth
					? 'Пользователь авторизован'
					: 'Авторизуйтесь, чтобы использовать сервис'
			}}
		</h1>
		<h1>{{ $store.getters.doubleLikes }}</h1>
		<div>
			<my-button @click="$store.commit('incrementLikes')">Лайк</my-button>
			<my-button @click="$store.commit('decrementLikes')">Дизлайк</my-button>
		</div> -->

		<h1>Страноца с постами</h1>
		<my-input
			v-focus
			:model-value="searchQuery"
			@update:model-value="setSearchQuery"
			placeholder="Поиск..."
		></my-input>

		<div class="app__btns">
			<my-button @click="this.dialogVisible = true" class="createPost"
				>Создать пост</my-button
			>

			<my-select
				:model-value="selectedSort"
				@update:model-value="setSelectedSort"
				:options="sortOptions"
			></my-select>
		</div>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<post-list
			@remove="removePost"
			:posts="sortedAndSearchedPosts"
			v-if="!isPostsLoading"
		/>
		<div v-else>Идет загрузка...</div>
		<div v-intersection="loadMorePosts" class="observer"></div>
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
	components: {
		PostForm,
		PostList,
	},
	data() {
		return {
			dialogVisible: false,
		};
	},
	methods: {
		...mapMutations({
			setPage: 'post/setPage',
			setSearchQuery: 'post/setSearchQuery',
			setSelectedSort: 'post/setSelectedSort',
		}),
		...mapActions({
			loadMorePosts: 'post/loadMorePosts',
			fetchPosts: 'post/fetchPosts',
		}),
		createPost(post) {
			this.posts.push(post);
			this.dialogVisible = false;
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id);
		},

		// changePage(pageNumber) {
		// 	this.page = pageNumber;
		// },
	},
	mounted() {
		this.fetchPosts();
	},
	computed: {
		...mapState({
			posts: state => state.post.posts,
			isPostsLoading: state => state.post.isPostsLoading,
			selectedSort: state => state.post.selectedSort,
			searchQuery: state => state.post.searchQuery,
			totalPages: state => state.post.totalPages,
			page: state => state.post.page,
			limit: state => state.post.limit,
			sortOptions: state => state.post.sortOptions,
		}),
		...mapGetters({
			sortedPosts: 'post/sortedPosts',
			sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
		}),
	},
};
</script>

<style>
.app__btns {
	display: flex;
	justify-content: space-between;
	margin: 15px 0;
}

.observer {
	height: 30px;
}
</style>
