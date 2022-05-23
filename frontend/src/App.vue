<template>
  <v-app>
    <TopNavbar></TopNavbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TopNavbar from './components/TopNavbar'
import ActionsNav from './components/ActionsNav';

export default {
    components: {
        TopNavbar,
        ActionsNav
    },
    name: "App",
    data: () => ({
    //
    }),
};
</script>

<style>
  .actions-panel {
    background-color: #f3f5f7;
    border-right: 1px solid #e4e4e4;
    min-height: 100vh;
  }
</style>
