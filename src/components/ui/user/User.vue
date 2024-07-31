<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { computed, PropType } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  direction: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
});

const fallBackName = computed(() => {
  return props.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
});
</script>
<template>
  <div class="flex items-center gap-4">
    <avatar
      :class="[
        'bg-primary text-primary-foreground',
        direction === 'left' ? 'order-1' : 'order-2',
      ]"
    >
      <avatar-image :src="url" alt="@radix-vue" />
      <avatar-fallback>{{ fallBackName }}</avatar-fallback>
    </avatar>
    <div
      :class="[
        'flex flex-col items-start',
        direction === 'left' ? 'order-2' : 'order-1',
      ]"
    >
      <span>{{ name }}</span>
      <span class="text-xs text-gray-500 truncate"> {{ role }} </span>
    </div>
  </div>
</template>
