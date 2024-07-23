<script setup lang="ts">
import {
  ProfileJumbotron,
  ProfilePersonalInformation,
  ProfileEducationBackground,
  ProfileWorkRecord,
  ProfilePerformanceOverview,
  ProfileRecentActivities,
} from '@/components/partials/profile';
</script>
<template>
  <blueprint-authenticated>
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="w-full lg:w-8/12 overflow-hidden space-y-6">
        <profile-jumbotron />
        <div class="w-full grid lg:grid-cols-2 gap-6">
          <profile-performance-overview />
          <profile-recent-activities />
        </div>
      </div>
      <div class="w-full lg:w-4/12">
        <div class="space-y-6 sticky top-24">
          <profile-personal-information />
          <profile-education-background />
          <profile-work-record />
        </div>
      </div>
    </div>
  </blueprint-authenticated>
</template>
