<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" class="actions-panel">
        <ActionsNav></ActionsNav>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ActionsNav from '../components/ActionsNav'

export default {
  components: {
    ActionsNav,
  }
}
</script>

<style>
  .actions-panel {
    border-right: 1px solid tomato;
    min-height: 90vh;
  }
</style>