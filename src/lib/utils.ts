import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    // px-4, py-4 = p-4
    return twMerge(clsx(inputs));
}