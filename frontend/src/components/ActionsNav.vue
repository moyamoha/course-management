<template>
  <v-list class="navlist py-0">
    <ProfileSection />
    <v-list-item @click="goToDashboard">Main</v-list-item>
    <v-list-item @click="goToAll">View all</v-list-item>
    <v-list-item @click="goToNew">Create course</v-list-item>
  </v-list>
</template>

<script>
import router from "@/router";
import ProfileSection from "./ProfileSection.vue";
export default {
  methods: {
    goToDashboard() {
      router.push("/dashboard");
    },
    goToAll() {
      router.push("/dashboard/all");
    },
    goToNew() {
      router.push("/dashboard/new");
    },
  },
  components: {
    ProfileSection,
  },
};
</script>

<style>
.navlist {
  height: 100% !important;
}
</style>
