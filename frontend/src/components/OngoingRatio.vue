<template>
  <v-card elevation="4" class="pa-4 pt-0">
    <v-card-title>Active courses from total<br /></v-card-title>
    <div>
      <canvas id="planned"></canvas>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  computed: mapGetters(["allCourses"]),
  mounted() {
    const ctx = document.getElementById("planned");
    const totalCredits = this.allCourses.reduce((prev, currC) => {
      return prev + currC.scope;
    }, 0);
    const ongoingCreds = this.allCourses
      .filter((c) => c.state === "ongoing")
      .reduce((prev, currC) => {
        return prev + currC.scope;
      }, 0);
    const activeData = [totalCredits - ongoingCreds, ongoingCreds];
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["completed/notstarted", "Active"],
        datasets: [
          {
            data: activeData,
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
