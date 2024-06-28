<script setup lang="ts">
import { BlueprintAuthenticated } from "@/components/layouts/blueprint";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useBreadcrumbsStore } from "@/stores/layout";
import { useSeoMeta } from "@unhead/vue";
import {
  type DateValue,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { dashboardStatisticTiles } from "@/data/mock";
import { ref, Ref } from "vue";
import { numberFormat } from "@/lib/utils";
useSeoMeta({
  title: "Dashboard",
  description: "Officia pariatur eu minim commodo velit ut ad.",
  ogTitle: "Dashboard",
  ogDescription: "Officia pariatur eu minim commodo velit ut ad.",
});
const { setBreadcrumbs } = useBreadcrumbsStore();

setBreadcrumbs([
  { label: "Home", to: "/dashboard" },
  { label: "Dashboard", to: "/dashboard" },
]);
const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;
</script>

<template>
  <blueprint-authenticated>
    <div class="grid lg:grid-cols-4 gap-6">
      <div class="w-full" v-for="item in dashboardStatisticTiles">
        <card class="shadow-sm">
          <card-header class="relative">
            <card-title class="text-md tracking-normal text-card-foreground/60">
              {{ item.label }}
            </card-title>
            <div class="flex items-center text-2xl font-bold">
              <span>{{ item.symbols }}</span>
              <span>{{ numberFormat(item.value) }}</span>
            </div>
            <card-description>
              {{ item.description }}
            </card-description>
            <icon
              v-if="item.icon"
              :icon="item.icon"
              class="absolute top-6 right-6"
              width="24"
              height="24"
            />
          </card-header>
        </card>
      </div>
    </div>
  </blueprint-authenticated>
</template>

<style scoped></style>
