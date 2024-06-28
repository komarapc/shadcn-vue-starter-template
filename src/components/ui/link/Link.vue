<script setup lang="ts">
import {useAttrs} from "vue";

const props = defineProps({
  to: {
    type: String,
    default: "",
  },

})
const attr = useAttrs()
</script>

<template>
<router-link :to="to" v-bind="attr" :class="[
    'text-primary hover:underline underline-offset-4'
]">
  <slot/>
</router-link>
</template>

<style scoped>

</style>