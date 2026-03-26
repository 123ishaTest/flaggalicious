import { z } from 'zod';
import type { Component } from 'svelte';
import HorizontalTricolorLayout from '$lib/layouts/HorizontalTricolorLayout.svelte';
import type { FlagColor } from '$lib/model/FlagColor.ts';
import VerticalTricolorLayout from '$lib/layouts/VerticalTricolorLayout.svelte';
import CenterCircleLayout from '$lib/layouts/CenterCircleLayout.svelte';
import HorizontalBicolorLayout from '$lib/layouts/HorizontalBicolorLayout.svelte';
import SwedishCross from '$lib/layouts/SwedishCross.svelte';
import DanishCross from '$lib/layouts/DanishCross.svelte';

export const FlagLayoutSchema = z.enum([
  'horizontal-tricolor',
  'horizontal-bicolor',
  'vertical-tricolor',
  'center-circle',
  'swedish-cross',
  'danish-cross',
]);

export type FlagLayout = z.infer<typeof FlagLayoutSchema>;

const layoutMap: Record<FlagLayout, Component<{ colors: Record<string, FlagColor> }>> = {
  'horizontal-tricolor': HorizontalTricolorLayout,
  'horizontal-bicolor': HorizontalBicolorLayout,
  'vertical-tricolor': VerticalTricolorLayout,
  'center-circle': CenterCircleLayout,
  'swedish-cross': SwedishCross,
  'danish-cross': DanishCross,
};

export const getLayout = (layoutName: FlagLayout): Component<{ colors: Record<string, FlagColor> }> => {
  return layoutMap[layoutName];
};
