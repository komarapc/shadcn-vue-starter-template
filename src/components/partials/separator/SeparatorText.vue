<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="w-full">
      <Separator class="w-full" />
    </div>
    <div class="text-center min-w-36">{{ text }}</div>
    <div class="w-full">
      <Separator class="w-full" />
    </div>
  </div>
</template>
