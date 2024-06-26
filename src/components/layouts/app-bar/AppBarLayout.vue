<script setup lang="ts">
import { useNavigationMenu, useThemeStore } from "@/stores";
import { Button } from "@/components/ui/button";
import { User } from "@/components/ui/user";

import { BrandLogo } from "@/components/ui/brand";
import { computed } from "vue";
const theme = useThemeStore();
const themeIcon = computed(() =>
  theme.darkMode
    ? "line-md:moon-twotone-loop"
    : "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
);
const navMenu = useNavigationMenu();
</script>

<template>
  <div class="w-full p-4 h-16 flex items-center justify-between">
    <div class="mr-4">
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
    <div class="w-full lg:hidden">
      <BrandLogo />
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
      <user name="Izmi" role="Admin" url="" direction="right" />
    </div>
  </div>
</template>
