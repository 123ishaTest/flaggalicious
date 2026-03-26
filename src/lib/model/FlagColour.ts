import { z } from 'zod';

export const FlagColourSchema = z.enum([
  'black',
  'white',

  'gold',
  'red-dark',
  'red-light',
  // 'blue',
  // 'green',
  // 'purple',
  // 'orange',
  // 'green-dark',
  'blue-dark',
  // 'blue-light',
]);

export type FlagColour = z.infer<typeof FlagColourSchema>;

const colorMap: Record<FlagColour, string> = {
  black: '#000000',
  'red-dark': '#AE1C28',
  'red-light': '#AE1C28',
  white: '#FFFFFF',
  'blue-dark': '#21468B',
  gold: '#FFCE00',
  // green: '#00FF00',
  // purple: '#FF00FF',
};

export const getFlagColor = (colorName: FlagColour): string => {
  return colorMap[colorName];
};
