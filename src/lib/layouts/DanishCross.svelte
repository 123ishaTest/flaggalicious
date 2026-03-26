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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 28">
  <rect
    x="0"
    y="0"
    width="12"
    height="12"
    {@attach createDroppable({ id: 'back/1' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="0.2"
  />

  <rect
    x="16"
    y="0"
    width="21"
    height="12"
    {@attach createDroppable({ id: 'back/2' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="0.2"
  />

  <rect
    x="0"
    y="16"
    width="12"
    height="12"
    {@attach createDroppable({ id: 'back/3' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="0.2"
  />

  <rect
    x="16"
    y="16"
    width="21"
    height="12"
    {@attach createDroppable({ id: 'back/4' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="0.2"
  />

  <path
    d="
      M 12 0
      H 16
      V 12
      H 37
      V 16
      H 16
      V 28
      H 12
      V 16
      H 0
      V 12
      H 12
      Z
    "
    {@attach createDroppable({ id: 'cross/1' }).attach}
    fill={getColor('cross')}
    stroke={getStroke('cross')}
    stroke-width="0.1"
  />
</svg>
