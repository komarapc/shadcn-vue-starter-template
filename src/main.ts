import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import { createHead } from '@unhead/vue';
import { BlueprintAuthenticated } from '@/components/layouts/blueprint';
import { Icon } from '@iconify/vue';
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Link } from '@/components/ui/link';
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { ToggleTheme } from '@/components/partials/toggle';
import {
  ChartCrosshair,
  ChartLegend,
  ChartTooltip,
  ChartSingleTooltip,
} from '@/components/ui/chart';
import { BarChart } from '@/components/ui/chart-bar';
import { AreaChart } from '@/components/ui/chart-area';
import { DonutChart } from '@/components/ui/chart-donut';
import { LineChart } from '@/components/ui/chart-line';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
const pinia = createPinia();
const head = createHead();
createApp(App)
  .use(router)
  .use(pinia)
  .use(head)
  .component('BlueprintAuthenticated', BlueprintAuthenticated)
  .component('ChartCrosshair', ChartCrosshair)
  .component('ChartLegend', ChartLegend)
  .component('ChartTooltip', ChartTooltip)
  .component('ChartSingleTooltip', ChartSingleTooltip)
  .component('ChartBar', BarChart)
  .component('ChartArea', AreaChart)
  .component('ChartDonut', DonutChart)
  .component('ChartLine', LineChart)
  .component('Checkbox', Checkbox)
  .component('DropdownMenu', DropdownMenu)
  .component('DropdownMenuTrigger', DropdownMenuTrigger)
  .component('DropdownMenuItem', DropdownMenuItem)
  .component('DropdownMenuContent', DropdownMenuContent)
  .component('DropdownMenuLabel', DropdownMenuLabel)
  .component('FormControl', FormControl)
  .component('FormDescription', FormDescription)
  .component('FormField', FormField)
  .component('FormItem', FormItem)
  .component('FormLabel', FormLabel)
  .component('FormMessage', FormMessage)
  .component('Icon', Icon)
  .component('SelectItem', SelectItem)
  .component('SelectLabel', SelectLabel)
  .component('SelectContent', SelectContent)
  .component('SelectTrigger', SelectTrigger)
  .component('SelectValue', SelectValue)
  .component('Separator', Separator)
  .component('ToggleTheme', ToggleTheme)
  .component('VLink', Link)
  .component('VButton', Button)
  .component('VCard', Card)
  .component('VCardHeader', CardHeader)
  .component('VCardTitle', CardTitle)
  .component('VCardFooter', CardFooter)
  .component('VCardDescription', CardDescription)
  .component('VCardContent', CardContent)
  .component('VCheckbox', Checkbox)
  .component('VProgress', Progress)
  .component('VInput', Input)
  .component('VSelect', Select)
  .mount('#app');
