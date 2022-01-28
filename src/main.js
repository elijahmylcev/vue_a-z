import { createApp } from 'vue';
import App from './App.vue';
import components from './components/UI/index';
import router from './router';
import store from './store';

const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component);
});

app.use(router).mount('#app');
