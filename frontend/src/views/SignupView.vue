<template>
	<v-container class="mt-5">
		<v-row class="d-flex justify-center">
			<v-col xs="11" sm="8" md="4">
				<p class="text--primary mb-10">
					Please fill in the fields and hit signup button to get started
				</p>
				<v-alert
					v-show="signupError !== ''"
					color="red lighten-2"
					dense
					dismissible
					type="error"
					>{{ signupError }}</v-alert
				>
				<v-form class="login-form px-0 py-3" ref="form" @submit="onSubmit">
					<v-text-field
						label="Username"
						v-model="newUser.username"
						dense
						outlined
						:rules="[required]"></v-text-field>
					<v-row>
						<v-col>
							<v-text-field
								label="Firstname"
								v-model="newUser.firstname"
								dense
								outlined
								:rules="[required]"></v-text-field>
						</v-col>
						<v-col
							><v-text-field
								label="Lastname"
								v-model="newUser.lastname"
								dense
								outlined
								:rules="[required]"></v-text-field
						></v-col>
					</v-row>
					<v-text-field
						label="Email"
						v-model="newUser.email"
						type="email"
						dense
						outlined
						:rules="[required, correctEmail]"></v-text-field>
					<v-text-field
						:type="showPassword1"
						label="Password"
						v-model="newUser.password1"
						dense
						outlined
						:rules="[required, min10Char]"
						:append-icon="eyeIcon1"
						@click:append="showPass1 = !showPass1"></v-text-field>
					<v-text-field
						:type="showPassword2"
						label="Repeat password"
						v-model="newUser.password2"
						dense
						outlined
						:rules="[required, min10Char, matchingPasswords]"
						:append-icon="eyeIcon2"
						@click:append="showPass2 = !showPass2"></v-text-field>
					<v-btn color="primary" shaped type="submit">Sign up</v-btn>
				</v-form>
				<p class="text--secondary mt-5">
					Already have an account? <router-link to="/login">Login</router-link>
				</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		data: () => ({
			newUser: {
				username: '',
				password1: '',
				password2: '',
				email: '',
				firstname: '',
				lastname: '',
			},
			showPass1: false,
			showPass2: false,
		}),
		methods: {
			...mapActions(['registerUser']),
			onSubmit(e) {
				e.preventDefault()
				if (!this.$refs.form.validate()) return
				this.registerUser(this.newUser)
			},
			matchingPasswords() {
				return (
					this.newUser.password1 === this.newUser.password2 ||
					'Passwords should match'
				)
			},
			min10Char(v) {
				return (
					v.length >= 10 || 'Passwords should be at least 10 characters long'
				)
			},
			required(v) {
				return v.length > 0 || 'This field is required'
			},
			correctEmail(v) {
				return (
					/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					'Please provide correct email address'
				)
			},
		},

		computed: {
			...mapGetters(['signupError']),
			showPassword1() {
				return this.showPass1 ? 'text' : 'password'
			},
			showPassword2() {
				return this.showPass2 ? 'text' : 'password'
			},
			eyeIcon1() {
				return this.showPass1 ? 'mdi-eye' : 'mdi-eye-off'
			},
			eyeIcon2() {
				return this.showPass2 ? 'mdi-eye' : 'mdi-eye-off'
			},
		},
	}
</script>

<style scoped>
	.login-form {
		border-bottom: 1px solid #ddd;
	}
</style>
