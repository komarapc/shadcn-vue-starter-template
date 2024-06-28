<script setup lang="ts">
import { MenuSidebar } from "@/interfaces";
import { computed, PropType, ref, watchEffect } from "vue";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SidebarMenuItemLink } from "@/components/layouts/sidebar";
import { useRouter } from "vue-router";
import { useNavigationMenu } from "@/stores";
const props = defineProps({
  menu: {
    type: Object as PropType<MenuSidebar>,
    required: true,
  },
});
const router = useRouter();
const isOpen = ref(props.menu.active);
const navMenu = useNavigationMenu();
const gotoPage = (link?: string) => {
  if (link) {
    router.push(link);
    navMenu.close();
  }
};
const pathName = useRouter().currentRoute.value.path;
const hasActiveChild = computed(() => {
  const hasActiveItem = (item: MenuSidebar) =>
    item.link === pathName || item.children?.some(hasActiveItem);
  return hasActiveItem(props.menu);
});
watchEffect(() => {
  isOpen.value = hasActiveChild.value;
});
</script>

<template>
  <collapsible
    v-model:open="isOpen"
    class="w-full space-y-2 mb-2"
    :default-open="true"
  >
    <collapsible-trigger as-child v-if="menu.children?.length">
      <sidebar-menu-item-link
        :menu="menu"
        :isOpen="isOpen"
        @click="gotoPage(menu.link)"
        class=""
      />
    </collapsible-trigger>
    <sidebar-menu-item-link
      v-else
      :menu="menu"
      :isOpen="isOpen"
      @click="gotoPage(menu.link)"
    />
    <collapsible-content class="space-y-2" v-if="menu.children?.length">
      <div
        :class="[
          'ml-7 border-l border-primary/60',
          menu.children.length ? 'pl-2' : '',
        ]"
      >
        <sidebar-menu-item
          v-for="child in menu.children"
          :key="child.label"
          :menu="child"
        >
          {{ child.label }}
        </sidebar-menu-item>
      </div>
    </collapsible-content>
  </collapsible>
</template>

<style scoped></style>
