<script setup lang="ts">
import { formatDate } from "@/lib/utils";
import { nanoid } from "nanoid";

type RecentActivity = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "created" | "updated" | "deleted";
};

const recentActivities: RecentActivity[] = [
  {
    id: nanoid(),
    title: "Create new project",
    description: "Create new project with name of X",
    date: "2022-02-20",
    status: "created",
  },
  {
    id: nanoid(),
    title: "Update project",
    description: "Update project with name of X",
    date: "2022-02-20",
    status: "updated",
  },
  {
    id: nanoid(),
    title: "Delete project",
    description: "Delete project with name of X",
    date: "2022-02-20",
    status: "deleted",
  },
];

const getRecentActivityIcon = (status: RecentActivity["status"]) => {
  switch (status) {
    case "created":
      return "heroicons-outline:plus-circle";
    case "updated":
      return "heroicons-outline:pencil-alt";
    case "deleted":
      return "heroicons-outline:trash";
  }
};
const getColorMap = (status: RecentActivity["status"]) => {
  switch (status) {
    case "created":
      return "bg-green-500";
    case "updated":
      return "bg-yellow-500";
    case "deleted":
      return "bg-red-500";
  }
};
</script>
<template>
  <v-card class="">
    <v-card-header>
      <v-card-title> Recent Activities </v-card-title>
    </v-card-header>
    <v-card-content class="">
      <div
        v-for="(activity, i) in recentActivities"
        :key="activity.id"
        class="flex gap-4 relative"
      >
        <div
          :class="[
            'w-1 relative',
            getColorMap(activity.status),
            i == 0 && 'rounded-t-lg',
            i == recentActivities.length - 1 && 'rounded-b-lg',
          ]"
        >
          <div
            :class="[
              'w-4 h-4 rounded-full absolute top-3 -left-1.5',
              getColorMap(activity.status),
            ]"
          ></div>
        </div>
        <div class="space-y-1 py-4 w-full pl-4">
          <div class="text-sm text-muted-foreground">
            {{ formatDate(activity.date) }}
          </div>
          <div class="font-medium">
            {{ activity.title }}
          </div>
          <div class="text-sm text-muted-foreground">
            {{ activity.description }}
          </div>
        </div>
      </div>
    </v-card-content>
  </v-card>
</template>
