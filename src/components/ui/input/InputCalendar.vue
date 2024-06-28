<script setup lang="ts">
import { PropType, ref, useAttrs, watch, watchEffect } from "vue";
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  today,
} from "@internationalized/date";

import { CalendarIcon } from "@radix-icons/vue";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/stores";

const df = new DateFormatter("en-US", {
  dateStyle: "long",
});

const items = [
  { value: 0, label: "Today" },
  { value: 1, label: "Tomorrow" },
  { value: 3, label: "In 3 days" },
  { value: 7, label: "In a week" },
  { value: 30, label: "In a month" },
  { value: 365, label: "In a year" },
];

const value = ref<DateValue>();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const startYear = 1970;
const endYear = 2030;
const selectedMonth = ref<number>(new Date().getMonth() + 1);
const selectedYear = ref<number>(new Date().getFullYear());
const attr = useAttrs();
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="
          cn(
            'w-[280px] justify-start text-left font-normal',
            !value && 'text-muted-foreground'
          )
        "
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{
          value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"
        }}
      </Button>
    </PopoverTrigger>
    <PopoverContent :class="['flex w-auto flex-col gap-y-2 p-2 ']">
      <Select
        @update:model-value="
          (v) => {
            if (!v) return;
            value = today(getLocalTimeZone()).add({ days: Number(v) });
          }
        "
      >
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="item in items"
            :key="item.value"
            :value="item.value.toString()"
          >
            {{ item.label }}
          </SelectItem>
        </SelectContent>
      </Select>
      <div class="flex items-center gap-1">
        <Select
          @update:model-value="
            (v) => {
              selectedMonth = Number(v);
              if (selectedYear !== null) {
                value = today(getLocalTimeZone()).set({
                  year: selectedYear,
                  month: selectedMonth + 1,
                });
              }
            }
          "
        >
          <SelectTrigger>
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="(month, index) in months"
              :key="index"
              :value="index.toString()"
            >
              {{ month }}
            </SelectItem>
          </SelectContent>
        </Select>
        <Select
          @update:model-value="
            (v) => {
              selectedYear = Number(v);
              if (selectedMonth !== null) {
                value = today(getLocalTimeZone()).set({
                  year: selectedYear,
                  month: selectedMonth + 1,
                });
              }
            }
          "
        >
          <SelectTrigger>
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="year in Array.from(
                { length: endYear - startYear + 1 },
                (_, i) => startYear + i
              )"
              :key="year"
              :value="year.toString()"
            >
              {{ year }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Calendar v-bind="attr" v-model="value" />
    </PopoverContent>
  </Popover>
</template>
