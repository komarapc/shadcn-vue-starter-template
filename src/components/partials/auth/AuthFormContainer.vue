<script setup lang="ts">
import { useThemeStore } from "@/stores";
const { darkMode } = useThemeStore();
</script>
<template>
  <div
    class="w-full lg:w-1/2 min-h-[60vh] lg:h-[100vh] p-10 lg:px-24 rounded-t-[32px] lg:rounded-t-none lg:rounded-tl-[32px] lg:rounded-l-[32px] flex items-center justify-center relative"
    :class="[
      darkMode && 'dark',
      'bg-card text-card-foreground',
      'shadow-top-3xl transition-colors duration-300 ease-in-out',
    ]"
  >
    <div class="absolute top-6 h-8 w-8">
      <toggle-theme />
    </div>
    <slot />
  </div>
</template>
