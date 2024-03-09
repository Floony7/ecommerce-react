import { AuthError } from "firebase/auth";

export function rgbToHex(r: number, g: number, b: number): string {
    const clamp = (value: number) => Math.max(0, Math.min(255, value));
    const toHex = (value: number) => {
          const hex = clamp(value).toString(16).toUpperCase();
          return hex.length === 1 ? `0${hex}` : hex;
      };
  
      return `${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

export function processError(error: AuthError) {
    const code = error.code;
    const cleanCodeString = code.replace(/[^-]/g, " ");
    return `${cleanCodeString.charAt(0).toUpperCase()}${cleanCodeString.slice(1)}`  
}

export function removeFirebasePrefix(str: string): string {
    return str.replace(/^Firebase: /, "");
  }
  