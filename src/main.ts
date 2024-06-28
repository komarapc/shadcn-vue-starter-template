import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import { createHead } from "@unhead/vue";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
const pinia = createPinia();
const head = createHead();
createApp(App)
  .use(router)
  .use(pinia)
  .use(head)
  .component("icon", Icon)
  .component("v-button", Button)
  .component("v-link", Link)
  .component("v-card", Card)
  .component("v-card-header", CardHeader)
  .component("v-card-title", CardTitle)
  .component("v-card-description", CardDescription)
  .component("v-card-content", CardContent)
  .component("v-card-footer", CardFooter)
  .component("breadcrumb", Breadcrumb)
  .component("breadcrumb-ellipsis", BreadcrumbEllipsis)
  .component("breadcrumb-item", BreadcrumbItem)
  .component("breadcrumb-link", BreadcrumbLink)
  .component("breadcrumb-list", BreadcrumbList)
  .component("breadcrumb-page", BreadcrumbPage)
  .component("breadcrumb-separator", BreadcrumbSeparator)
  .component("dropdown-menu", DropdownMenu)
  .component("dropdown-menu-label", DropdownMenuLabel)
  .component("dropdown-menu-content", DropdownMenuContent)
  .component("dropdown-menu-separator", DropdownMenuSeparator)
  .component("dropdown-menu-item", DropdownMenuItem)
  .component("dropdown-menu-trigger", DropdownMenuTrigger)
  .mount("#app");
