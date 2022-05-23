<template>
  <div>
    <ProfileSection />
    <v-btn tile block text class="action" @click="goToDashboard">Main</v-btn>
    <v-btn tile block text class="action" @click="goToCurrent">View all</v-btn>
    <v-btn tile block text class="action text-left" @click="goToNew">Create Course</v-btn>
    <v-btn tile block text class="action text-left" @click="goToStats">Stats</v-btn>
    <ExportData></ExportData>
  </div>
</template>

<script>
import router from '@/router'
import ProfileSection from './ProfileSection.vue'
import ExportData from './ExportData.vue'
export default {
  methods: {
    goToDashboard() {
      router.push("/dashboard")
    },
    goToCurrent() {
      router.push("/dashboard/all")
    },
    goToNew() {
      router.push("/dashboard/new")
    },
    goToStats() {
      router.push("/dashboard/stats")
    }
  },
  components: {
    ProfileSection,
    ExportData
  }
}
</script>

<style>
  .action {
    background-color: #f3f5f7 !important;
  }
</style>