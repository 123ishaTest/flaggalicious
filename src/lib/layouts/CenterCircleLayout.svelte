<script lang="ts">
  import { createDroppable } from '@dnd-kit/svelte';
  import { type FlagColor, getFlagColor } from '$lib/model/FlagColor.ts';

  type Region = 'circle' | 'back';

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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
  <defs>
    <clipPath id="clip" clipPathUnits="userSpaceOnUse">
      <path
        d="
        M0,0 H900 V600 H0 Z
        M450,300 m-180,0
        a180,180 0 1,0 360,0
        a180,180 0 1,0 -360,0
      "
        fill-rule="evenodd"
      />
    </clipPath>
  </defs>

  <rect
    {@attach createDroppable({ id: 'back', collisionPriority: -999 }).attach}
    fill={getColor('back')}
    stroke={getStroke('back')}
    clip-path="url(#clip)"
    stroke-width="25"
    width="900"
    height="600"
  />

  <circle
    {@attach createDroppable({ id: 'circle', collisionPriority: 999 }).attach}
    fill={getColor('circle')}
    stroke={getStroke('circle')}
    stroke-width="10"
    cx="450"
    cy="300"
    r="180"
  />
</svg>
