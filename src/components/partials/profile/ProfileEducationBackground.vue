<script setup lang="ts">
import { nanoid } from 'nanoid';
import { ProfileEducationBackgroundItem } from '@/components/partials/profile';
type EducationBackground = {
  id: string;
  institution: string;
  year: string;
  degree: string;
};
const educationBackgrounds: EducationBackground[] = [
  {
    id: nanoid(),
    institution: 'Universitas Sriwijaya',
    year: '2016 - 2020',
    degree: 'Bachelor of Computer Science',
  },
  {
    id: nanoid(),
    institution: 'Universitas Sriwijaya',
    year: '2020 - 2022',
    degree: 'Master of Computer Science',
  },
];
</script>
<template>
  <v-card class="">
    <v-card-header>
      <v-card-title> Education Background </v-card-title>
    </v-card-header>
    <v-card-content class="w-full space-y-4">
      <profile-education-background-item
        :education-backgrounds="educationBackgrounds"
      />
    </v-card-content>
  </v-card>
</template>
