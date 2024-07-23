<script setup lang="ts">
import { useAuthStore, useThemeStore } from '@/stores';
import avatarPlaceholder from '@/assets/img/avatar.png';
import { useRouter } from 'vue-router';
const theme = useThemeStore();
const auth = useAuthStore();
const router = useRouter();
const logoSocials = [
  'logos:facebook',
  'logos:whatsapp-icon',
  'logos:google-gmail',
  'skill-icons:instagram',
];

const props = defineProps({
  showUpdateProfileButton: {
    type: Boolean,
    default: true,
  },
  showBackButton: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="rounded-lg shadow overflow-hidden">
    <v-card
      :class="[
        'w-full min-h-[200px] lg:min-h-[280px] rounded-none relative',
        theme.darkMode ? 'bg-portage-800' : 'bg-portage-800',
      ]"
    >
      <v-button
        v-if="showBackButton"
        class="absolute top-6 left-6 space-x-1"
        variant="default"
        @click="router.push({ name: 'profile' })"
      >
        <icon icon="heroicons-solid:arrow-left" width="16" />
        <span>Back</span>
      </v-button>
    </v-card>
    <div class="w-full bg-card text-card-foreground relative p-6">
      <div
        class="w-40 h-40 rounded-full border-4 border-white bg-primary absolute top-[-90px]"
      >
        <img :src="avatarPlaceholder" alt="" srcset="" />
      </div>
      <div class="mt-16 flex flex-col lg:flex-row justify-between gap-6">
        <div class="w-full space-y-4">
          <div>
            <h1 class="text-2xl font-bold">{{ auth.user?.name! }}</h1>
            <p class="text-sm text-muted-foreground">
              {{ auth.user?.email }}
            </p>
          </div>
          <p class="text-sm">{{ auth.user?.role.name }} at Somecompany</p>
          <!-- country -->
          <div class="flex items center gap-2 text-sm">
            <icon icon="heroicons-outline:location-marker" class="w-4 h-4" />
            <span>Indonesia,</span>
            <span>Palembang</span>
          </div>
          <v-button
            class="space-x-2"
            v-if="showUpdateProfileButton"
            @click="router.push({ name: 'update-profile' })"
          >
            <icon icon="basil:edit-outline" width="24" />
            <span> Update Account </span>
          </v-button>
          <div class="flex items-center gap-4 lg:absolute lg:top-5 right-8">
            <div
              v-for="item in logoSocials"
              class="flex items-center justify-center rounded-lg bg-muted p-2"
            >
              <icon :icon="item" class="w-full" width="32"></icon>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
