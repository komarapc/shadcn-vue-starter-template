<script setup lang="ts">
import { nanoid } from 'nanoid';
import { Button as VButton } from '@/components/ui/button';
import ProfileWorkRecordItem from '@/components/partials/profile/ProfileWorkRecordItem.vue';
const props = defineProps({
  showAddButton: {
    type: Boolean,
    default: false,
  },
  showUpdateButton: {
    type: Boolean,
    default: false,
  },
  showDeleteButton: {
    type: Boolean,
    default: false,
  },
});
type WorkRecord = {
  id: string;
  company: string;
  position: string;
  year: string;
};

const workRecords: WorkRecord[] = [
  {
    id: nanoid(),
    company: 'PT. XSomecompany',
    position: 'Software Engineer',
    year: '2020 - Present',
  },
  {
    id: nanoid(),
    company: 'PT. Somecompany',
    position: 'Senior Software Engineer',
    year: '2022 - Present',
  },
];
</script>
<template>
  <v-card class="">
    <v-card-header class="flex flex-row justify-between w-full">
      <div class="">
        <v-card-title> Work Records </v-card-title>
        <v-card-description>
          See all your work records here
        </v-card-description>
      </div>
      <div>
        <v-button v-if="showAddButton">Add New</v-button>
      </div>
    </v-card-header>
    <v-card-content class="w-full">
      <profile-work-record-item :work-records="workRecords" />
    </v-card-content>
  </v-card>
</template>
