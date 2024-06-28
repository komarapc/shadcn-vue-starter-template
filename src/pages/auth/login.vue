<script setup lang="ts">
import { BlueprintAuthenticated } from "@/components/layouts/blueprint";
import { AuthLogin } from "@/components/views/auth";
import { useBreadcrumbsStore } from "@/stores/layout";
import { useSeoMeta } from "@unhead/vue";
useSeoMeta({
  title: "Login",
  description: "Login to your account",
});
const { setBreadcrumbs } = useBreadcrumbsStore();
setBreadcrumbs([
  { label: "Home", to: "/" },
  { label: "Pages" },
  { label: "Auth" },
  { label: "Login", to: "/pages/auth/login" },
]);
</script>
<template>
  <blueprint-authenticated>
    <auth-login />
  </blueprint-authenticated>
</template>
