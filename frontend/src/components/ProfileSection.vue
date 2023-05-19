<template>
  <v-list-group>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ loggedInUser.name }}</v-list-item-title>
      </v-list-item-content>
    </template>

    <v-list-item @click="goToSettings" dense>
      <v-list-item-content>
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
    </v-list-item>

    <v-list-item @click="logOut" dense>
      <v-list-item-content>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
  </v-list-group>
</template>

<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["logoutUser"]),
    goToSettings() {
      router.push("/dashboard/settings");
    },
    logOut() {
      this.logoutUser();
      this.expanded = false;
    },
  },
  computed: {
    ...mapGetters(["loggedInUser", "profilePicUrl"]),
  },
};
</script>

<style>
.profile-panel-content {
  border-bottom: 1px solid #dddddd !important;
}
</style>
