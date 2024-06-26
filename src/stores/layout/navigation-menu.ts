import { defineStore } from "pinia";
import { ref } from "vue";

const useNavigationMenu = defineStore("navigation-menu", () => {
  const isOpen = ref(false);
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  const close = () => {
    isOpen.value = false;
  };
  return {
    isOpen,
    toggle,
    close,
  };
});

export default useNavigationMenu;
