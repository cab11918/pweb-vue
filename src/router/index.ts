import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "../views/home.vue";
import Vuex from "../views/Vuex.vue";
import About from "../views/about.vue";
import Work from "../views/work.vue";
import Article from "../views/article.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: Vuex,
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("../views/Axios.vue"), // 懒加载组件
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/article",
    name: "article",
    component: Article,
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});

export default router;
