<script lang="ts">
  import { createDroppable } from '@dnd-kit/svelte';
  import { type FlagColor, getFlagColor } from '$lib/model/FlagColor.ts';

  type Region = 'cross' | 'back';

  interface Props {
    colors: Record<Region, FlagColor>;
  }

  let { colors }: Props = $props();

  const getColor = (region: Region) => {
    const colorName = colors[region];
    if (!colorName) {
      return 'transparent';
    }
    return getFlagColor(colorName);
  };

  const getStroke = (region: Region) => {
    const colorName = colors[region];
    if (!colorName) {
      return 'white';
    }
    return getColor(region);
  };
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <mask id="cross-cutout">
      <!-- White = visible -->
      <rect x="0" y="0" width="32" height="32" fill="white" />

      <!-- Black = cut out (the cross) -->
      <path d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z" fill="black" />
    </mask>
  </defs>

  <path
    d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z"
    {@attach createDroppable({ id: 'cross' }).attach}
    fill={getColor('cross')}
    stroke={getStroke('cross')}
    stroke-width="0.05"
  />

  <rect
    x="0"
    y="0"
    width="32"
    height="32"
    mask="url(#cross-cutout)"
    {@attach createDroppable({ id: 'back' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="0.05"
  />
</svg>
