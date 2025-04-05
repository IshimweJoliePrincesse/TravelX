import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * combines multiple class names into a single string, merging Tailwind classes properly
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
