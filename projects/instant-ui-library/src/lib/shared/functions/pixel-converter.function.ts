export const convertPixelToRem = (pixel: number): string => {
  return `${(pixel * 0.0625).toFixed(4)}rem`;
};
