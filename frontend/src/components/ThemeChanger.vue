<template>
  <v-btn @click="changeTheme" icon elevation="0" small>
    <v-icon >
      {{themeIcon}}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      // if (this.$vuetify.theme.dark === true) this.$vuetify.theme.dark = false
      // else this.$vuetify.theme.dark = true
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  computed: {
    themeIcon() {
      return this.$vuetify.theme.dark ? 'mdi-brightness-2' : 'mdi-brightness-7'
    },
  }
}
</script>