<script lang="ts">
  import { createDroppable } from '@dnd-kit/svelte';
  import { type FlagColor, getFlagColor } from '$lib/model/FlagColor.ts';

  type Region = 'top' | 'bottom';

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
  <rect
    {@attach createDroppable({ id: 'top' }).attach}
    fill={getColor('top')}
    stroke={getStroke('top')}
    stroke-width="0.05"
    x="0"
    y="0"
    width="3"
    height="1"
  />
  <rect
    {@attach createDroppable({ id: 'bottom' }).attach}
    fill={getColor('bottom')}
    stroke={getStroke('bottom')}
    stroke-width="0.05"
    x="0"
    y="1"
    width="3"
    height="1"
  />
</svg>
