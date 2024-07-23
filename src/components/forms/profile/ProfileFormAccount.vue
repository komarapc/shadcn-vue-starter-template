<script setup lang="ts">
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { FormControl, FormField, FormLabel } from '@/components/ui/form';
import { Input as VInput } from '@/components/ui/input';
import { useAuthStore } from '@/stores';
import { useToast } from '@/components/ui/toast/use-toast';
const auth = useAuthStore();
const { toast } = useToast();
const schema = toTypedSchema(
  z
    .object({
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Password and confirm password must be the same',
      path: ['confirmPassword'],
    })
);
const { isFieldDirty, setFieldError, handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    email: auth?.user?.email || '',
    password: '',
    confirmPassword: '',
  },
});

const onSubmit = handleSubmit(async (values) => {
  toast({
    description: 'Account updated successfully',
    variant: 'default',
    title: 'Success',
  });
  resetForm();
});
</script>

<template>
  <v-card>
    <v-card-header>
      <v-card-title>Update your account</v-card-title>
    </v-card-header>
    <v-card-content>
      <form @submit="onSubmit" class="w-full space-y-6">
        <form-field
          v-slot="{ componentField }"
          name="email"
          :validate-on-blur="!isFieldDirty"
        >
          <form-item>
            <form-label>Email</form-label>
            <form-control>
              <v-input
                type="email"
                placeholder="Email"
                v-bind="componentField"
                class="max-w-sm"
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
          <form-item>
            <form-label>Password</form-label>
            <form-control>
              <v-input
                type="password"
                placeholder="New Password"
                v-bind="componentField"
                class="max-w-sm"
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
          <form-item>
            <form-label>Confirm Password</form-label>
            <form-control>
              <v-input
                type="password"
                placeholder="Re-enter Password"
                v-bind="componentField"
                class="max-w-sm"
              />
            </form-control>
            <form-message />
          </form-item>
        </form-field>
        <v-button class="flex items-center gap-2" type="submit">
          <icon icon="ic:round-check" width="24" />
          <span>Save</span>
        </v-button>
      </form>
    </v-card-content>
  </v-card>
  <toaster />
</template>

<style scoped></style>
