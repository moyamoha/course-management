<template>
  <v-card elevation="4" class="pa-4 pt-0">
    <v-card-title>Completed courses from total<br /></v-card-title>
    <canvas id="completed"></canvas>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  computed: mapGetters(["allCourses"]),
  mounted() {
    const ctx = document.getElementById("completed");
    const totalCredits = this.allCourses.reduce((prev, currC) => {
      return prev + currC.scope;
    }, 0);
    const doneCreds = this.allCourses
      .filter((c) => c.state === "completed")
      .reduce((prev, currC) => {
        return prev + currC.scope;
      }, 0);
    const accompData = [totalCredits - doneCreds, doneCreds];
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["active/notStarted", "Completed"],
        datasets: [
          {
            data: accompData,
            backgroundColor: [
              "rgba(66, 133, 244, .1)",
              "rgba(66, 133, 244, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
    });
  },
};
</script>
