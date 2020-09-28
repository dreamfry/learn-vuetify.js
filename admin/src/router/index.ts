import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/mydemo/icon",
        name: "icon",
        component: () => import("../views/mydemos/Icon.vue"),
      },
      {
        path: "/mydemo/menu",
        name: "menu",
        component: () => import("../views/mydemos/Menu.vue"),
      },
      {
        path: "/mydemo/card",
        name: "card",
        component: () => import("../views/mydemos/Card.vue"),
      },
    ],
  },
  {
    path: "/demo/Baseline",
    name: "baseline",
    component: () => import("../views/demos/Baseline.vue"),
  },
  {
    path: "/demo/BaselineFlipped",
    name: "baseline-flipped",
    component: () => import("../views/demos/BaselineFlipped.vue"),
  },
  {
    path: "/demo/Centered",
    name: "centered",
    component: () => import("../views/demos/Centered.vue"),
  },
  {
    path: "/demo/Complex",
    name: "complex",
    component: () => import("../views/demos/Complex.vue"),
  },
  {
    path: "/demo/Dark",
    name: "dark",
    component: () => import("../views/demos/Dark.vue"),
  },
  {
    path: "/demo/GoogleContacts",
    name: "google-contacts",
    component: () => import("../views/demos/GoogleContacts.vue"),
  },
  {
    path: "/demo/GoogleKeep",
    name: "google-keep",
    component: () => import("../views/demos/GoogleKeep.vue"),
  },
  {
    path: "/demo/GoogleYoutube",
    name: "google-youtube",
    component: () => import("../views/demos/GoogleYoutube.vue"),
  },
  {
    path: "/demo/Sandbox",
    name: "sandbox",
    component: () => import("../views/demos/Sandbox.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
