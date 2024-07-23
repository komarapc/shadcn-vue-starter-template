<script setup lang="ts">
import {
  ProfileJumbotron,
  ProfilePerformanceOverview,
  ProfileRecentActivities,
  ProfileTabMenu,
} from '@/components/partials/profile';
</script>
<template>
  <blueprint-authenticated>
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="w-full lg:w-8/12 space-y-6">
        <profile-jumbotron
          :show-update-profile-button="false"
          :show-back-button="true"
        />
        <profile-tab-menu />
      </div>
      <div class="w-full lg:w-4/12 space-y-6 hidden lg:block">
        <div class="w-full space-y-6 sticky top-24">
          <profile-performance-overview />
          <profile-recent-activities />
        </div>
      </div>
    </div>
  </blueprint-authenticated>
</template>
