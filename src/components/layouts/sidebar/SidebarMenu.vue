<script setup lang="ts">
import {
  SidebarContainer,
  SidebarMenuItem,
} from "@/components/layouts/sidebar";
import { MenuSidebar } from "@/interfaces";
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
          { label: "Login", link: "/auth/login" },
          { label: "Register", link: "/auth/register" },
          { label: "Forgot Password", link: "/auth/forgot-password" },
          { label: "Reset Password", link: "/auth/reset-password" },
        ],
      },
      {
        label: "Error",
        icon: "ic:round-warning",
        children: [
          { label: "404", link: "/error/404" },
          { label: "500", link: "/error/500" },
        ],
      },
    ],
  },
  {
    label: "Settings",
    icon: "ic:round-settings",
    active: false,
    children: [
      {
        label: "Profile",
        link: "/settings/profile",
      },
      {
        label: "Account",
        link: "/settings/account",
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
  <sidebar-container>
    <template v-for="menu in menuSidebars">
      <sidebar-menu-item :menu="menu" />
    </template>
  </sidebar-container>
</template>

<style scoped></style>
