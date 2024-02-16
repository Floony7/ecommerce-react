
export function rgbToHex(r: number, g: number, b: number): string {
    const clamp = (value: number) => Math.max(0, Math.min(255, value));
    const toHex = (value: number) => {
          const hex = clamp(value).toString(16).toUpperCase();
          return hex.length === 1 ? `0${hex}` : hex;
      };
  
      return `${toHex(r)}${toHex(g)}${toHex(b)}`;
  }