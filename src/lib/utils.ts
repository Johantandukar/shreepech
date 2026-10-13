import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getPayload } from "payload";
import config from "../../payload.config";

export const payload = await getPayload({ config });

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
