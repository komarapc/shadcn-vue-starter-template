<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { ProfileEducationBackgroundItem } from '@/components/partials/profile';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { EducationBackground } from '@/interfaces';
import { useToast } from '@/components/ui/toast/use-toast';
const yearNow = new Date().getFullYear();
const schema = toTypedSchema(
  z.object({
    institution: z.string(),
    startYear: z
      .number()
      .min(yearNow - 30)
      .max(yearNow + 4),
    endYear: z
      .number()
      .min(yearNow - 30)
      .max(yearNow + 4),
    degree: z.string(),
  })
);
const { toast } = useToast();

const educationBackgrounds = ref<EducationBackground[]>([
  {
    id: nanoid(),
    institution: 'Universitas Sriwijaya',
    year: '2016 - 2020',
    degree: 'Bachelor of Computer Science',
  },
  {
    id: nanoid(),
    institution: 'Universitas Sriwijaya',
    year: '2020 - 2022',
    degree: 'Master of Computer Science',
  },
]);

const addEducationBackground = (data: EducationBackground) => {
  educationBackgrounds.value.push({
    ...data,
    id: nanoid(),
  });
};

const { isFieldDirty, setFieldError, handleSubmit, resetForm } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((value) => {
  const startYear = value.startYear;
  const endYear = value.endYear;
  let year = '';
  if (startYear && endYear && startYear !== endYear) {
    year = `${startYear} - ${endYear}`;
  } else {
    year = `${startYear} - Present`;
  }
  addEducationBackground({
    id: nanoid(),
    degree: value.degree,
    institution: value.institution,
    year,
  });
  toast({
    title: 'Success',
    description: 'Education background added successfully',
    variant: 'default',
  });
  resetForm();
});
</script>

<template>
  <div class="space-y-6">
    <v-card>
      <v-card-header>
        <v-card-title> Current Education Background </v-card-title>
      </v-card-header>
      <v-card-content class="space-y-6">
        <profile-education-background-item
          :education-backgrounds="educationBackgrounds"
          show-delete-button
          show-update-profile-button
        />
      </v-card-content>
    </v-card>
    <v-card>
      <v-card-header>
        <v-card-title> Education Background </v-card-title>
        <v-card-description>
          Update your education background
        </v-card-description>
      </v-card-header>
      <v-card-content class="">
        <form @submit="onSubmit" class="space-y-6">
          <div class="flex flex-col lg:flex-row gap-6">
            <form-field
              name="startYear"
              v-slot="{ componentField }"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="w-full lg:max-w-32">
                <form-label>Start Year</form-label>
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
            <form-field
              name="endYear"
              v-slot="{ componentField }"
              :validate-on-blur="!isFieldDirty"
            >
              <form-item class="w-full lg:max-w-40">
                <form-label>End/Estimated Year</form-label>
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
          <form-field
            name="institution"
            v-slot="{ componentField }"
            :validate-on-blur="!isFieldDirty"
          >
            <form-item class="w-full lg:max-w-sm">
              <form-label>Institution</form-label>
              <form-control>
                <v-input
                  v-bind="componentField"
                  placeholder="Name of Institution"
                />
              </form-control>
              <form-message />
            </form-item>
          </form-field>
          <form-field
            name="degree"
            v-slot="{ componentField }"
            :validate-on-blur="!isFieldDirty"
          >
            <form-item class="w-full lg:max-w-sm">
              <form-label>Degree</form-label>
              <form-control>
                <v-input v-bind="componentField" placeholder="Name of Degree" />
              </form-control>
              <form-message />
            </form-item>
          </form-field>
          <v-button class="flex items-center gap-2" type="submit">
            <icon icon="ic:round-check" width="24" />
            <span>Add new</span>
          </v-button>
        </form>
      </v-card-content>
    </v-card>
  </div>
  <toaster />
</template>

<style scoped></style>
