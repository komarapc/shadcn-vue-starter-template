<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { Field, useForm } from 'vee-validate';
import { z } from 'zod';
import { useToast } from '@/components/ui/toast/use-toast';
const { toast } = useToast();
const schema = toTypedSchema(
  z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      dayOfBirth: z.number().min(1).max(31),
      monthOfBirth: z.number().min(1).max(12),
      yearOfBirth: z.number().min(1900).max(new Date().getFullYear()),
      address: z.string(),
      sex: z.enum(['male', 'female']),
      bloodType: z.enum(['A', 'B', 'AB', 'O']),
      bloodRhesus: z.enum(['+', '-']),
      weight: z.number().min(1),
      height: z.number().min(1),
    })
    .refine((data) => data.monthOfBirth === 2 && data.dayOfBirth > 29, {
      message: 'Invalid date of birth',
      path: ['dayOfBirth'],
    })
);

const { isFieldDirty, handleSubmit, setFieldError, resetForm } = useForm({
  validationSchema: schema,
});
const onSubmit = handleSubmit((value) => {
  console.log({ value });
  toast({
    title: 'Success updated',
    description: 'Personal information updated successfully',
  });
  resetForm();
});
const months = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];
</script>

<template>
  <v-card>
    <v-card-header>
      <v-card-title>Personal information</v-card-title>
      <v-card-description>
        Update your personal information here
      </v-card-description>
    </v-card-header>
    <v-card-content>
      <form @submit="onSubmit" class="space-y-6 w-full">
        <div class="flex flex-col lg:flex-row gap-6 w-full">
          <form-field
            v-slot="{ componentField }"
            name="firstName"
            :validate-on-blur="!isFieldDirty"
          >
            <form-item class="w-full">
              <form-label>First Name</form-label>
              <form-control>
                <v-input
                  type="text"
                  placeholder="First Name"
                  v-bind="componentField"
                  class="w-full"
                ></v-input>
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
                  type="text"
                  placeholder="Last Name"
                  v-bind="componentField"
                  class="w-full"
                ></v-input>
              </form-control>
              <form-message />
            </form-item>
          </form-field>
        </div>
        <div class="flex flex-col gap-2 w-full">
          <v-label>Date of Birth</v-label>
          <div class="flex flex-col lg:flex-row gap-6 w-full">
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
                    class="w-full"
                    placeholder="DD"
                    min="1"
                    max="31"
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
                    <select-trigger class="">
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
                    class="w-full"
                    placeholder="YYYY"
                  />
                </form-control>
                <form-message />
              </form-item>
            </form-field>
          </div>
        </div>
        <form-field
          name="sex"
          v-slot="{ componentField }"
          :validate-on-blur="!isFieldDirty"
        >
          <form-item class="max-w-32">
            <form-label>Sex</form-label>
            <v-select v-bind="componentField">
              <form-control>
                <select-trigger>
                  <select-value placeholder="Gender" />
                </select-trigger>
              </form-control>
              <select-content>
                <select-item value="female" label="Female">Feale</select-item>
                <select-item value="male" label="Male">Male</select-item>
              </select-content>
            </v-select>
          </form-item>
        </form-field>
        <div class="w-full flex flex-col gap-2">
          <v-label>Blood Type</v-label>
          <div class="flex flex-col lg:flex-row gap-6">
            <form-field
              name="bloodType"
              v-slot="{ componentField }"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="w-full lg:max-w-32">
                <form-control>
                  <v-select v-bind="componentField">
                    <select-trigger>
                      <select-value placeholder="Blood Type" />
                    </select-trigger>
                    <select-content>
                      <select-item value="A" label="A">A</select-item>
                      <select-item value="B" label="B">B</select-item>
                      <select-item value="AB" label="AB">AB</select-item>
                      <select-item value="O" label="O">O</select-item>
                    </select-content>
                  </v-select>
                </form-control>
                <form-message />
              </form-item>
            </form-field>
            <form-field
              name="bloodRhesus"
              v-slot="{ componentField }"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="w-full lg:max-w-32">
                <form-control>
                  <v-select v-bind="componentField">
                    <select-trigger>
                      <select-value placeholder="Rhesus" />
                    </select-trigger>
                    <select-content>
                      <select-item value="+" label="+">+</select-item>
                      <select-item value="-" label="-">-</select-item>
                    </select-content>
                  </v-select>
                </form-control>
                <form-message />
              </form-item>
            </form-field>
          </div>
        </div>
        <div class="w-full flex flex-col gap-2">
          <v-label> Body Measurement </v-label>
          <div class="flex flex-col lg:flex-row gap-6">
            <form-field
              name="height"
              v-slot="{ componentField }"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="w-full lg:w-32">
                <form-label> Height(cm) </form-label>
                <form-control>
                  <v-input
                    v-bind="componentField"
                    type="number"
                    inputmode="numeric"
                    placeholder="Height"
                    class="w-full"
                  />
                </form-control>
                <form-message />
              </form-item>
            </form-field>
            <form-field
              name="weight"
              v-slot="{ componentField }"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="w-full lg:w-32">
                <form-label>Weight(Kg)</form-label>
                <form-control>
                  <v-input
                    v-bind="componentField"
                    type="number"
                    inputmode="numeric"
                    placeholder="Weight"
                    class="w-full"
                  ></v-input>
                </form-control>
                <form-message />
              </form-item>
            </form-field>
          </div>
        </div>
        <form-field
          name="address"
          v-slot="{ componentField }"
          :validate-on-blur="!isFieldDirty"
        >
          <form-item>
            <form-label> Address </form-label>
            <form-control>
              <v-textarea
                v-bind="componentField"
                placeholder="Address"
                class="w-full resize-none"
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
