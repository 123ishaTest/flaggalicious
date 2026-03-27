<script lang="ts">
  import { createDroppable } from '@dnd-kit/svelte';
  import { type FlagColor, getFlagColor } from '$lib/model/FlagColor.ts';

  type Region = 'left' | 'top' | 'middle' | 'bottom';

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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3">
  <rect
    x="0"
    y="0"
    width="1.5"
    height="3"
    {@attach createDroppable({ id: 'left' }).attach}
    fill={getColor('left')}
    stroke={getStroke('left')}
    stroke-width="0.05"
  />

  <rect
    x="1.5"
    y="0"
    width="4.5"
    height="1"
    {@attach createDroppable({ id: 'top' }).attach}
    fill={getColor('top')}
    stroke={getStroke('top')}
    stroke-width="0.05"
  />

  <rect
    x="1.5"
    y="1"
    width="4.5"
    height="1"
    {@attach createDroppable({ id: 'middle' }).attach}
    fill={getColor('middle')}
    stroke={getStroke('middle')}
    stroke-width="0.05"
  />

  <rect
    x="1.5"
    y="2"
    width="4.5"
    height="1"
    {@attach createDroppable({ id: 'bottom' }).attach}
    fill={getColor('bottom')}
    stroke={getStroke('bottom')}
    stroke-width="0.05"
  />
</svg>
