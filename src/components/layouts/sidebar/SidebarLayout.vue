<script setup lang="ts">
import { useAttrs } from 'vue';
import { SidebarMenu } from '@/components/layouts/sidebar';
import { BrandLogo } from '@/components/ui/brand';
import { useNavigationMenu, useThemeStore } from '@/stores';
import { Sheet, SheetContent } from '@/components/ui/sheet';
const theme = useThemeStore();
const attrs = useAttrs();
const navMenu = useNavigationMenu();
</script>
<template>
  <div
    class="hidden lg:flex flex-col w-80 shrink-0 text-foreground/90 sticky-sidebar"
    v-bind="attrs"
  >
    <brand-logo class="p-4" />
    <div class="flex-1">
      <sidebar-menu class="" />
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

<style scoped>
.sticky-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 10;
}
</style>
