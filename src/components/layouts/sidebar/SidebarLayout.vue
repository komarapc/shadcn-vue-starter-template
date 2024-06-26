<script setup lang="ts">
import { useAttrs } from "vue";
import { SidebarMenu } from "@/components/layouts/sidebar";
import { BrandLogo } from "@/components/ui/brand";
import { useNavigationMenu, useThemeStore } from "@/stores";
import { Sheet, SheetContent } from "@/components/ui/sheet";
const theme = useThemeStore();
const attrs = useAttrs();
const navMenu = useNavigationMenu();
</script>
<template>
  <div
    class="hidden lg:flex flex-col w-80 border-r shrink-0 shadow-md text-foreground/60"
    v-bind="attrs"
    :class="[theme.darkMode ? '' : 'border-gray-300']"
  >
    <brand-logo class="p-4" />
    <div class="flex-1">
      <sidebar-menu />
    </div>
  </div>
  <div class="lg:hidden">
    <sheet v-bind:open="navMenu.isOpen" @update:open="navMenu.toggle()">
      <sheet-content
        side="left"
        :class="[
          theme.darkMode ? 'dark' : '',
          'text-foreground/60',
          'w-80 p-0',
        ]"
      >
        <brand-logo class="p-4" />
        <div class="flex-1">
          <sidebar-menu />
        </div>
      </sheet-content>
    </sheet>
  </div>
</template>
