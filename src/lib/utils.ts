import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function numberFormat(value: number) {
  return new Intl.NumberFormat().format(value);
}

export function formatDate(date: string | Date | number) {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-US", { dateStyle: "long" });
}
