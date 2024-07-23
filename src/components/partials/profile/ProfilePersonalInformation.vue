<script setup lang="ts">
import {formatDate} from "@/lib/utils";
import {ref} from "vue";
import {Button as VButton} from "@/components/ui/button";

type PersonalInformation = {
  label: string;
  value: any;
};
const personalInformation: PersonalInformation[] = [
  {label: "Date of Birth", value: formatDate(new Date("1998-02-20"))},
  {label: "Address", value: "Palembang, Karya baru"},
  {label: "Sex", value: "Male"},
  {label: "Blood Type", value: "O+"},
  {label: "Height", value: "167cm"},
  {label: "Weight", value: "54Kg"},
];
const showUpdate = ref(false)
</script>
<template>
  <v-card>
    <v-card-header>
      <v-card-title> Personal Information</v-card-title>
      <v-card-description></v-card-description>
    </v-card-header>
    <v-card-content class="w-full space-y-4">
      <div
          v-for="personalInfo in personalInformation"
          :key="personalInfo.label"
          class="flex items-center justify-between"
      >
        <div class="truncate text-muted-foreground">
          {{ personalInfo.label }}
        </div>
        <div class="font-medium">
          {{ personalInfo.value }}
        </div>
      </div>
    </v-card-content>
  </v-card>
</template>
