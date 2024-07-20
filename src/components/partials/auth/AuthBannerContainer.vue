<script setup lang="ts">
const props = defineProps({
  heading: String,
  subheading: String,
});
</script>
<template>
  <div
    class="w-full lg:w-1/2 min-h-[40vh] lg:h-[100vh] flex flex-col items-center justify-center space-y-6"
  >
    <slot name="image" />
    <div class="mb-6 w-full text-center pb-10 space-y-4">
      <h1 class="text-4xl font-bold">{{ heading }}</h1>
      <p class="text-lg">{{ subheading }}</p>
    </div>
  </div>
</template>
