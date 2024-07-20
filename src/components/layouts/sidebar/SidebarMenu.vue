<script setup lang="ts">
import {
  SidebarContainer,
  SidebarMenuItem,
} from "@/components/layouts/sidebar";
import { MenuSidebar } from "@/interfaces";
import { useAttrs } from "vue";
const attrs = useAttrs();
const menuSidebars: MenuSidebar[] = [
  {
    label: "Dashboard",
    icon: "mage:dashboard-fill",
    active: false,
    link: "/",
  },
  {
    label: "Pages",
    icon: "material-symbols-light:newsmode-outline-rounded",
    active: false,
    children: [
      {
        label: "Auth",
        icon: "material-symbols-light:shield-lock-rounded",
        children: [
          { label: "Login", link: "/pages/auth/login" },
          { label: "Register", link: "/pages/auth/register" },
        ],
      },
      {
        label: "Error",
        icon: "ic:round-warning",
        children: [{ label: "404", link: "/error/404" }],
      },
      {
        label: "Profile",
        icon: "ph:user",
        link: "/profile",
      },
    ],
  },
  {
    label: "Menu Level 1",
    icon: "ic:round-menu",
    active: false,
    children: [
      {
        label: "Menu 1.1",
        active: false,
        icon: "bi:dash",
        children: [
          {
            label: "Menu 1.1.1",
            link: "/menu-level/level-1.1.1",
          },
          {
            label: "Menu 1.1.2",
            link: "/menu-level/level-1.1.2",
          },
        ],
      },
      {
        label: "Menu 1.2",
        icon: "bi:dash",
        active: false,
        children: [
          {
            label: "Menu 1.2.1",
            link: "/menu-level/level-1.2.1",
          },
          {
            label: "Menu 1.2.2",
            link: "/menu-level/level-1.2.2",
          },
        ],
      },
      {
        label: "This is very long text to test the overflow",
        icon: "bi:dash",
        active: false,
        children: [
          {
            label: "Menu 1.3.1",
            link: "/menu-level/level-1.3.1",
          },
          {
            label: "Menu 1.3.2",
            link: "/menu-level/level-1.3.2",
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <sidebar-container v-bind="attrs">
    <template v-for="menu in menuSidebars">
      <sidebar-menu-item :menu="menu" />
    </template>
  </sidebar-container>
</template>

<style scoped></style>
