import { users } from "@/data/mock";
import { User } from "@/interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";
import * as bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { useRouter } from "vue-router";
export const useAuthStore = defineStore("auth", () => {
  const isAuth = ref(false);
  const token = ref("");
  const user = ref<User | undefined>(undefined);
  const setToken = (data: string) => (token.value = data);
  const setUser = (data: User) => (user.value = data);
  const login = async (email: string, password: string) => {
    const router = useRouter();
    // fetch user data from API

    const user = users.find((u) => u.email === email);
    if (!user) return { key: "email", error: "User not found" };
    if (!bcrypt.compareSync(password, user.password))
      return { key: "password", error: "Password is incorrect" };

    isAuth.value = true;
    const token = nanoid(64);
    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    return { key: "", error: "" };
  };
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (token) {
      isAuth.value = true;
      setToken(token);
      const user = localStorage.getItem("user");
      if (user) {
        setUser(JSON.parse(user));
      }
    }
  };
  const logout = () => {
    isAuth.value = false;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    token.value = "";
    user.value = undefined;
  };
  return { isAuth, token, user, login, checkAuth, logout };
});
