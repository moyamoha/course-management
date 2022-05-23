<template>
  <v-sheet class="main-sheet">
    <v-img src="@/assets/banner.png" v-show="isLargeEnough"></v-img>
    <v-container class="main-cont d-flex" v-if="!isLargeEnough">
      <v-row class="d-flex justify-center py-md-12 py-sm-10">
        <v-col md="6" sm="8" xs="12">
          <IntroPart></IntroPart>
        </v-col>
      </v-row>
    </v-container>
    <div v-else class="img-intro">
      <IntroPart></IntroPart>
    </div>
  </v-sheet>
</template>

<script>
import IntroPart from '@/components/IntroPart.vue';
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
  components: { IntroPart }
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
  }


</style>