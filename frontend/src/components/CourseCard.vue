<template>
  <v-card elevation="0">
    <v-card-title class="text-subtitle-1 mb-2">{{course ? course.name : ''}}</v-card-title>
    <v-card-subtitle class="text-subsubtitle-2">{{course ? course.code : ''}}</v-card-subtitle>
    <v-divider></v-divider>
    <CourseCardBody :course="course"></CourseCardBody>
    <v-divider></v-divider>
    <CourseCardActions :course="course" :changeCourseState="changeCourseState" :changeCourseResult="changeCourseResult"></CourseCardActions>
  </v-card>
</template>

<script>
import CourseCardBody from '@/components/CourseCardBody.vue'
import CourseCardActions from '@/components/CourseCardActions.vue'
import { mapGetters } from 'vuex'
export default {
  props: ['code'],
  components: {
    CourseCardBody,
    CourseCardActions
  },
  computed: {
    ...mapGetters(['allCourses'])
  },
  data() {
    return {
      course: {
        name: '',
        code: '',
        level:'',
        language: '',
        scale: '',
        scope: 0,
        state: '',
        result: '',
      }
    }
  },
  methods: {
    changeCourseState(v) {
      this.course.state = v
    },
  },
  mounted() {
    this.course = {
      ...this.allCourses.find(c => c.code === this.code)
    }
  }
}
</script>