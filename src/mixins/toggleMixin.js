export default {
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		hideDialog(event) {
			if (event.target.className === 'dialog') {
				this.$emit('update:show', false);
			}
		},
	},
	mounted() {},
};
