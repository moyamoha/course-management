import router from "@/router";
import axios from "axios";
import jwtDecode from "jwt-decode";

const state = {
  loggedIn: false,
  user: null,
  loginError: "",
  signupError: "",
  profileUrl: "",
};

const getters = {
  loggedIn: (state) => state.loggedIn,
  loggedInUser: (state) => state.user,
  loginError: (state) => state.loginError,
  signupError: (state) => state.signupError,
  profilePicUrl: (state) => state.profileUrl,
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
      const profileRes = await axios.get(
        "/auth/images/" + tokenDecoded.profile
      );
      const url = profileRes.data.url;
      const user = {
        name: tokenDecoded.name,
        email: tokenDecoded.email,
        dateJoined: tokenDecoded.dateJoined,
        profile: tokenDecoded.profile,
      };
      commit("setProfileUrl", url);
      commit("setUser", user);
      router.push("/dashboard");
    } catch (err) {
      commit("setLoginError", err.response.data.message || err.message);
    }
  },
  async setProfile({ commit }, image) {
    const formData = new FormData();
    formData.append("profile", image);
    try {
      const resp = await axios.put("/auth/set-profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const resData = resp.data;
      const user = {
        name: resData.user.firstname + " " + resData.user.lastname,
        email: resData.user.email,
        dateJoined: resData.user.dateJoined,
        profile: resData.user.profile,
      };
      commit("setUser", user);
      commit("setProfileUrl", resData.profileUrl);
    } catch (err) {
      console.log(err.message);
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
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
    state.loggedIn = user !== null && user !== undefined;
  },
  setLoginError: (state, error) => (state.loginError = error),
  setSignupError: (state, error) => (state.signupError = error),
  setProfileUrl: (state, url) => (state.profileUrl = url),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
