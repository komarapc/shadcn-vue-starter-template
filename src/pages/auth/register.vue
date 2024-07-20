<script lang="ts" setup>
import {
  AuthContainer,
  AuthBannerContainer,
  AuthFormContainer,
} from "@/components/partials/auth";
import { useSeoMeta } from "@unhead/vue";
import ImgSvg from "@/assets/svg/register.svg";
import { toTypedSchema } from "@vee-validate/zod";
import { FrameContent } from "@/components/layouts/frame";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Toaster, useToast } from "@/components/ui/toast";
import * as z from "zod";
import { useForm } from "vee-validate";
import { SocialSignUp } from "@/components/partials/socials";
useSeoMeta({
  title: "Forgot Password",
  description: "Forgot your password? No worries, we got you covered.",
  ogTitle: "Forgot Password",
  ogDescription: "Forgot your password? No worries, we got you covered.",
});
const schema = toTypedSchema(
  z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email("Invalid email address"),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
      dayOfBirth: z.number().int().min(1).max(31),
      monthOfBirth: z.number().int().min(1).max(12),
      yearOfBirth: z.number().int().min(1970).max(new Date().getFullYear()),
    })
    .refine((data) => data.confirmPassword === data.password, {
      message: "Password and confirm password must be same",
      path: ["confirmPassword"],
    })
);
const { isFieldDirty, handleSubmit, setFieldError } = useForm({
  validationSchema: schema,
});
const { toast } = useToast();
const onSubmit = handleSubmit((values) =>
  toast({
    title: "Form Submitted",
    description: JSON.stringify(values, null, 2),
  })
);
const months = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];
</script>

<template>
  <frame-content>
    <auth-container>
      <auth-banner-container
        heading="Start your journey with us"
        subheading="Create an account to get started"
      >
        <template #image>
          <img-svg class="w-full" />
        </template>
      </auth-banner-container>
      <auth-form-container>
        <div class="container mx-auto max-w-2xl space-y-10 mt-10 lg:mt-0">
          <div class="flex justify-end">
            <div class="space-x-4">
              <span>Already have an account?</span>
              <v-link to="/pages/auth/login" class="text-primary"
                >Sign in</v-link
              >
            </div>
          </div>
          <form @submit="onSubmit" class="w-full space-y-8">
            <div class="w-full flex items-center gap-6">
              <form-field
                v-slot="{ componentField }"
                name="firstName"
                :validate-on-blur="!isFieldDirty"
              >
                <form-item class="w-full">
                  <form-label>First Name</form-label>
                  <form-control>
                    <v-input
                      v-bind="componentField"
                      class="w-full h-14"
                      placeholder="John"
                    />
                  </form-control>
                  <form-message />
                </form-item>
              </form-field>
              <form-field
                v-slot="{ componentField }"
                name="lastName"
                :validate-on-blur="!isFieldDirty"
              >
                <form-item class="w-full">
                  <form-label>Last Name</form-label>
                  <form-control>
                    <v-input
                      v-bind="componentField"
                      class="w-full h-14"
                      placeholder="Doe"
                    />
                  </form-control>
                  <form-message />
                </form-item>
              </form-field>
            </div>

            <div class="space-y-2">
              <v-label>Date of Birth</v-label>
              <div class="flex space-x-4">
                <form-field
                  v-slot="{ componentField }"
                  name="dayOfBirth"
                  :validate-on-blur="!isFieldDirty"
                >
                  <form-item class="w-full">
                    <form-label>Day</form-label>
                    <form-control>
                      <v-input
                        type="number"
                        inputmode="numeric"
                        v-bind="componentField"
                        class="w-full h-14"
                        placeholder="DD"
                      />
                    </form-control>
                    <form-message />
                  </form-item>
                </form-field>
                <form-field
                  v-slot="{ componentField }"
                  name="monthOfBirth"
                  :validate-on-blur="!isFieldDirty"
                >
                  <form-item class="w-full">
                    <form-label>Month</form-label>
                    <v-select v-bind="componentField">
                      <form-control>
                        <select-trigger class="h-14">
                          <select-value placeholder="month" />
                        </select-trigger>
                      </form-control>
                      <select-content>
                        <select-item
                          v-for="month in months"
                          :key="month.value"
                          :value="month.value"
                          :label="month.label"
                        >
                          {{ month.label }}
                        </select-item>
                      </select-content>
                    </v-select>
                    <form-message />
                  </form-item>
                </form-field>
                <form-field
                  v-slot="{ componentField }"
                  name="yearOfBirth"
                  :validate-on-blur="!isFieldDirty"
                >
                  <form-item class="w-full">
                    <form-label>Year</form-label>
                    <form-control>
                      <v-input
                        type="number"
                        inputmode="numeric"
                        v-bind="componentField"
                        class="w-full h-14"
                        placeholder="YYYY"
                      />
                    </form-control>
                    <form-message />
                  </form-item>
                </form-field>
              </div>
            </div>
            <form-field
              v-slot="{ componentField }"
              name="email"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="w-full">
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
            <div class="flex gap-6">
              <form-field
                v-slot="{ componentField }"
                name="password"
                :validate-on-blur="!isFieldDirty"
              >
                <form-item class="w-full">
                  <form-label>Passoword</form-label>
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
              <form-field
                v-slot="{ componentField }"
                name="confirmPassword"
                :validate-on-blur="!isFieldDirty"
              >
                <form-item class="w-full">
                  <form-label>Confirm Password</form-label>
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
            </div>
            <v-button type="submit" class="w-full h-14"> Submit </v-button>
            <social-sign-up />
          </form>
        </div>
      </auth-form-container>
    </auth-container>
    <toaster />
  </frame-content>
</template>
