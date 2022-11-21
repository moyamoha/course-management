import router from "@/router";
import axios from "axios";

const state = {
  courses: [],
  courseError: "",
};

const getters = {
  allCourses: (state) => state.courses,
  courseError: (state) => state.courseError,
};

const actions = {
  async fetchCourses({ commit }) {
    const res = await axios.get("/courses/");
    commit("setCourses", res.data);
  },

  async addCourseToDb({ commit }, course) {
    try {
      const res = await axios.post("/courses/", course);
      if (res.status === 201) {
        commit("addCourse", res.data);
        commit("setCourseError", "");
        router.push("/dashboard/all");
      }
    } catch (err) {
      commit(
        "setCourseError",
        err.response.data.message || "Something unexpected happened"
      );
    }
  },

  async deleteCourseFromDb({ commit, state }, code) {
    try {
      axios.delete("/courses/" + code);
      const indOfDeleted = state.courses.map((c) => c.code).indexOf(code);
      commit("deleteCourse", indOfDeleted);
      commit("setCourseError", "");
      router.push("/dashboard/all");
    } catch (err) {
      console.log(err);
      commit("setCourseError", err.response.data.message);
    }
  },

  async markCourseAsCompleted({ commit, state }, { code, result }) {
    try {
      const indOfModified = state.courses.map((c) => c.code).indexOf(code);
      const res = await axios.put("/courses/" + code, {
        ...state.courses[indOfModified],
        result: result,
        state: "completed",
      });
      commit("changeCourse", { index: indOfModified, course: res.data });
      commit("setCourseError", "");
    } catch (err) {
      commit("setCourseError", err.response.data.message);
    }
  },

  async startCourse({ commit, state }, code) {
    try {
      const indOfModified = state.courses.map((c) => c.code).indexOf(code);
      const res = await axios.put("/courses/" + code, {
        ...state.courses[indOfModified],
        state: "ongoing",
      });
      commit("changeCourse", { index: indOfModified, course: res.data });
      commit("setCourseError", "");
    } catch (err) {
      commit("setCourseError", err.response.data.message);
    }
  },

  async downloadJson({ commit }) {
    try {
      const response = await axios.get("/download", { responseType: "blob" });
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fileLink = document.createElement("a");
      fileLink.href = fileURL;
      const fileName = response.headers["content-disposition"]
        .split("=")[1]
        .split("'")[1];
      fileLink.setAttribute("download", fileName);
      fileLink.setAttribute("target", "_blank");
      document.body.appendChild(fileLink);
      fileLink.click();
      fileLink.remove();
    } catch (err) {
      console.log(err.response.data.message);
    }
  },
};

const mutations = {
  setCourses: (state, courses) => (state.courses = courses),
  addCourse: (state, course) => state.courses.push(course),
  setCourseError: (state, msg) => (state.courseError = msg),
  changeCourse: (state, { index, course }) => (state.courses[index] = course),
  deleteCourse: (state, index) => state.courses.splice(index, 1),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
