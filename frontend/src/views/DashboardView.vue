<template>
	<v-container fluid>
		<v-dialog v-model="showModal" max-width="600">
			<v-card height="120">
				<v-card-title>Ops</v-card-title>
				<v-divider></v-divider>
				<v-card-text class="text--primary text-body pt-2">
					You are not logged in. <br />
					Redirecting back to login page ...
				</v-card-text>
			</v-card>
		</v-dialog>
		<v-row>
			<v-col sm="3" md="2" class="actions-panel pa-0 ma-0">
				<ActionsNav />
				<v-divider></v-divider>
			</v-col>
			<v-col class="px-0 py-0">
				<router-view></router-view>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import router from '@/router'
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return { showModal: false }
		},
		components: {
			ActionsNav: () => import('@/components/ActionsNav.vue'),
		},
		computed: {
			...mapGetters(['loggedIn']),
		},
		created() {
			if (!this.loggedIn) {
				this.showModal = true
				setTimeout(() => {
					router.replace('/login')
				}, 2000)
			}
		},
	}
</script>
