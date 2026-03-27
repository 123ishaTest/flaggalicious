import { z } from 'zod';
import type { Component } from 'svelte';
import HorizontalTricolorLayout from '$lib/layouts/HorizontalTricolorLayout.svelte';
import type { FlagColor } from '$lib/model/FlagColor.ts';
import VerticalTricolorLayout from '$lib/layouts/VerticalTricolorLayout.svelte';
import CenterCircleLayout from '$lib/layouts/CenterCircleLayout.svelte';
import HorizontalBicolorLayout from '$lib/layouts/HorizontalBicolorLayout.svelte';
import SwedishCross from '$lib/layouts/SwedishCross.svelte';
import DanishCrossLayout from '$lib/layouts/DanishCrossLayout.svelte';
import HorizontalTricolorSmallLayout from '$lib/layouts/HorizontalTricolorSmallLayout.svelte';
import SidebarBicolorLayout from '$lib/layouts/SidebarBicolorLayout.svelte';
import HorizontalTricolor211Layout from '$lib/layouts/HorizontalTricolor211Layout.svelte';
import SquareCrossLayout from '$lib/layouts/SquareCrossLayout.svelte';
import SpainLayout from '$lib/layouts/SpainLayout.svelte';
import MexicoLayout from '$lib/layouts/MexicoLayout.svelte';
import PeruLayout from '$lib/layouts/PeruLayout.svelte';
import SidebarTricolorLayout from '$lib/layouts/SidebarTricolorLayout.svelte';
import ParaguayLayout from '$lib/layouts/ParaguayLayout.svelte';
import ArgentinaLayout from '$lib/layouts/ArgentinaLayout.svelte';
import BoliviaLayout from '$lib/layouts/BoliviaLayout.svelte';
import UgandaLayout from '$lib/layouts/UgandaLayout.svelte';
import Horizontal31213LayoutLayout from '$lib/layouts/Horizontal31213LayoutLayout.svelte';
import FinnishCross from '$lib/layouts/FinnishCross.svelte';

export const FlagLayoutSchema = z.enum([
  'horizontal-tricolor',
  'horizontal-tricolor-small',
  'horizontal-tricolor-211',
  'horizontal-31213',
  'horizontal-bicolor',
  'vertical-tricolor',
  'sidebar-bicolor',
  'sidebar-tricolor',
  'center-circle',
  'swedish-cross',
  'finnish-cross',
  'danish-cross',
  'square-cross',
  'spain',
  'mexico',
  'peru',
  'paraguay',
  'argentina',
  'bolivia',
  'uganda',
]);

export type FlagLayout = z.infer<typeof FlagLayoutSchema>;

const layoutMap: Record<FlagLayout, Component<{ colors: Record<string, FlagColor> }>> = {
  'horizontal-tricolor': HorizontalTricolorLayout,
  'horizontal-tricolor-small': HorizontalTricolorSmallLayout,
  'horizontal-tricolor-211': HorizontalTricolor211Layout,
  'horizontal-31213': Horizontal31213LayoutLayout,
  'horizontal-bicolor': HorizontalBicolorLayout,
  'vertical-tricolor': VerticalTricolorLayout,
  'sidebar-bicolor': SidebarBicolorLayout,
  'sidebar-tricolor': SidebarTricolorLayout,
  'center-circle': CenterCircleLayout,
  'swedish-cross': SwedishCross,
  'finnish-cross': FinnishCross,
  'danish-cross': DanishCrossLayout,
  'square-cross': SquareCrossLayout,
  spain: SpainLayout,
  mexico: MexicoLayout,
  peru: PeruLayout,
  paraguay: ParaguayLayout,
  argentina: ArgentinaLayout,
  bolivia: BoliviaLayout,
  uganda: UgandaLayout,
};

export const getLayout = (layoutName: FlagLayout): Component<{ colors: Record<string, FlagColor> }> => {
  return layoutMap[layoutName];
};
