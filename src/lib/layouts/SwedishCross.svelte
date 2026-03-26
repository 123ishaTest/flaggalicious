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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10">
  <rect
    x="0"
    y="0"
    width="5"
    height="4"
    {@attach createDroppable({ id: 'back/1' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="0.2"
  />
  <rect
    x="7"
    y="0"
    width="9"
    height="4"
    {@attach createDroppable({ id: 'back/2' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="0.2"
  />
  <rect
    x="0"
    y="6"
    width="5"
    height="4"
    {@attach createDroppable({ id: 'back/3' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="0.2"
  />
  <rect
    x="7"
    y="6"
    width="9"
    height="4"
    {@attach createDroppable({ id: 'back/4' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="0.2"
  />

  <svg viewBox="0 0 16 10">
    <path
      d="
      M 5 0
      H 7
      V 4
      H 16
      V 6
      H 7
      V 10
      H 5
      V 6
      H 0
      V 4
      H 5
      Z
    "
      {@attach createDroppable({ id: 'cross' }).attach}
      fill={getColor('cross')}
      stroke={getStroke('cross')}
      stroke-width="0.1"
    />
  </svg>
</svg>
