<template>
  <v-container class="mt-5">
    <v-row class="d-flex justify-center">
      <v-col xs="11" sm="8" md="4">
        <p class="text--primary mb-10">Please login to your account using your username and password</p>
        <v-alert v-show="loginError !== ''" color="red lighten-2" dense dismissible type="error">{{loginError}}</v-alert>
        <v-form class="login-form px-0 py-3" ref="form" lazy-validation @submit="onSubmit">
          <v-text-field
           clearable
           label="Username"
           v-model="username"
           dense
           outlined
           :rules="[required]"
          >
          </v-text-field>
          <v-text-field
           clearable
           label="Password"
           :type="typeOfPassField"
           v-model="password"
           dense
           outlined
           :rules="[required]"
           :append-icon="eyeIcon"
           @click:append="showPass = !showPass"
          >
          </v-text-field>
          <v-btn color="primary" type="submit">Login</v-btn>
        </v-form>
        <p class="text--secondary mt-5">
          Don't have an account? <router-link to="/signup">Sign up</router-link>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from '@/router'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    username: '',
    password: '',
    showPass: false
  }),
  methods: {
    ...mapActions(['loginUser']),
    onSubmit(e) {
      e.preventDefault()
      if (this.$refs.form.validate()) {
        this.loginUser({
          username: this.username,
          password: this.password 
        })
      } else {
        return
      }
    },
    required(v) {
      return v.length > 0 || 'This field is required'
    }
  },
  computed: {
    ...mapGetters(['loginError']),
    eyeIcon() {
      return this.showPass ? 'mdi-eye' : 'mdi-eye-off'
    },
    typeOfPassField() {
      return this.showPass ? 'text' : 'password'
    }
  }

}
</script>

<style scoped>
  .login-form {
    border-bottom: 1px solid #ddd;
  }
</style>