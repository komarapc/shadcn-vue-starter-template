import { defineStore } from "pinia";
import { ref } from "vue";

const useThemeStore = defineStore("theme", () => {
  const darkMode = ref(false);
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
  };
  return {
    darkMode,
    toggleDarkMode,
  };
});

export default useThemeStore;
