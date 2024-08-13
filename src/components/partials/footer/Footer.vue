<script setup lang="ts">
const year = new Date().getFullYear();
defineProps<{ author: string }>();
</script>
<template>
  <div class="h-20 text-center flex flex-col items-center justify-center">
    <span class="text-muted-foreground">
      © {{ year }} {{ author }}. All rights reserved.
    </span>
  </div>
</template>
