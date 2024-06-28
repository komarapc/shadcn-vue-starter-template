import { Breadcumbs } from "@/interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";

const useBreadcrumbsStore = defineStore("breadcumbs", () => {
  const breadcrumbs = ref<Breadcumbs[]>([]);
  const setBreadcrumbs = (data: Breadcumbs[]) => {
    breadcrumbs.value = data;
  };
  return { breadcrumbs, setBreadcrumbs };
});
export default useBreadcrumbsStore;
