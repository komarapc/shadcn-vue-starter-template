<script setup lang="ts">
import { useAuthStore } from "@/stores";
import { watchEffect } from "vue";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();
watchEffect(() => {
  auth.checkAuth();
});

// watch for auth changes
watchEffect(() => {
  if (!auth.isAuth) {
    router.push({ name: "login" });
  }
});
</script>

<template>
  <div v-if="auth.isAuth">
    <slot />
  </div>
  <div v-else></div>
</template>
