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
import { useThemeStore } from "@/stores";
import { computed, ref } from "vue";
useSeoMeta({
  title: "Reset Password",
  description: "",
});
const { darkMode } = useThemeStore();
const schema = toTypedSchema(
  z
    .object({
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
      pin: z.array(z.coerce.string()).length(5, { message: "Invalid input" }),
    })
    .refine((data) => data.confirmPassword === data.password, {
      message: "Password and confirm password must be same",
      path: ["confirmPassword"],
    })
);
const { isFieldDirty, handleSubmit, setFieldError, setFieldValue } = useForm({
  validationSchema: schema,
  initialValues: {
    pin: ["", "", "", "", ""],
  },
});
const { toast } = useToast();
const onSubmit = handleSubmit((values) => {
  toast({
    title: "Form Submitted",
    description: JSON.stringify(values, null, 2),
  });
});
const handleComplete = (e: string[]) => console.log(e.join(""));

// time now + 3minute

const expiredOtp = ref("Expired in 3:00");
const time = ref(new Date().getTime() + 3 * 60 * 1000);
setInterval(() => {
  const now = new Date().getTime();
  const distance = time.value - now;
  if (distance < 0) {
    expiredOtp.value = "Expired";
    return;
  }
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  expiredOtp.value = `Expired in ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}, 1000);
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
            <div class="w-full flex flex-col lg:flex-row gap-6">
              <form-field
                v-slot="{ componentField }"
                name="password"
                :validate-on-blur="!isFieldDirty"
              >
                <form-item class="w-full">
                  <form-label>Password</form-label>
                  <form-control>
                    <v-input
                      type="password"
                      placeholder="********"
                      v-bind="componentField"
                      class="w-full h-14"
                    />
                  </form-control>
                  <form-description> Create a new password </form-description>
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
                  <form-description>
                    Re-enter your new password
                  </form-description>
                  <form-message />
                </form-item>
              </form-field>
            </div>
            <form-field v-slot="{ componentField, value }" name="pin">
              <form-item class="w-full">
                <form-label>OTP</form-label>
                <form-control>
                  <pin-input
                    id="pin-input"
                    v-model="value!"
                    placeholder="o"
                    type="number"
                    :name="componentField.name"
                    @update:model-value="(arrStr: any) => {
              setFieldValue('pin', arrStr.filter(Boolean))
            }"
                  >
                    <pin-input-group>
                      <pin-input-input
                        v-for="(id, index) in 5"
                        :key="id"
                        :index="index"
                        class="w-full h-14"
                        :class="[
                          darkMode && 'dark',
                          'bg-card text-card-foreground',
                        ]"
                      />
                    </pin-input-group>
                  </pin-input>
                </form-control>
                <form-message />
              </form-item>
            </form-field>
            <v-button type="submit" class="w-full h-14"> Submit </v-button>
            <div class="text-center">
              {{ expiredOtp }}
            </div>
            <div class="flex items-center justify-center">
              <v-button type="button" variant="link"> Resend code </v-button>
            </div>
          </form>
        </div>
      </auth-form-container>
    </auth-container>
    <toaster />
  </frame-content>
</template>
