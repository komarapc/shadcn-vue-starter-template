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
