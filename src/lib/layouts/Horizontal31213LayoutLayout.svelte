<script lang="ts">
  import { createDroppable } from '@dnd-kit/svelte';
  import { type FlagColor, getFlagColor } from '$lib/model/FlagColor.ts';

  type Region = 'top' | 'top-accent' | 'middle' | 'bottom-accent' | 'bottom';

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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
  <rect
    x="0"
    y="0"
    width="36"
    height="9"
    {@attach createDroppable({ id: 'top' }).attach}
    fill={getColor('top')}
    stroke={getStroke('top')}
    stroke-width="0.05"
  />

  <rect
    x="0"
    y="9"
    width="36"
    height="1"
    {@attach createDroppable({ id: 'top-accent' }).attach}
    fill={getColor('top-accent')}
    stroke={getStroke('top-accent')}
    stroke-width="0.05"
  />

  <!-- Middle black -->
  <rect
    x="0"
    y="10"
    width="36"
    height="4"
    {@attach createDroppable({ id: 'middle' }).attach}
    fill={getColor('middle')}
    stroke={getStroke('middle')}
    stroke-width="0.05"
  />

  <rect
    x="0"
    y="14"
    width="36"
    height="1"
    {@attach createDroppable({ id: 'bottom-accent' }).attach}
    fill={getColor('bottom-accent')}
    stroke={getStroke('bottom-accent')}
    stroke-width="0.05"
  />

  <rect
    x="0"
    y="15"
    width="36"
    height="9"
    {@attach createDroppable({ id: 'bottom' }).attach}
    fill={getColor('bottom')}
    stroke={getStroke('bottom')}
    stroke-width="0.05"
  />
</svg>
