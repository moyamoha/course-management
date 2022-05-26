<template>
  <v-card elevation="4" class="pa-4 pt-0">
    <v-card-title>Completed courses and their results</v-card-title>
    <div class="d-flex justify-center">
      <canvas id="bubble"></canvas>
    </div>
</v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
export default {
  computed: mapGetters(['allCourses']),
  mounted() {
    const ctx = document.getElementById('bubble')
    const data = this.allCourses.filter(c => c.state === 'completed' && c.scale === 'Yleinen asteikko, 0-5').map(c => {
      return {x: c.scope, y: c.result, r: parseInt(c.result) + c.scope }
    })
    new Chart(ctx, {
    type: 'bubble',
    data: {
        datasets: [{
          label: 'Courses',
          data: data,
          backgroundColor: 'green',
          borderWidth: 1
        }]
      },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Scope'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Result'
          }
        }
      }
    }
    });
  }
}
</script>