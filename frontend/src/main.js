import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

axios.defaults.baseURL = 'http://16.16.45.119/backend/api/v1'
axios.interceptors.request.use((request) => {
	const token = localStorage.getItem('token')
	if (token) {
		request.headers = {
			Authorization: `Bearer ${token}`,
		}
	}
	return request
})
Vue.config.productionTip = false

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app')
