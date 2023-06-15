import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function inputStringToNumber(input: string): number {
    return Number(input.replace(/[^0-9]/g, ''));
}