<template>
  <v-container class="d-flex justify-center flex-column stats-cont py-10">
    <v-row>
      <v-col><CourseDistrib></CourseDistrib></v-col>
      <v-col><OngoingRatio></OngoingRatio></v-col>
      <v-col><DoneRatio></DoneRatio></v-col>
    </v-row>
    <v-row>
      <v-col><CoursesBubble></CoursesBubble></v-col>
    </v-row>
  </v-container>
</template>

<script>
import CourseDistrib from "@/components/CourseDistrib.vue";
import CoursesBubble from "@/components/CoursesBubble.vue";
import OngoingRatio from "@/components/OngoingRatio.vue";
import DoneRatio from "@/components/DoneRatio.vue";
export default {
  components: {
    CourseDistrib,
    CoursesBubble,
    OngoingRatio,
    DoneRatio,
  },
};
</script>

<style scoped>
.stats-cont {
  min-height: 93vh;
}
</style>
