<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div className="flex items-center gap-4">
    <div className="w-full">
      <Separator className="w-full" />
    </div>
    <div className="text-center min-w-36">{{ text }}</div>
    <div className="w-full">
      <Separator className="w-full" />
    </div>
  </div>
</template>
