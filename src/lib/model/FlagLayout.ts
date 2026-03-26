import { z } from 'zod';
import type { Component } from 'svelte';
import TricolorHorizontalLayout from '$lib/layouts/TricolorHorizontalLayout.svelte';
import type { FlagColour } from '$lib/model/FlagColour.ts';

export const FlagLayoutSchema = z.enum([
  'tricolor-horizontal',
  // 'tricolor-vertical'
]);

export type FlagLayout = z.infer<typeof FlagLayoutSchema>;

const layoutMap: Record<FlagLayout, Component<{ colors: Record<string, FlagColour> }>> = {
  'tricolor-horizontal': TricolorHorizontalLayout,
  // 'tricolor-vertical': TricolorHorizontalLayout,
};

export const getLayout = (layoutName: FlagLayout): Component<{ colors: Record<string, FlagColour> }> => {
  return layoutMap[layoutName];
};
