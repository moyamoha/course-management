import router from "@/router";
import axios from "axios";
import jwtDecode from "jwt-decode";

const state = {
  loggedIn: false,
  user: null,
  loginError: "",
  signupError: "",
};

const getters = {
  loggedIn: (state) => state.loggedIn,
  loggedInUser: (state) => state.user,
  loginError: (state) => state.loginError,
  signupError: (state) => state.signupError,
};

const actions = {
  async loginUser({ commit }, { username, password }) {
    try {
      const response = await axios.post("/auth/login", {
        username,
        password,
      });
      const resData = response.data;
      const tokenDecoded = jwtDecode(resData.token);
      localStorage.setItem("token", resData.token);
      const user = {
        name: tokenDecoded.name,
        email: tokenDecoded.email,
        dateJoined: tokenDecoded.dateJoined,
      };
      commit("setUser", user);
      router.push("/dashboard");
    } catch (err) {
      commit("setLoginError", err.response.data.message || err.message);
    }
  },
  logoutUser({ commit }) {
    localStorage.removeItem("token");
    commit("setUser", null);
    router.push("/");
  },
  async registerUser({ commit }, newUser) {
    try {
      await axios.post("/auth/register-user", newUser);
      commit("setSignupError", "");
      router.push("login");
    } catch (err) {
      commit("setSignupError", err.response.data.message);
    }
  },

  async changeName({ commit, state }, name) {
    try {
      await axios.patch("/auth/change-name", name);
      commit("setUser", {
        ...state.user,
        name: `${name.firstname} ${name.lastname}`,
      });
    } catch (error) {}
  },
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
    state.loggedIn = user !== null && user !== undefined;
  },
  setLoginError: (state, error) => (state.loginError = error),
  setSignupError: (state, error) => (state.signupError = error),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
