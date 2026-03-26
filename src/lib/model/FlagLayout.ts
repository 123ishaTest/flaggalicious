import { z } from 'zod';
import type { Component } from 'svelte';
import HorizontalTricolorLayout from '$lib/layouts/HorizontalTricolorLayout.svelte';
import type { FlagColor } from '$lib/model/FlagColor.ts';
import VerticalTricolorLayout from '$lib/layouts/VerticalTricolorLayout.svelte';
import CenterCircleLayout from '$lib/layouts/CenterCircleLayout.svelte';
import HorizontalBicolorLayout from '$lib/layouts/HorizontalBicolorLayout.svelte';
import SwedishCross from '$lib/layouts/SwedishCross.svelte';
import DanishCross from '$lib/layouts/DanishCross.svelte';
import HorizontalTricolorSmallLayout from '$lib/layouts/HorizontalTricolorSmallLayout.svelte';
import SidebarBicolorLayout from '$lib/layouts/SidebarBicolorLayout.svelte';
import HorizontalTricolor211Layout from '$lib/layouts/HorizontalTricolor211Layout.svelte';

export const FlagLayoutSchema = z.enum([
  'horizontal-tricolor',
  'horizontal-tricolor-small',
  'horizontal-tricolor-211',
  'horizontal-bicolor',
  'vertical-tricolor',
  'sidebar-bicolor',
  'center-circle',
  'swedish-cross',
  'danish-cross',
]);

export type FlagLayout = z.infer<typeof FlagLayoutSchema>;

const layoutMap: Record<FlagLayout, Component<{ colors: Record<string, FlagColor> }>> = {
  'horizontal-tricolor': HorizontalTricolorLayout,
  'horizontal-tricolor-small': HorizontalTricolorSmallLayout,
  'horizontal-tricolor-211': HorizontalTricolor211Layout,
  'horizontal-bicolor': HorizontalBicolorLayout,
  'vertical-tricolor': VerticalTricolorLayout,
  'sidebar-bicolor': SidebarBicolorLayout,
  'center-circle': CenterCircleLayout,
  'swedish-cross': SwedishCross,
  'danish-cross': DanishCross,
};

export const getLayout = (layoutName: FlagLayout): Component<{ colors: Record<string, FlagColor> }> => {
  return layoutMap[layoutName];
};
