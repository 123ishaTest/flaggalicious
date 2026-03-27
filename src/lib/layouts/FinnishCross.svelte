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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1100">
  <rect
    x="0"
    y="0"
    width="500"
    height="400"
    {@attach createDroppable({ id: 'back/1' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="5"
  />
  <rect
    x="800"
    y="0"
    width="1000"
    height="400"
    {@attach createDroppable({ id: 'back/2' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="5"
  />
  <rect
    x="0"
    y="700"
    width="500"
    height="400"
    {@attach createDroppable({ id: 'back/3' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="5"
  />
  <rect
    x="800"
    y="700"
    width="1000"
    height="400"
    {@attach createDroppable({ id: 'back/4' }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    stroke-width="5"
  />

  <svg viewBox="0 0 1800 1100">
    <path
      d="
        M 500 0
        H 800
        V 400
        H 1800
        V 700
        H 800
        V 1100
        H 500
        V 700
        H 0
        V 400
        H 500
        Z
      "
      {@attach createDroppable({ id: 'cross' }).attach}
      fill={getColor('cross')}
      stroke={getStroke('cross')}
      stroke-width="2"
    />
  </svg>
</svg>
