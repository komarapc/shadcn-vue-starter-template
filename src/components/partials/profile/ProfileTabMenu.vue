<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ref, watchEffect } from 'vue';
import {
  ProfileFormAccount,
  ProfileFormEducationBackground,
  ProfileFormPersonalInformation,
  ProfileFormWorkRecord,
} from '@/components/forms/profile';
import { LocationQuery, useRouter } from 'vue-router';
const router = useRouter();
const query: LocationQuery = router.currentRoute.value.query;
const tabLists = ref([
  { label: 'Account', value: 'account', content: ProfileFormAccount },
  {
    label: 'Personal Information',
    value: 'per',
    content: ProfileFormPersonalInformation,
  },
  {
    label: 'Education Background',
    value: 'edu',
    content: ProfileFormEducationBackground,
  },
  { label: 'Work Record', value: 'work', content: ProfileFormWorkRecord },
]);
const activeTabs = ref(tabLists.value[0].value);
watchEffect(() => {
  activeTabs.value = query.q?.toString() || tabLists.value[0].value;
});
</script>

<template>
  <Tabs
    :default-value="activeTabs"
    v-model="activeTabs"
    class="w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 space-x-0 lg:space-x-6"
  >
    <TabsList
      class="w-full lg:w-[420px] flex flex-row lg:flex-col flex-wrap justify-start items-start gap-2 h-full p-2 bg-card text-foreground shadow"
    >
      <TabsTrigger
        v-for="tab in tabLists"
        :value="tab.value"
        variant="default"
        @click="router.push({ query: { q: tab.value } })"
      >
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>
    <TabsContent
      v-for="tab in tabLists"
      :key="tab.label"
      :value="tab.value"
      class="w-full"
    >
      <component :is="tab.content"></component>
    </TabsContent>
  </Tabs>
</template>

<style scoped></style>
