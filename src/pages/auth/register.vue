<script setup lang="ts">
import { AuthRegister } from "@/components/views/auth";
import { BlueprintAuthenticated } from "@/components/layouts/blueprint";
import { useSeoMeta } from "@unhead/vue";
useSeoMeta({
  title: "Register",
  description: "Create an account to get started",
});
</script>
<template>
  <blueprint-authenticated>
    <auth-register />
  </blueprint-authenticated>
</template>
