<template>
	<v-container>
		<v-row class="d-flex pt-10">
			<v-col> Here you can change your profile picture </v-col>
		</v-row>
		<v-row class="d-flex flex-column">
			<v-col md="4" sm="5" class="d-flex flex-column align-center">
				<img
					width="100%"
					height="100%"
					class="rounded-lg"
					:src="profilePicUrl" />
				<v-file-input
					prepend-icon="mdi-camera"
					block
					hide-input
					v-model="profileImg"
					@change="onchange"></v-file-input>
			</v-col>
			<v-col class="d-md-flex" md="8">
				<v-col md="4">
					<div class="d-flex flex-column">
						<label class="mb-2 text-subtitle-2">Name</label>
						<span>{{ loggedInUser.name }}</span>
					</div>
				</v-col>
				<v-col class="d-flex flex-column" md="5">
					<label class="mb-2 text-subtitle-2">Email</label>
					<span>{{ loggedInUser.email }}</span>
				</v-col>
				<v-col class="d-flex flex-column" md="3">
					<label class="mb-2 text-subtitle-2">Joined</label>
					<span>{{
						new Date(loggedInUser.dateJoined).toLocaleDateString()
					}}</span>
				</v-col>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import ProfileSection from '@/components/ProfileSection.vue'
	export default {
		data() {
			return {
				profileImg: null,
			}
		},
		methods: {
			...mapActions(['setProfile']),
			onchange() {
				this.setProfile(this.profileImg)
			},
		},
		computed: {
			...mapGetters(['loggedInUser', 'profilePicUrl']),
		},
		components: { ProfileSection },
	}
</script>
