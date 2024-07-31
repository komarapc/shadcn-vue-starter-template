<script setup lang="ts">
import { useAttrs } from 'vue';
import { useThemeStore } from '@/stores';

const attrs = useAttrs();
const theme = useThemeStore();
</script>

<template>
  <div
    v-bind="attrs"
    :class="[
      theme.darkMode ? 'dark' : '',
      'w-full min-h-screen bg-background text-foreground ',
    ]"
  >
    <slot />
  </div>
</template>

<style scoped></style>
