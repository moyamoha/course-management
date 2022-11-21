<template>
  <v-list class="navlist py-0">
    <ProfileSection />
    <v-list-item @click="goToDashboard">Main</v-list-item>
    <v-list-item @click="goToAll">View all</v-list-item>
    <v-list-item @click="goToNew">Create course</v-list-item>
    <v-list-item @click="goToStats">Stats</v-list-item>
    <v-list-item @click="importData">Import data</v-list-item>
  </v-list>
</template>

<script>
import router from "@/router";
import ProfileSection from "./ProfileSection.vue";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["downloadJson"]),
    goToDashboard() {
      router.push("/dashboard");
    },
    goToAll() {
      router.push("/dashboard/all");
    },
    goToNew() {
      router.push("/dashboard/new");
    },
    goToStats() {
      router.push("/dashboard/stats");
    },
    importData() {
      this.downloadJson();
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
