<script setup lang="ts">
import { useAttrs } from "vue";

const attr = useAttrs();
</script>
<template>
  <div class="flex items-center gap-2 text-emerald-700" v-bind="attr">
    <icon icon="logos:vue" width="32" height="32" />
    <h4 class="uppercase font-roboto-condensed font-medium hidden lg:block">
      Template
    </h4>
  </div>
</template>
