<template>
  <v-app>
    <TopNavbar></TopNavbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import TopNavbar from './components/TopNavbar.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    TopNavbar
  }
};
</script>
