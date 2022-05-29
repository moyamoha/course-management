<template>
	<v-form class="mt-6 px-6 creation-form" ref="form" @submit="onSubmit">
		<v-alert
			dismissible
			dense
			color="red lighten-2"
			type="error"
			v-show="courseError !== ''"
			>{{ this.courseError }}</v-alert
		>
		<p class="text-start">Please fill out in the fields</p>
		<v-text-field
			v-model="newCourse.name"
			label="Course name"
			dense></v-text-field>
		<v-text-field
			v-model="newCourse.code"
			label="Course code"
			dense></v-text-field>
		<v-col md="6" sm="12" class="px-0"
			><v-slider
				min="1"
				max="10"
				dense
				label="Course scope"
				v-model="newCourse.scope"
				thumb-label="always"
				thumb-color="green"></v-slider
		></v-col>

		<v-col md="6" sm="12" class="px-0">
			<v-select
				:items="scaleTypes"
				label="course scale"
				dense
				outlined
				v-model="newCourse.scale"></v-select>
		</v-col>
		<v-text-field
			v-model="newCourse.level"
			label="Course level"
			dense></v-text-field>
		<v-row align-content="center" class="mt-1">
			<v-col class="d-flex align-center">
				<span>Course language</span>
			</v-col>
			<v-col class="d-flex justify-end">
				<v-btn-toggle
					dense
					borderless
					rounded
					color="deep-purple accent-4"
					v-model="newCourse.language">
					<v-btn value="Suomi">Suomi</v-btn>
					<v-btn value="English">English</v-btn>
				</v-btn-toggle>
			</v-col>
		</v-row>
		<v-row align-content="center" class="mt-1">
			<v-col class="d-flex align-center">
				<span>Course state</span>
			</v-col>
			<v-col class="d-flex justify-end">
				<v-btn-toggle
					dense
					borderless
					rounded
					color="deep-purple accent-4"
					v-model="newCourse.state">
					<v-btn value="notStarted">Not started</v-btn>
					<v-btn value="completed">Completed</v-btn>
					<v-btn value="ongoing">Ongoing</v-btn>
				</v-btn-toggle>
			</v-col>
		</v-row>
		<v-col md="6" sm="12" class="px-0 mt-4" v-if="courseIsFinished">
			<v-select
				v-if="isHyvHyl"
				:items="resultsHyvHyl"
				label="Course result"
				dense
				outlined
				v-model="newCourse.result"></v-select>
			<v-select
				v-else
				:items="results0To5"
				label="Course result"
				dense
				v-model="newCourse.result"></v-select>
		</v-col>
		<v-divider class="my-4"></v-divider>
		<v-card-text class="px-0 mt-2 d-flex">
			<v-btn color="purple" class="mr-2" outlined @click="onCancel"
				>Cancel</v-btn
			>
			<v-btn color="success" type="submit" outlined>Save</v-btn>
		</v-card-text>
	</v-form>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	export default {
		data: () => ({
			scaleTypes: ['Hylätty-Hyväksytty', 'Yleinen asteikko, 0-5'],
			resultsHyvHyl: ['Hyväksytty', 'Hylätty'],
			results0To5: ['0', '1', '2', '3', '4', '5'],
			newCourse: {
				name: '',
				code: '',
				scope: 1,
				level: '',
				scale: 'Yleinen asteikko, 0-5',
				language: 'Suomi',
				result: '',
				state: 'notStarted',
			},
		}),
		methods: {
			...mapActions(['addCourseToDb']),
			onSubmit(e) {
				e.preventDefault()
				this.addCourseToDb(this.newCourse)
			},
			onCancel(e) {
				this.$refs.form.reset()
			},
		},
		computed: {
			...mapGetters(['courseError']),
			isHyvHyl() {
				return this.newCourse.scale === 'Hylätty-Hyväksytty'
			},
			courseIsFinished() {
				return this.newCourse.state === 'completed'
			},
		},
	}
</script>

<style scoped>
	.creation-form {
		width: 50% !important;
	}

	@media (max-width: 700px) {
		.creation-form {
			width: 100% !important;
		}
	}
</style>
