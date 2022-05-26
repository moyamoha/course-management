<template>
  <v-container class="content py-10">
    <v-row>
      <v-col sm="8" md="6" lg="4" xs="10">
        <p class="text-subtitle-2">Recently active courses</p>
        <v-carousel v-model="model" cycle :show-arrows="false" progress progress-color="success">
          <v-carousel-item
            v-for="course in ongoings"
            :key="course._id"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <CourseCard :code="course.code"></CourseCard>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col md="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CourseCard from '@/components/CourseCard.vue'
export default {
    methods: {
        ...mapActions(["fetchCourses"])
    },
    computed: {
      ...mapGetters(['allCourses']),
      ongoings() {
        return this.allCourses.filter(c => c.state === 'ongoing')
      }
    },
    created() {
        this.fetchCourses();
    },
    components: { CourseCard }
}
</script>

<style scoped>
  .content {
    height: 100%;
  }
</style>