<template>
  <v-text-field
    prepend-inner-icon="mdi-magnify" 
    class="mx-2 my-0" 
    placeholder="Search for course"
    v-model="query"
    @click:prepend-inner="handleSubmit"
    @change="handleSubmit"
   >
  </v-text-field>
</template>

<script>

  export default {
    data: () => ({
      query: ""
    }),
    methods: {
      handleSubmit() {
        console.log(this.query)
      }
    }
  }
</script>