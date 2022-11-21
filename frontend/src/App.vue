<template>
  <v-app>
    <TopNavbar></TopNavbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TopNavbar from "./components/TopNavbar";
import ActionsNav from "./components/ActionsNav";

export default {
  components: {
    TopNavbar,
    ActionsNav,
  },
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
.actions-panel {
  border-right: 1px solid rgb(218, 218, 218);
  min-height: 100vh;
}
</style>
