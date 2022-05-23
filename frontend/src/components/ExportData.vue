<template>
  <v-btn @click="exportJson" block text elevation="0">
    Import data
  </v-btn>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions(['downloadJson']),
      exportJson() {
        this.downloadJson()
      }
    },
  }
</script>
