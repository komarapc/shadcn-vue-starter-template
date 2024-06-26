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
