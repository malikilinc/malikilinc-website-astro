// mAli v1.0 — Utility fonksiyonları

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseDate(dateStr?: string): number {
  if (!dateStr) return 0;
  const parts = dateStr.split("/").map(Number);
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    const [month, year] = parts;
    return year * 100 + month;
  }
  return new Date(dateStr).getTime() || 0;
}
