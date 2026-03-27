import { z } from 'zod';

export const FlagColorSchema = z.enum([
  'black',
  'white',

  'gold',
  'red-dark',
  // 'red-light',
  // 'blue',
  'green',
  // 'purple',
  'orange',
  // 'green-dark',
  'blue-dark',
  'blue-light',
]);

export type FlagColor = z.infer<typeof FlagColorSchema>;

const colorMap: Record<FlagColor, string> = {
  black: '#000000',
  'red-dark': '#AE1C28',
  // 'red-light': '#AE1C28',
  white: '#FFFFFF',
  'blue-dark': '#21468B',
  'blue-light': '#0072CE',
  orange: '#F77F00',
  gold: '#FFCE00',
  green: '#008C45',
  // purple: '#FF00FF',
};

export const getFlagColor = (colorName: FlagColor): string => {
  return colorMap[colorName];
};
