<script setup lang="ts">
import { useBreadcrumbsStore } from '@/stores/layout';
import { useSeoMeta } from '@unhead/vue';
import { ProfilePage } from '@/components/views/profile';

useSeoMeta({
  title: 'Profile',
  description: 'Officia pariatur eu minim commodo velit ut ad.',
});

const breadcumbs = useBreadcrumbsStore();

breadcumbs.setBreadcrumbs([{ label: 'Home' }, { label: 'Profile' }]);
</script>
<template>
  <profile-page />
</template>
