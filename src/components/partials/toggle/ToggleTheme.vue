<script setup lang="ts">
import { useThemeStore } from "@/stores";
import { computed, watchEffect } from "vue";

const theme = useThemeStore();
const themeIcon = computed(() =>
  theme.darkMode
    ? "line-md:moon-twotone-loop"
    : "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
);
</script>

<template>
  <Button
    size="icon"
    variant="outline"
    class="text-foreground"
    @click="theme.toggleDarkMode()"
  >
    <icon :icon="themeIcon" width="24" height="24" />
  </Button>
</template>
