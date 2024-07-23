<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import {
  Card as VCard,
  CardContent as VCardContent,
  CardDescription as VCardDescription,
  CardHeader as VCardHeader,
  CardTitle as VCardTitle,
} from '@/components/ui/card';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import {
  ProfileWorkRecord,
  ProfileWorkRecordItem,
} from '@/components/partials/profile';
import { Input as VInput } from '@/components/ui/input';
import { Toaster } from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast/use-toast';
const currentYear = new Date().getFullYear();
type WorkRecord = {
  id: string;
  company: string;
  position: string;
  year: string;
};

const workRecords = ref<WorkRecord[]>([
  {
    id: nanoid(),
    company: 'PT. XSomecompany',
    position: 'Software Engineer',
    year: '2020 - Present',
  },
  {
    id: nanoid(),
    company: 'PT. Somecompany',
    position: 'Senior Software Engineer',
    year: '2022 - Present',
  },
]);
const schema = toTypedSchema(
  z.object({
    startYear: z
      .number()
      .min(currentYear - 30)
      .max(currentYear),
    endYear: z
      .number()
      .min(currentYear - 30)
      .max(currentYear),
    company: z.string(),
    position: z.string(),
  })
);
const { toast } = useToast();
const { handleSubmit, resetForm, isFieldDirty } = useForm({
  validationSchema: schema,
});
const onSubmit = handleSubmit((value) => {
  workRecords.value.push({
    id: nanoid(),
    company: value.company,
    position: value.position,
    year: `${value.startYear} - ${value.endYear}`,
  });
  resetForm();
  toast({
    title: 'Success',
    description: 'Work record has been added',
  });
});
</script>

<template>
  <div class="space-y-6">
    <v-card>
      <v-card-header>
        <v-card-title>Current Work Records</v-card-title>
        <v-card-description>See all your work records here</v-card-description>
      </v-card-header>
      <v-card-content>
        <profile-work-record-item :work-records="workRecords" />
      </v-card-content>
    </v-card>
    <v-card>
      <v-card-header>
        <v-card-title> Create new </v-card-title>
        <v-card-description>
          Add a new work record to your profile.
        </v-card-description>
      </v-card-header>
      <v-card-content>
        <form @submit="onSubmit" class="space-y-6">
          <div class="w-full flex flex-col lg:flex-row gap-6">
            <form-field
              v-slot="{ componentField }"
              name="startYear"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="w-full lg:w-32">
                <form-label> Start Year </form-label>
                <form-control>
                  <v-input
                    v-bind="componentField"
                    type="number"
                    inputmode="numeric"
                    placeholder="YYYY"
                  ></v-input>
                </form-control>
                <form-message />
              </form-item>
            </form-field>
            <form-field
              name="endYear"
              v-slot="{ componentField }"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="w-full lg:w-32">
                <form-label>End Year</form-label>
                <form-control>
                  <v-input
                    type="number"
                    inputmode="numeric"
                    v-bind="componentField"
                    placeholder="YYYY"
                  />
                </form-control>
                <form-message />
              </form-item>
            </form-field>
          </div>
          <form-field name="company" v-slot="{ componentField }">
            <form-item class="w-full lg:max-w-sm">
              <form-label>Company</form-label>
              <form-control>
                <v-input
                  v-bind="componentField"
                  placeholder="Company"
                ></v-input>
              </form-control>
              <form-message />
            </form-item>
          </form-field>
          <form-field name="position" v-slot="{ componentField }">
            <form-item class="w-full lg:max-w-sm">
              <form-label>Position</form-label>
              <form-control>
                <v-input
                  v-bind="componentField"
                  placeholder="Position"
                ></v-input>
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
  </div>
  <toaster />
</template>

<style scoped></style>
