<script setup lang="ts">
import { useAttrs } from 'vue';

const attr = useAttrs();
</script>

<template>
  <div
    class="px-4 py-4 max-h-[calc(100vh-120px)] overflow-y-scroll"
    v-bind="attr"
  >
    <slot />
  </div>
</template>

<style scoped></style>
