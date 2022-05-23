<template>
  <v-expansion-panels flat light class="py-0">
    <v-expansion-panel class="profile mb-3 px-0" @click="expanded = !expanded">
      <v-expansion-panel-header class="px-2 py-0">
        <v-avatar size="40"><img :src="imgSrc"/></v-avatar>
        <span>{{loggedInUser.name}}</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content class=".profile-panel-content">
        <v-btn block text class="action" @click="goToSettings"><i>Settings</i> </v-btn>
        <v-btn block text class="action" @click="logOut"><i>logout</i></v-btn>
        <v-divider v-if="expanded" class="mt-3"></v-divider>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  import router from "@/router"
  import { mapActions, mapGetters } from 'vuex'
  
  export default {
    data: () => ({
      expanded: false
    }),
    methods: {
      ...mapActions(['logoutUser']),
      goToSettings() {
        router.push("/dashboard/settings")
        this.expanded = false
      },
      logOut() {
        this.logoutUser()
        this.expanded = false
      }
    },
    computed: {
      ...mapGetters(['loggedInUser']),
      imgSrc() {
        return 'http://localhost:4000/api/v1/auth/images/' + this.loggedInUser.profile
      }
    }
  }
</script>


<style>
  .profile {
    background-color: #f3f5f7 !important;
  }
  .profile-panel-content {
    border-bottom: 1px solid #dddddd !important;
  }
</style>