<script lang="ts">
  import { createDroppable } from '@dnd-kit/svelte';
  import { type FlagColor, getFlagColor } from '$lib/model/FlagColor.ts';

  type Region = 'top' | 'middle' | 'bottom';

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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6">
  <path
    {@attach createDroppable({ id: 'bottom' }).attach}
    fill={getColor('bottom')}
    stroke={getStroke('bottom')}
    stroke-width="0.1"
    d="M0 4h9v2H0z"
  />
  <path
    {@attach createDroppable({ id: 'middle' }).attach}
    fill={getColor('middle')}
    stroke={getStroke('middle')}
    stroke-width="0.1"
    d="M0 2h9v2H0z"
  />
  <path
    {@attach createDroppable({ id: 'top' }).attach}
    fill={getColor('top')}
    stroke={getStroke('top')}
    stroke-width="0.1"
    d="M0 0h9v2H0z"
  />
</svg>
