<script setup lang="ts">
import {FrameContent} from '@/components/layouts/frame'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
</script>
<template>
  <frame-content class="flex items-center justify-center">
    <card class="w-96">
      <card-header>
        <card-title>
          Login
        </card-title>
        <card-description>
          Welcome back! Please login to your account.
        </card-description>
      </card-header>
      <card-content>
        <div class="space-y-6">
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" />
          </div>

          <div class="grid w-full max-w-sm">
            <v-link to="/pages/auth/forgot-password">Forgot Password?</v-link>
          </div>
          <div class="grid w-full max-w-sm space-y-2">
            <v-button class="">Login</v-button>
            <v-button variant="secondary">Register</v-button>
          </div>
        </div>
      </card-content>
    </card>
  </frame-content>
</template>
