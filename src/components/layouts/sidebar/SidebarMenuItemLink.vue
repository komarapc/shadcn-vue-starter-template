<script setup lang="ts">
import { MenuSidebar } from '@/interfaces';

import { computed, PropType, useAttrs } from 'vue';
import { useRouter } from 'vue-router';
const attrs = useAttrs();
const props = defineProps({
  menu: {
    type: Object as PropType<MenuSidebar>,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const pathName = useRouter().currentRoute.value.path;
const matchRoute = computed(() => pathName === props.menu.link);
</script>
<template>
  <button
    :class="[
      'w-full flex items-center gap-3 py-2 px-4 text-sm  hover:bg-primary/10  hover:text-primary cursor-pointer rounded-md transition duration-300 ease-in-out',
      isOpen ? ' text-primary' : '',
      matchRoute && !menu.children?.length ? 'text-primary' : '',
    ]"
    v-bind="attrs"
  >
    <icon v-if="menu.icon" :icon="menu.icon" width="24" height="24" />
    <span :class="['flex-1 text-left']">{{ menu.label }}</span>
    <icon
      v-if="menu.children?.length"
      icon="lucide:chevron-down"
      width="16"
      height="16"
      :class="[
        isOpen ? 'transform rotate-180' : '',
        'transition-transform duration-300 ease-in-out',
      ]"
    />
  </button>
</template>
