<template>
  <v-text-field
    prepend-inner-icon="mdi-magnify" 
    class="mx-2 my-2" 
    placeholder="Search for course"
    @input="handleChange"
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
      handleChange(value) {
        this.query = value
      },
      handleSubmit() {
        console.log(this.query)
      }
    }
  }
</script>