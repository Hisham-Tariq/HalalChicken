import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Returns a string of space-separated class names generated from the input class values.
 * @param inputs - An array of class values to be merged.
 * @returns A string of space-separated class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Converts a string input to a number by removing all non-numeric characters.
 * @param input - The string input to be converted to a number.
 * @returns A number representation of the input string. Returns NaN if the input string does not contain any numeric characters.
 */
export function inputStringToNumber(input: string): number {
  return parseFloat(input.replace(/[^0-9.]/g, ''));
}