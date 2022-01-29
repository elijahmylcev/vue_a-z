<template>
	<div>
		<h1>{{ $store.getters.doubleLikes }}</h1>
		<div>
			<my-button @click="$store.commit('incrementLikes')">Лайк</my-button>
			<my-button @click="$store.commit('decrementLikes')">Дизлайк</my-button>
		</div>
		<h1>Страноца с постами</h1>
		<my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>
		<div class="app__btns">
			<my-button @click="this.dialogVisible = true" class="createPost"
				>Создать пост</my-button
			>

			<my-select v-model="selectedSort" :options="sortOptions"></my-select>
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
import axios from 'axios';

export default {
	components: {
		PostForm,
		PostList,
	},
	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostsLoading: false,
			selectedSort: '',
			searchQuery: '',
			totalPages: 0,
			page: 1,
			limit: 10,
			sortOptions: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По содержанию' },
			],
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
		async fetchPosts() {
			try {
				this.isPostsLoading = true;

				const response = await axios(
					'https://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				);
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				);
				this.posts = response.data;
			} catch (e) {
				console.log(e);
			} finally {
				this.isPostsLoading = false;
			}
		},
		async loadMorePosts() {
			try {
				this.page += 1;

				const response = await axios(
					'https://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				);
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				);
				this.posts = [...this.posts, ...response.data];
			} catch (e) {
				console.log(e);
			} finally {
				this.isPostsLoading = false;
			}
		},
		// changePage(pageNumber) {
		// 	this.page = pageNumber;
		// },
	},
	mounted() {
		this.fetchPosts();
	},
	computed: {
		sortedPosts() {
			return [...this.posts].sort((post1, post2) => {
				return post1[this.selectedSort]?.localeCompare(
					post2[this.selectedSort]
				);
			});
		},
		sortedAndSearchedPosts() {
			return this.sortedPosts.filter(post =>
				post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			);
		},
	},
	watch: {
		// page() {
		// 	this.fetchPosts();
		// },
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
