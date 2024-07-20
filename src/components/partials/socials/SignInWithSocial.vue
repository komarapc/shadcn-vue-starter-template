<script lang="ts" setup>
import { useThemeStore } from "@/stores";
import { SeparatorText } from "@/components/partials/separator";
const theme = useThemeStore();
</script>

<template>
  <SeparatorText text="Continue with" />
  <div class="flex items-center justify-center gap-6">
    <icon
      icon="logos:google-icon"
      width="32"
      height="32"
      class="cursor-pointer"
    />
    <icon
      icon="devicon:github"
      :width="32"
      class="cursor-pointer text-primary bg-white rounded-full"
    />
    <icon icon="logos:facebook" width="32" height="32" class="cursor-pointer" />
  </div>
</template>
