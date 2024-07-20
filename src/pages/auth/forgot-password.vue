<script lang="ts" setup>
import {
  AuthContainer,
  AuthBannerContainer,
  AuthFormContainer,
} from "@/components/partials/auth";
import { useSeoMeta } from "@unhead/vue";
import ImgSvg from "@/assets/svg/password.svg";
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
import { useRouter } from "vue-router";
import { nanoid } from "nanoid";
useSeoMeta({
  title: "Forgot Password",
  description: "Forgot your password? No worries, we got you covered.",
  ogTitle: "Forgot Password",
  ogDescription: "Forgot your password? No worries, we got you covered.",
});
const schema = toTypedSchema(
  z.object({
    email: z.string().email("Invalid email address"),
  })
);
const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: schema,
});
const { toast } = useToast();
const onSubmit = handleSubmit((values) => {
  toast({
    title: "Form Submitted",
    description: JSON.stringify(values, null, 2),
  });
  setTimeout(() => {
    router.push({ name: "reset-password", query: { q: nanoid(64) } });
  }, 2000);
});
const router = useRouter();
</script>

<template>
  <frame-content>
    <auth-container>
      <auth-banner-container
        heading="Dont wory we got you covered"
        subheading="Enter your registered email address"
      >
        <template #image>
          <img-svg class="w-full" />
        </template>
      </auth-banner-container>
      <auth-form-container>
        <div class="container mx-auto max-w-2xl space-y-10 mt-10 lg:mt-0">
          <form @submit="onSubmit" class="w-full space-y-8">
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
                <form-description>
                  We will send you a link to reset your password
                </form-description>
                <form-message />
              </form-item>
            </form-field>

            <v-button type="submit" class="w-full h-14"> Submit </v-button>
            <social-sign-up />
          </form>
        </div>
      </auth-form-container>
    </auth-container>
    <toaster />
  </frame-content>
</template>
