<script lang="ts">
  import { createDroppable } from '@dnd-kit/svelte';
  import { type FlagColor, getFlagColor } from '$lib/model/FlagColor.ts';

  type Region = 'left' | 'middle' | 'right';

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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2">
  <path
    {@attach createDroppable({ id: 'left' }).attach}
    fill={getColor('left')}
    d="M0 0h1v2H0z"
    stroke={getStroke('left')}
    stroke-width="0.05"
  />
  <path
    {@attach createDroppable({ id: 'middle' }).attach}
    fill={getColor('middle')}
    d="M1 0h1v2H1z"
    stroke={getStroke('middle')}
    stroke-width="0.05"
  />
  <path
    {@attach createDroppable({ id: 'right' }).attach}
    fill={getColor('right')}
    d="M2 0h1v2H2z"
    stroke={getStroke('right')}
    stroke-width="0.05"
  />
</svg>
