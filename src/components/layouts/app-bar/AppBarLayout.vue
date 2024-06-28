<script setup lang="ts">
import { useNavigationMenu, useThemeStore } from "@/stores";
import { Button } from "@/components/ui/button";
import { User } from "@/components/ui/user";

import { BrandLogo } from "@/components/ui/brand";
import { computed } from "vue";
import { useBreadcrumbsStore } from "@/stores/layout";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const theme = useThemeStore();
const themeIcon = computed(() =>
  theme.darkMode
    ? "line-md:moon-twotone-loop"
    : "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
);
const navMenu = useNavigationMenu();
const { breadcrumbs } = useBreadcrumbsStore();
const breadcrumbsLength = computed(() => breadcrumbs.length);
const breadcrumbsList = computed(() => {
  const lists = [...breadcrumbs];
  if (breadcrumbsLength.value > 3) {
    lists.splice(1, breadcrumbsLength.value - 3, {
      label: "...",
    });
  }
  return lists;
});
</script>

<template>
  <div class="w-full p-4 h-16 flex items-center justify-between">
    <div class="w-full lg:hidden">
      <BrandLogo />
    </div>
    <div class="w-full flex items-center justify-between">
      <div class="w-full hidden lg:block">
        <breadcrumb>
          <breadcrumb-list>
            <template
              v-for="(breadcrumb, index) in breadcrumbsList"
              :key="breadcrumb.label"
            >
              <breadcrumb-item>
                <breadcrumb-link :to="breadcrumb.to">
                  {{ breadcrumb.label }}
                </breadcrumb-link>
                <Breadcrumb-separator v-if="index !== breadcrumbsLength - 1" />
              </breadcrumb-item>
            </template>
          </breadcrumb-list>
        </breadcrumb>
      </div>
      <div class="w-full flex items-center justify-end gap-4">
        <Button size="icon" variant="outline">
          <icon icon="ic:round-notifications" width="24" height="24" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          class="text-foreground"
          @click="theme.toggleDarkMode()"
        >
          <icon :icon="themeIcon" width="24" height="24" />
        </Button>
        <dropdown-menu>
          <dropdown-menu-trigger>
            <user name="Izmi" role="Admin" url="" direction="right" />
          </dropdown-menu-trigger>
          <dropdown-menu-content
            :class="[
              'w-48 mr-4 spay-4',
              theme.darkMode ? 'dark shadow-lg' : '',
            ]"
          >
            <dropdown-menu-label> Account </dropdown-menu-label>
            <dropdown-menu-separator class="my-2" />
            <dropdown-menu-item class="flex items-center gap-2">
              <icon icon="ic:round-account-circle" width="24" height="24" />
              <span> Profile </span>
            </dropdown-menu-item>
            <dropdown-menu-item class="flex items-center gap-2">
              <icon icon="ic:round-settings" width="24" height="24" />
              <span> Settings </span>
            </dropdown-menu-item>
            <dropdown-menu-item class="flex items-center gap-2">
              <icon icon="ic:round-logout" width="24" height="24" />
              <span> Logout </span>
            </dropdown-menu-item>
          </dropdown-menu-content>
        </dropdown-menu>
        <button
          :class="[
            'p-2 rounded-lg lg:hidden',
            theme.darkMode ? '' : 'hover:bg-white/60',
          ]"
          @click="navMenu.toggle()"
        >
          <icon icon="ic:round-menu" width="32" height="32" />
        </button>
      </div>
    </div>
  </div>
</template>
