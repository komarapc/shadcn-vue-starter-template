<script setup lang="ts">
import { PropType } from 'vue';
type EducationBackground = {
  id: string;
  institution: string;
  year: string;
  degree: string;
};
const props = defineProps({
  educationBackgrounds: Array as PropType<EducationBackground[]>,
  showUpdateProfileButton: {
    type: Boolean,
    default: false,
  },
  showDeleteButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    v-for="education in educationBackgrounds"
    :key="education.id"
    class="relative flex items-center justify-between"
  >
    <div class="border-l-4 border-primary space-y-2">
      <div class="pl-4 text-sm text-muted-foreground">
        {{ education.year }}
      </div>
      <div class="pl-4 text-sm font-medium">
        {{ education.institution }}
      </div>
      <div class="pl-4 text-sm text-muted-foreground">
        {{ education.degree }}
      </div>
    </div>
    <div class="flex items-center justify-end gap-2">
      <v-button v-if="showUpdateProfileButton" size="icon">
        <icon icon="heroicons-solid:pencil" class="w-6 h-6" />
      </v-button>
      <v-button v-if="showDeleteButton" size="icon" variant="destructive">
        <icon icon="heroicons-solid:trash" class="w-6 h-6" />
      </v-button>
    </div>
  </div>
</template>

<style scoped></style>
