import { ref, onMounted } from 'vue';
import axios from 'axios';

export default function usePosts(limit) {
	const posts = ref([]);
	const totalPages = ref(0);
	const isPostsLoading = ref(true);
	const fetching = async () => {
		try {
			const response = await axios(
				'https://jsonplaceholder.typicode.com/posts',
				{
					params: {
						_page: 1,
						_limit: limit,
					},
				}
			);
			totalPages.value = Math.ceil(response.headers['x-total-count'] / limit);
			posts.value = response.data;
		} catch (e) {
			console.log(e);
		} finally {
			isPostsLoading.value = false;
		}
	};

	onMounted(fetching);
	return {
		posts,
		isPostsLoading,
		totalPages,
	};
}
