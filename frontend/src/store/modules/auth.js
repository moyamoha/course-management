import router from '@/router'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const state = {
	loggedIn: false,
	user: null,
	loginError: '',
	signupError: '',
}

const getters = {
	loggedIn: (state) => state.loggedIn,
	loggedInUser: (state) => state.user,
	loginError: (state) => state.loginError,
	signupError: (state) => state.signupError,
}

const actions = {
	async loginUser({ commit }, { username, password }) {
		try {
			const response = await axios.post('/auth/login', {
				username,
				password,
			})
			const resData = response.data
			const tokenDecoded = jwtDecode(resData.token)
			localStorage.setItem('token', resData.token)
			const user = {
				name: tokenDecoded.name,
				email: tokenDecoded.email,
				dateJoined: tokenDecoded.dateJoined,
				profile: tokenDecoded.profile,
			}
			commit('setUser', user)
			router.push('/dashboard')
		} catch (err) {
			commit('setLoginError', err.response.data.message || err.message)
		}
	},
	async setProfile({ commit }, image) {
		const formData = new FormData()
		formData.append('profile', image)
		try {
			const resp = await axios.put('/auth/set-profile', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			const user = {
				name: resp.data.firstname + ' ' + resp.data.lastname,
				email: resp.data.email,
				dateJoined: resp.data.dateJoined,
				profile: resp.data.profile,
			}
			commit('setUser', user)
		} catch (err) {
			console.log(err.message)
		}
	},
	logoutUser({ commit }) {
		localStorage.removeItem('token')
		commit('setUser', null)
		router.push('/')
	},
	async registerUser({ commit }, newUser) {
		try {
			await axios.post('/auth/register-user', newUser)
			commit('setSignupError', '')
			router.push('login')
		} catch (err) {
			commit('setSignupError', err.response.data.message)
		}
	},
}

const mutations = {
	setUser: (state, user) => {
		console.log(user)
		state.user = user
		state.loggedIn = user !== null && user !== undefined
	},
	setLoginError: (state, error) => (state.loginError = error),
	setSignupError: (state, error) => (state.signupError = error),
}

export default {
	state,
	getters,
	actions,
	mutations,
}
