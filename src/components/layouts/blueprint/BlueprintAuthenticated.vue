<script setup lang="ts">
import { FrameContent } from '@/components/layouts/frame';
import { SidebarLayout } from '@/components/layouts/sidebar';
import { AppBarLayout } from '@/components/layouts/app-bar';
import { AuthProvider } from '@/components/provider';
import { Footer } from '@/components/partials/footer';
const year = new Date().getFullYear();
</script>

<template>
  <auth-provider>
    <frame-content class="flex">
      <sidebar-layout />
      <div class="w-full lg:ml-[20rem] flex flex-col justify-between">
        <div>
          <app-bar-layout />
          <div class="p-6 space-y-6 max-w-screen-2xl mx-auto">
            <slot />
          </div>
        </div>
        <Footer author="izmikomar.com" />
      </div>
    </frame-content>
  </auth-provider>
</template>

<style scoped></style>
