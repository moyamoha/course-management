import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import auth from "./modules/auth";
import courses from "./modules/courses";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    courses,
    auth,
  },
  plugins: [vuexLocal.plugin],
});
