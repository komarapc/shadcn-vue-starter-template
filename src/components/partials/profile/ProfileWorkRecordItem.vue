<script setup lang="ts">
type WorkRecord = {
  id: string;
  company: string;
  position: string;
  year: string;
};
const props = defineProps({
  workRecords: Array<WorkRecord>,
});
</script>

<template>
  <div v-for="work in workRecords" :key="work.id" class="relative">
    <div
      :class="['w-4 h-4 rounded-full absolute top-6 -left-1.5 bg-primary']"
    ></div>

    <div class="border-l-4 border-primary/60 space-y-2 py-6">
      <div class="pl-6 text-sm text-muted-foreground">
        {{ work.year }}
      </div>
      <div class="pl-6 text-sm font-medium">
        {{ work.company }}
      </div>
      <div class="pl-6 text-sm text-muted-foreground">
        {{ work.position }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
