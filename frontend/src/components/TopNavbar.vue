<template>
	<div>
		<v-toolbar dense dark elevation="0">
			<v-toolbar-title>
				<v-app-bar-nav-icon>
					<v-img
						src="@/assets/logo.png"
						id="site-logo"
						width="50px"
						height="50px"></v-img>
				</v-app-bar-nav-icon>
				<v-btn elevation="0" text @click="goToHomePage" small
					>Course Manager</v-btn
				>
			</v-toolbar-title>
			<div class="flex">
				<v-btn @click="goToContacts" text small>Contact</v-btn>
			</div>
			<v-spacer></v-spacer>
			<ThemeChanger class="mr-1"></ThemeChanger>
		</v-toolbar>
	</div>
</template>

<script>
	import router from '@/router'
	import ThemeChanger from '@/components/ThemeChanger.vue'

	export default {
		methods: {
			goToContacts() {
				router.push('/contact')
			},
			goToHomePage() {
				router.push('/')
			},
		},
		components: {
			ThemeChanger,
		},
	}
</script>

<style>
	.no-hover::before {
		display: none;
	}

	#site-logo {
		border-width: 50%;
	}
</style>
