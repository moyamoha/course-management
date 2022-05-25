<template>
  <div>
    <p class="text--primary text-subtitle-1 font-weight-medium intro-text">
      Keeping track of university courses is hard in a busy life of student, So we made this application to help students manage their courses 
      easily and keep track of their progress in their studies.
    </p>
    <v-btn elevation="1" outlined large @click="getStarted">
      <span>Get started</span>
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '@/router'
export default {
  computed: {
    ...mapGetters(['loggedIn'])
  },
  methods: {
    getStarted() {
      if (this.loggedIn) router.push("/dashboard")
      else router.push("/login")
    }
  },
}
</script>

<style scoped>
  .intro-text {
    letter-spacing: 1.1rem;
    line-height: 2rem;
    font-size: 1.05rem;
  }
</style>
