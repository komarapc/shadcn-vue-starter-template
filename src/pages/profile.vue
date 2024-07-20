<script setup lang="ts">
import { formatDate } from "@/lib/utils";
import { useAuthStore } from "@/stores";
import { useBreadcrumbsStore } from "@/stores/layout";
import { useSeoMeta } from "@unhead/vue";
import { nanoid } from "nanoid";
import { Progress } from "@/components/ui/progress";

useSeoMeta({
  title: "Profile",
  description: "Officia pariatur eu minim commodo velit ut ad.",
});
const auth = useAuthStore();
const logoSocials = [
  "logos:facebook",
  "logos:whatsapp-icon",
  "logos:google-gmail",
  "skill-icons:instagram",
];

type PersonalInformation = {
  label: string;
  value: any;
};

type EducationBackground = {
  id: string;
  institution: string;
  year: string;
  degree: string;
};
const educationBackgrounds: EducationBackground[] = [
  {
    id: nanoid(),
    institution: "Universitas Sriwijaya",
    year: "2016 - 2020",
    degree: "Bachelor of Computer Science",
  },
  {
    id: nanoid(),
    institution: "Universitas Sriwijaya",
    year: "2020 - 2022",
    degree: "Master of Computer Science",
  },
];
const personalInformation: PersonalInformation[] = [
  { label: "Date of Birth", value: formatDate(new Date("1998-02-20")) },
  { label: "Address", value: "Palembang, Karya baru" },
  { label: "Sex", value: "Male" },
  { label: "Blood Type", value: "O+" },
  { label: "Height", value: "167cm" },
  { label: "Weight", value: "54Kg" },
];

type WorkRecord = {
  id: string;
  company: string;
  position: string;
  year: string;
};

const workRecords: WorkRecord[] = [
  {
    id: nanoid(),
    company: "PT. XSomecompany",
    position: "Software Engineer",
    year: "2020 - Present",
  },
  {
    id: nanoid(),
    company: "PT. Somecompany",
    position: "Senior Software Engineer",
    year: "2022 - Present",
  },
];

type RecentActivity = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "created" | "updated" | "deleted";
};

const recentActivities: RecentActivity[] = [
  {
    id: nanoid(),
    title: "Create new project",
    description: "Create new project with name of X",
    date: "2022-02-20",
    status: "created",
  },
  {
    id: nanoid(),
    title: "Update project",
    description: "Update project with name of X",
    date: "2022-02-20",
    status: "updated",
  },
  {
    id: nanoid(),
    title: "Delete project",
    description: "Delete project with name of X",
    date: "2022-02-20",
    status: "deleted",
  },
];

const getRecentActivityIcon = (status: RecentActivity["status"]) => {
  switch (status) {
    case "created":
      return "heroicons-outline:plus-circle";
    case "updated":
      return "heroicons-outline:pencil-alt";
    case "deleted":
      return "heroicons-outline:trash";
  }
};

const getColorMap = (status: RecentActivity["status"]) => {
  switch (status) {
    case "created":
      return "bg-green-500";
    case "updated":
      return "bg-yellow-500";
    case "deleted":
      return "bg-red-500";
  }
};

type PerformanceOverview = {
  id: string;
  title: string;
  value: number;
  icon: string;
};

const performanceOverviews: PerformanceOverview[] = [
  {
    id: nanoid(),
    title: "Total Projects",
    value: 20,
    icon: "heroicons-outline:document-text",
  },
  {
    id: nanoid(),
    title: "Total Tasks",
    value: 200,
    icon: "heroicons-outline:document-text",
  },
  {
    id: nanoid(),
    title: "Total Teams",
    value: 10,
    icon: "heroicons-outline:user-group",
  },
  {
    id: nanoid(),
    title: "Total Members",
    value: 50,
    icon: "heroicons-outline:user",
  },
];

const breadcumbs = useBreadcrumbsStore();
breadcumbs.setBreadcrumbs([{ label: "Home" }, { label: "Profile" }]);
</script>
<template>
  <blueprint-authenticated>
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="w-full lg:w-8/12 overflow-hidden space-y-6">
        <div class="rounded-lg shadow overflow-hidden">
          <v-card
            class="w-full bg-gradient-to-b from-indigo-500 to-primary min-h-[280px] rounded-none"
          >
          </v-card>
          <div class="w-full bg-card text-card-foreground relative p-6">
            <div
              class="w-40 h-40 rounded-full border-4 border-white bg-primary absolute top-[-90px]"
            >
              <img
                src="https://avatar.iran.liara.run/public/13"
                alt=""
                srcset=""
              />
            </div>
            <div class="mt-16 flex flex-col lg:flex-row justify-between gap-6">
              <div class="w-full space-y-4">
                <div>
                  <h1 class="text-2xl font-bold">{{ auth.user?.name! }}</h1>
                  <p class="text-sm text-muted-foreground">
                    {{ auth.user?.email }}
                  </p>
                </div>
                <p class="text-sm">{{ auth.user?.role.name }} at Somecompany</p>
                <!-- country -->
                <div class="flex items center gap-2 text-sm">
                  <icon
                    icon="heroicons-outline:location-marker"
                    class="w-4 h-4"
                  />
                  <span>Indonesia,</span>
                  <span>Palembang</span>
                </div>
                <v-button class="space-x-2">
                  <icon icon="basil:edit-outline" width="24" />
                  <span> Update Profile </span>
                </v-button>
              </div>
              <div
                class="w-full lg:w-2/12 grid grid-cols-4 lg:grid-cols-2 gap-4"
              >
                <div
                  v-for="item in logoSocials"
                  class="flex items-center justify-center rounded-lg w-full bg-muted aspect-square"
                >
                  <icon :icon="item" class="w-full" width="48"></icon>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div class="w-full grid lg:grid-cols-2 gap-6">
          <v-card class="">
            <v-card-header>
              <v-card-title> Performance Overview </v-card-title>
            </v-card-header>
            <v-card-content class="space-y-6">
              <div
                v-for="overview in performanceOverviews"
                :key="overview.id"
                class="flex items-center gap-4 w-full"
              >
                <div>
                  <div
                    class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground aspect-square"
                  >
                    <icon :icon="overview.icon" class="w-6 h-6"></icon>
                  </div>
                </div>
                <div class="flex flex-col w-full">
                  <div class="text-sm font-medium">{{ overview.title }}</div>
                  <div class="flex items-center justify-between w-full gap-6">
                    <Progress class="w-full" v-model="overview.value" />
                    <span class="text-muted-foreground">
                      {{ overview.value }}
                    </span>
                  </div>
                </div>
              </div>
            </v-card-content>
          </v-card>
          <v-card class="">
            <v-card-header>
              <v-card-title> Recent Activities </v-card-title>
            </v-card-header>
            <v-card-content class="">
              <div
                v-for="(activity, i) in recentActivities"
                :key="activity.id"
                class="flex gap-4 relative"
              >
                <div class="text-sm text-muted-foreground my-auto w-1/3">
                  {{ formatDate(activity.date) }}
                </div>
                <div
                  :class="[
                    'w-1 relative',
                    getColorMap(activity.status),
                    i == 0 && 'rounded-t-lg',
                    i == recentActivities.length - 1 && 'rounded-b-lg',
                  ]"
                >
                  <div
                    :class="[
                      'w-4 h-4 rounded-full absolute top-3 -left-1.5',
                      getColorMap(activity.status),
                    ]"
                  ></div>
                </div>
                <div class="space-y-1 py-2 w-full">
                  <div>
                    {{ activity.title }}
                  </div>
                  <div class="text-muted-foreground">
                    {{ activity.description }}
                  </div>
                </div>
              </div>
            </v-card-content>
          </v-card>
        </div>
      </div>
      <div class="w-full lg:w-4/12">
        <div class="space-y-6 sticky top-24">
          <v-card class="">
            <v-card-header>
              <v-card-title> Personal Information </v-card-title>
              <v-card-description> </v-card-description>
            </v-card-header>
            <v-card-content class="w-full space-y-4">
              <div
                v-for="personalInfo in personalInformation"
                :key="personalInfo.label"
                class="flex items-center justify-between"
              >
                <div class="truncate text-muted-foreground">
                  {{ personalInfo.label }}
                </div>
                <div class="font-medium">
                  {{ personalInfo.value }}
                </div>
              </div>
            </v-card-content>
          </v-card>
          <v-card class="">
            <v-card-header>
              <v-card-title> Education Background </v-card-title>
            </v-card-header>
            <v-card-content class="w-full space-y-4">
              <div
                v-for="education in educationBackgrounds"
                :key="education.id"
                class="relative"
              >
                <div class="border-l-2 border-primary space-y-2">
                  <div class="pl-4 text-sm font-medium">
                    {{ education.institution }}
                  </div>
                  <div class="pl-4 text-sm text-muted-foreground">
                    {{ education.year }}
                  </div>
                  <div class="pl-4 text-sm text-muted-foreground">
                    {{ education.degree }}
                  </div>
                </div>
              </div>
            </v-card-content>
          </v-card>
          <v-card class="">
            <v-card-header>
              <v-card-title> Work Records </v-card-title>
            </v-card-header>
            <v-card-content class="w-full space-y-4">
              <div v-for="work in workRecords" :key="work.id" class="relative">
                <div class="border-l-2 border-primary space-y-2">
                  <div class="pl-4 text-sm font-medium">
                    {{ work.company }}
                  </div>
                  <div class="pl-4 text-sm text-muted-foreground">
                    {{ work.year }}
                  </div>
                  <div class="pl-4 text-sm text-muted-foreground">
                    {{ work.position }}
                  </div>
                </div>
              </div>
            </v-card-content>
          </v-card>
        </div>
      </div>
    </div>
  </blueprint-authenticated>
</template>
