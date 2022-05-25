<template>
    <v-card elevation="4" class="pa-4 pt-0">
      <v-card-title>Credits distribution by state</v-card-title>
      <div>
        <canvas id="credits"></canvas>
      </div>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  computed: {
    ...mapGetters(['allCourses'])
  },
  mounted() {
    const ctx = document.getElementById('credits');
    const data = [
      this.allCourses.filter(c => c.state === "notStarted").reduce((prev, currC) => {
        return prev + currC.scope
      }, 0),
      this.allCourses.filter(c => c.state === "onGoing").reduce((prev, currC) => {
        return prev + currC.scope
      }, 0),
      this.allCourses.filter(c => c.state === "accomplished").reduce((prev, currC) => {
        return prev + currC.scope
      }, 0),
    ]
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Not started", "Ongoing", "Accomplished"],
            datasets: [{
                data: data,
                backgroundColor: ['#4285F4', '#FF9800', '#007E33'],
                borderWidth: 4
            }]
        },
    });
  }
}
</script>
