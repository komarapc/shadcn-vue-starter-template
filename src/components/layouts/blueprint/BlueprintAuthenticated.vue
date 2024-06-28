<script setup lang="ts">
import { FrameContent } from "@/components/layouts/frame";
import { SidebarLayout } from "@/components/layouts/sidebar";
import { AppBarLayout } from "@/components/layouts/app-bar";
</script>

<template>
  <frame-content class="flex">
    <sidebar-layout />
    <div class="w-full lg:ml-[20rem]">
      <app-bar-layout />
      <div class="p-4 space-y-6">
        <slot />
      </div>
    </div>
  </frame-content>
</template>

<style scoped></style>
