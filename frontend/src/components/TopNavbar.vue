<template>
    <div
    >
      <v-toolbar dense dark elevation="0">
        <v-toolbar-title>
          <v-app-bar-nav-icon>
            <v-img src="@/assets/logo.png" id="site-logo" width="50px" height="50px"></v-img>
          </v-app-bar-nav-icon>
          <v-btn elevation="0" text class="no-hover" @click="goToHomePage">Course Manager</v-btn>
        </v-toolbar-title>
        <div class="flex">
          <v-btn @click="goToContacts" text small>Contact</v-btn>
        </div>
        <v-spacer></v-spacer>
      </v-toolbar>
    </div>
</template>

<script>
import router from '@/router'

  export default {
    methods: {
      goToContacts() {
        console.log("Just to test")
      },
      goToHomePage() {
        router.push("/")
      }
    }
  }
</script>


<style>
  .no-hover::before {
    display: none;
  }

  #site-logo {
    border-width: 50%;
  }
</style>