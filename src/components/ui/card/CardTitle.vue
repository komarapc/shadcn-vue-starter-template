<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <h6 :class="cn('font-semibold leading-none tracking-tight', props.class)">
    <slot />
  </h6>
</template>
