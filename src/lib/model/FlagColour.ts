import { z } from 'zod';

export const FlagColourSchema = z.enum(['red', 'white', 'blue', 'green']);

export type FlagColour = z.infer<typeof FlagColourSchema>;

const colorMap: Record<FlagColour, string> = {
  red: '#FF0000',
  white: '#FFFFFF',
  blue: '#0000FF',
  green: '#00FF00',
};

export const getColor = (colorName: FlagColour): string => {
  return colorMap[colorName]
}