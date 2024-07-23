<script setup lang="ts">
import { useBreadcrumbsStore } from '@/stores/layout';
import { useSeoMeta } from '@unhead/vue';
import { UpdateProfile } from '@/components/views/profile';
useSeoMeta({
  title: 'Update Profile',
  description: 'Update your profile information',
});
const breadcumbs = useBreadcrumbsStore();

breadcumbs.setBreadcrumbs([
  { label: 'Home' },
  { label: 'Profile' },
  { label: 'Update' },
]);
</script>
<template>
  <update-profile />
</template>
