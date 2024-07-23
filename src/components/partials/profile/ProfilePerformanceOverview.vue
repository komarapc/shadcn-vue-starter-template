<script setup lang="ts">
import { nanoid } from "nanoid";

type PerformanceOverview = {
  id: string;
  title: string;
  value: number;
  icon: string;
};

const performanceOverviews: PerformanceOverview[] = [
  {
    id: nanoid(),
    title: "Total Projects",
    value: 20,
    icon: "heroicons-outline:document-text",
  },
  {
    id: nanoid(),
    title: "Total Tasks",
    value: 90,
    icon: "heroicons-outline:document-text",
  },
  {
    id: nanoid(),
    title: "Total Teams",
    value: 10,
    icon: "heroicons-outline:user-group",
  },
  {
    id: nanoid(),
    title: "Total Members",
    value: 50,
    icon: "heroicons-outline:user",
  },
];
</script>
<template>
  <v-card class="">
    <v-card-header>
      <v-card-title> Performance Overview </v-card-title>
    </v-card-header>
    <v-card-content class="space-y-8">
      <div
        v-for="overview in performanceOverviews"
        :key="overview.id"
        class="flex items-center gap-4 w-full"
      >
        <div>
          <div
            class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground aspect-square"
          >
            <icon :icon="overview.icon" class="w-6 h-6"></icon>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="text-sm font-medium">{{ overview.title }}</div>
          <div class="flex items-center justify-between w-full gap-6">
            <v-progress class="w-full" v-model="overview.value" />
            <span class="text-muted-foreground">
              {{ overview.value }}
            </span>
          </div>
        </div>
      </div>
    </v-card-content>
  </v-card>
</template>
