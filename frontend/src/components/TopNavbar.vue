<template>
    <div
    >
      <v-toolbar dense dark elevation="0">
        <v-toolbar-title>
          <v-btn elevation="0" text class="no-hover">Course Manager</v-btn>
        </v-toolbar-title>
        <div class="flex">
          <v-btn @click="exam" text small>Contact</v-btn>
        </div>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon @click="exam">mdi-login</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }, 
  methods: {
    exam() {
      console.log("Just to test")
    }
  }
}
</script>


<style>
.no-hover::before {
  display: none;
}
</style>