<template>
  <v-card-actions class="py-3">
    <v-btn color="red lighten-2" class="mr-2" outlined dense small @click="deleteCourse">Delete</v-btn>
    <v-dialog width="300" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" v-bind="attrs" v-on="on" dense outlined small v-if="course.state === 'ongoing'">Mark as completed</v-btn>
        <v-btn color="success" @click="start" dense outlined small v-else-if="course.state === 'notStarted'">Start course</v-btn>
      </template>
      <v-card class="pa-3">
        <v-card-title>Please choose a result</v-card-title>
        <v-select outlined dense class="mx-2" placeholder="Result of course" v-model="course.result" :items="availableResults"></v-select>
        <v-btn outlined color="primary" class="mx-2" @click="markCourseAsDone">Ok</v-btn>
      </v-card>
    </v-dialog>
  </v-card-actions>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['course', 'changeCourseState'],
  data() {
    return {
      dialog: false,
      resultsHyvHyl: ["Hyväksytty", "Hylätty"],
      results0To5: ['0', '1', '2', '3', '4', '5'],
    }
  },
  methods: {
    ...mapActions(['markCourseAsCompleted', 'deleteCourseFromDb', 'startCourse']),
    deleteCourse() {
      this.deleteCourseFromDb(this.course.code)
    },
    markCourseAsDone() {
      this.markCourseAsCompleted({code: this.course.code, result: this.course.result})
      this.dialog = false
      this.changeCourseState("completed")
    }, 
    start() {
      this.startCourse(this.course.code)
      this.changeCourseState("ongoing")
    }
  },
  computed: {
    availableResults() {
      return this.course.scale === 'Hylätty-Hyväksytty' ? this.resultsHyvHyl : this.results0To5
    },
  }
}
</script>