<template>
  <v-container class="pt-10">
    <v-row>
      <span class="text-subtitle-2">Recent courses</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus eligendi explicabo quos quod exercitationem ipsam perferendis molestiae doloribus iusto dicta vel velit facere deserunt, sed, animi totam excepturi cum!</p>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['fetchCourses'])
  },
  created() {
    this.fetchCourses()
  }
}
</script>