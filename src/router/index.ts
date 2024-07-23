import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import("@/pages/index.vue"), name: "index" },
  {
    path: "/menu-level",
    children: [
      {
        path: "level-1.1.1",
        component: () => import("@/pages/menu-level/MenuLevel.vue"),
      },
      {
        path: "level-1.1.2",
        component: () => import("@/pages/menu-level/Level-2.vue"),
      },
    ],
  },
  {
    path: "/pages",
    children: [
      {
        path: "auth",
        children: [
          {
            path: "login",
            component: () => import("@/pages/auth/login.vue"),
            name: "login",
          },
          {
            path: "register",
            component: () => import("@/pages/auth/register.vue"),
          },
          {
            path: "forgot-password",
            name: "forgot-password",
            component: () => import("@/pages/auth/forgot-password.vue"),
          },
          {
            path: "reset-password",
            name: "reset-password",
            component: () => import("@/pages/auth/reset-password.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/profile",
    children: [
      {
        path: "",
        component: () => import("@/pages/profile/index.vue"),
        name: "profile",
      },
      {
        path: "update",
        component: () => import("@/pages/profile/update.vue"),
        name: "update-profile",
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/404.vue"),
    name: "404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
