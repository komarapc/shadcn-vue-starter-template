<script setup lang="ts">
import { useThemeStore } from "@/stores";
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import imageNotFound from "@/assets/img/404.png";
import { useSeoMeta } from "@unhead/vue";
const router = useRouter();
const theme = useThemeStore();
useSeoMeta({
  title: "404 Not Found",
  description: "The page you are looking for does not exist.",
  ogTitle: "404 Not Found",
  ogDescription: "The page you are looking for does not exist.",
});
</script>

<template>
  <div
    :class="[
      theme.darkMode ? 'dark' : '',
      'bg-background text-foreground/60 w-full min-h-screen',
      'flex flex-col items-center justify-center',
    ]"
  >
    <div class="flex flex-col items-center justify-center my-auto align-middle">
      <img :src="imageNotFound" alt="404" class="w-96 h-96" />

      <div class="mt-10 text-center">
        <p class="text-center mt-2">
          The page you are looking for does not exist.
        </p>
        <Button @click="router.push('/')" class="mt-4">Go back to home </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
