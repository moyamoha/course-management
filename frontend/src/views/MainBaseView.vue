<template>
  <v-sheet class="main-sheet">
    <v-img src="@/assets/banner_dark.webp" v-show="isLargeEnough" v-if="isDarkMode"></v-img>
    <v-img src="@/assets/banner.webp" v-show="isLargeEnough" v-else></v-img>
    <v-container class="main-cont d-flex" v-if="!isLargeEnough">
      <v-row class="d-flex justify-center py-md-12 py-sm-10">
        <v-col md="6" sm="8" xs="12">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
    <router-view class="img-intro" v-else></router-view>
  </v-sheet>
</template>

<script>
const LG = 1264;
export default {
  data() {
    return {
      isLargeEnough: window.innerWidth >= LG
    };
  },
  created() {
    window.addEventListener("resize", this.decideImageShow);
  },
  destroyed() {
    window.removeEventListener("resize", this.decideImageShow);
  },
  methods: {
    decideImageShow(e) {
      if (window.innerWidth >= LG) {
        this.isLargeEnough = true;
      }
      else {
        this.isLargeEnough = false;
      }
    }
  },
  computed: {
    isDarkMode() {
      return this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped>
  .main-cont {
    height: 93vh;
  }
  .main-sheet {
    background-size: contain;
    height: 94vh;
    width: 100%
  }
  .img-intro {
    position: absolute;
    top: 30%;
    right: 20%;
    width: 40%;
    color: black !important;
  }


</style>