import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function for merging Tailwind CSS class names conditionally.
 * Uses `clsx` for conditional logic and `tailwind-merge` for deduplication.
 *
 * @param inputs - Any number of class values (strings, arrays, objects)
 * @returns A single string of merged class names
 *
 * @example
 * cn('p-4', { 'text-red-500': error }, 'font-bold')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
