<template>
<v-card-text>
    <v-col class="d-flex justify-space-between">
      <span class="text-body-1">level</span>
      <span>{{ course ? course.level : 'N/A' }}</span>
    </v-col>
    <v-col class="d-flex justify-space-between">
      <span class="text-body-1">language</span>
      <span>{{ course ? course.language : 'N/A'}}</span>
    </v-col>
    <v-col class="d-flex justify-space-between">
      <span class="text-body-1">scale</span>
      <span>{{ course ? course.scale : 'N/A' }}</span>       
    </v-col>
    <v-col class="d-flex justify-space-between">
      <span class="text-body-1">scope</span>
      <span>{{ course ? (course.scope + ' op') : 'N/A' }}</span>
    </v-col>
    <v-col class="d-flex justify-space-between">
      <span class="text-body-1">state</span>
      <v-chip :color="chipColor">{{course ? course.state : 'N/A'}}</v-chip>
    </v-col>
    <v-col class="d-flex justify-space-between" v-if="showResult">
      <span class="text-body-1">result</span>
      <span>{{ course ? course.result : 'N/A'  }}</span>
    </v-col>
  </v-card-text>
</template>

<script>
export default {
  props: ['course'],
  computed: {
    chipColor() {
      if (this.course.state === 'completed') return 'success'
      else if (this.course.state === 'ongoing') return 'orange'
      else if (this.course.state === 'notStarted') return 'primary'
      else return 'grey'
    },
    showResult() {
      return this.course && this.course.state === 'completed'
    }
  }
}
</script>