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
import { Input, InputCalendar } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChartCrosshair,
  ChartLegend,
  ChartSingleTooltip,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart } from "@/components/ui/chart-bar";
import { LineChart } from "@/components/ui/chart-line";
import { DonutChart } from "@/components/ui/chart-donut";
import { AreaChart } from "@/components/ui/chart-area";
import { ToggleTheme } from "@/components/partials/toggle";
import { Label } from "@/components/ui/label";
import {
  NumberField,
  NumberFieldInput,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
} from "@/components/ui/number-field";
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
  PinInputSeparator,
} from "@/components/ui/pin-input";
import { BlueprintAuthenticated } from "@/components/layouts/blueprint";
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
  .component("v-input", Input)
  .component("v-input-calendar", InputCalendar)
  .component("v-label", Label)
  .component("v-select", Select)
  .component("select-content", SelectContent)
  .component("select-group", SelectGroup)
  .component("select-item", SelectItem)
  .component("select-label", SelectLabel)
  .component("select-trigger", SelectTrigger)
  .component("select-value", SelectValue)
  .component("breadcrumb", Breadcrumb)
  .component("breadcrumb-ellipsis", BreadcrumbEllipsis)
  .component("breadcrumb-item", BreadcrumbItem)
  .component("breadcrumb-link", BreadcrumbLink)
  .component("breadcrumb-list", BreadcrumbList)
  .component("breadcrumb-page", BreadcrumbPage)
  .component("breadcrumb-separator", BreadcrumbSeparator)
  .component("blueprint-authenticated", BlueprintAuthenticated)
  .component("chart-crosshair", ChartCrosshair)
  .component("chart-area", AreaChart)
  .component("chart-bar", BarChart)
  .component("chart-donut", DonutChart)
  .component("chart-legend", ChartLegend)
  .component("chart-line", LineChart)
  .component("chart-tooltip", ChartTooltip)
  .component("chart-single-tooltip", ChartSingleTooltip)
  .component("checkbox", Checkbox)
  .component("dropdown-menu", DropdownMenu)
  .component("dropdown-menu-label", DropdownMenuLabel)
  .component("dropdown-menu-content", DropdownMenuContent)
  .component("dropdown-menu-separator", DropdownMenuSeparator)
  .component("dropdown-menu-item", DropdownMenuItem)
  .component("dropdown-menu-trigger", DropdownMenuTrigger)
  .component("number-field", NumberField)
  .component("number-field-input", NumberFieldInput)
  .component("number-field-content", NumberFieldContent)
  .component("number-field-decrement", NumberFieldDecrement)
  .component("number-field-increment", NumberFieldIncrement)
  .component("pin-input", PinInput)
  .component("pin-input-group", PinInputGroup)
  .component("pin-input-input", PinInputInput)
  .component("pin-input-separator", PinInputSeparator)

  .component("toggle-theme", ToggleTheme)
  .mount("#app");
