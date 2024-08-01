<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue';
import { FrameContent } from '@/components/layouts/frame';
import AuthImg from '@/assets/svg/application.svg';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import {
  AuthContainer,
  AuthBannerContainer,
  AuthFormContainer,
} from '@/components/partials/auth';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'vee-validate';
import { SocialSignIn } from '@/components/partials/socials';
import { useAuthStore } from '@/stores';
import { useRoute, useRouter } from 'vue-router';
import { watchEffect } from 'vue';
useSeoMeta({
  title: 'Login',
  description: 'Login to your account',
});

const schema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
    remember_me: z.boolean().optional(),
  })
);

const { isFieldDirty, handleSubmit, setFieldError } = useForm({
  validationSchema: schema,
});
const auth = useAuthStore();
const router = useRouter();
const onSubmit = handleSubmit(async (values) => {
  const signIn = await auth.login(values.email, values.password);
  if (!signIn?.key) {
    router.push({ path: '/' });
    return;
  }
  if (signIn?.key === 'email') {
    // set error message for email field
    setFieldError(
      'email',
      signIn?.error || "We couldn't find an account with that email address."
    );
  } else if (signIn?.key === 'password') {
    // set error message for password field
    setFieldError(
      'password',
      signIn?.error || 'The password you entered is incorrect.'
    );
  }
});
watchEffect(() => {
  auth.checkAuth();
});
watchEffect(() => {
  if (auth.isAuth) {
    router.push({ name: 'index' });
  }
});
</script>
<template>
  <frame-content>
    <auth-container>
      <auth-banner-container
        heading="Welcome back!"
        subheading="Sign in to your account"
      >
        <template #image>
          <auth-img />
        </template>
      </auth-banner-container>
      <auth-form-container class="flex flex-col">
        <div class="w-full flex items-center justify-end">
          <v-link to="/pages/auth/register"> Sign up </v-link>
        </div>
        <form @submit="onSubmit" class="w-full space-y-8">
          <form-field
            v-slot="{ componentField }"
            name="email"
            :validate-on-blur="!isFieldDirty"
          >
            <form-item class="space-y-4">
              <form-label>Email</form-label>
              <form-control>
                <v-input
                  type="email"
                  placeholder="johndoe@mail.com"
                  v-bind="componentField"
                  class="w-full h-14"
                />
              </form-control>
              <form-message />
            </form-item>
          </form-field>
          <form-field
            v-slot="{ componentField }"
            name="password"
            :validate-on-blur="!isFieldDirty"
          >
            <form-item class="space-y-4">
              <form-label>Password</form-label>
              <form-control>
                <v-input
                  type="password"
                  placeholder="********"
                  v-bind="componentField"
                  class="w-full h-14"
                />
              </form-control>
              <form-message />
            </form-item>
          </form-field>
          <div class="flex items-center justify-between">
            <form-field
              v-slot="{ value, handleChange }"
              name="remember_me"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="space-y-4 space-x-2">
                <form-control>
                  <checkbox :checked="value" @update-checked="handleChange" />
                </form-control>
                <form-label>Remember me</form-label>
              </form-item>
            </form-field>
            <v-link to="/pages/auth/forgot-password" class="text-sm">
              Forgot password?
            </v-link>
          </div>
          <v-button type="submit" class="w-full h-14">Sign in</v-button>

          <Social-sign-in />
        </form>
      </auth-form-container>
    </auth-container>
  </frame-content>
</template>
