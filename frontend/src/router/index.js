import Vue from "vue";
import VueRouter from "vue-router";
import DashboardMain from "../views/DashboardMain.vue";
import DashboardView from "../views/DashboardView.vue";
import AllCoursesView from "../views/AllCoursesView.vue";
import NewCourseView from "../views/NewCourseView.vue";
import SettingsView from "../views/SettingsView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import Stats from "@/views/StatsView.vue";
import Signup from "@/views/SignupView.vue";
import SingleCourse from "@/views/SingleCourseView.vue";
import MainBaseView from "@/views/MainBaseView.vue";
import Contact from "@/views/ContactView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainBaseView,
    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "contact",
        component: Contact,
      },
    ],
  },
  {
    path: "/dashboard",
    component: DashboardView,
    children: [
      {
        path: "",
        component: DashboardMain,
      },
      {
        path: "course/:code",
        component: SingleCourse,
      },

      {
        path: "all",
        component: AllCoursesView,
      },
      {
        path: "settings",
        component: SettingsView,
      },
      {
        path: "new",
        component: NewCourseView,
      },
      {
        path: "stats",
        component: Stats,
      },
    ],
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/signup",
    component: Signup,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.baseUrl,
  routes,
});

export default router;
