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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3">
  <rect
    {@attach createDroppable({ id: 'top' }).attach}
    fill={getColor('top')}
    stroke={getStroke('top')}
    stroke-width="0.1"
    width="6"
    height="1.2"
  />
  <rect
    {@attach createDroppable({ id: 'middle' }).attach}
    fill={getColor('middle')}
    stroke={getStroke('middle')}
    stroke-width="0.1"
    x="0"
    y="1.2"
    width="6"
    height="0.6"
  />
  <rect
    {@attach createDroppable({ id: 'bottom' }).attach}
    fill={getColor('bottom')}
    stroke={getStroke('bottom')}
    x="0"
    y="1.8"
    stroke-width="0.1"
    width="6"
    height="1.2"
  />
</svg>
