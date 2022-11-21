<template>
  <v-container>
    <v-row class="d-flex justify-center align-center mt-4">
      <v-col md="6" sm="8" xs="10" lg="4">
        <CourseCard :code="$route.params.code"></CourseCard>
        <v-btn
          block
          dense
          outlined
          color="accent"
          class="mt-4 rounded-pill"
          @click="$router.push('/dashboard/all')"
          >Back</v-btn
        >
      </v-col>
      <v-col md="6" sm="8" xs="10" lg="4"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import CourseCardBody from "@/components/CourseCardBody.vue";
import CourseCardActions from "@/components/CourseCardActions.vue";
import CourseCard from "@/components/CourseCard.vue";

export default {
  components: {
    CourseCardBody,
    CourseCardActions,
    CourseCard,
  },
};
</script>
