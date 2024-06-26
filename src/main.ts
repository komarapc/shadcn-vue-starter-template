import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router";
import {createPinia} from "pinia";
import {createHead} from "@unhead/vue";
import {Icon} from "@iconify/vue";
const pinia = createPinia()
const head = createHead()
createApp(App)
  .use(router)
  .use(pinia)
  .use(head)
  .component('icon', Icon)
  .mount('#app')
