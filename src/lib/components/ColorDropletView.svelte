<script lang="ts">
  import { type FlagColor, getFlagColor } from '$lib/model/FlagColor.ts';
  import { createDraggable } from '@dnd-kit/svelte';

  interface Props {
    colorName: FlagColor;
  }

  let { colorName }: Props = $props();

  let color = $derived(getFlagColor(colorName));
  // svelte-ignore state_referenced_locally
  const draggable = createDraggable({ id: colorName });
</script>

<div
  class="flex h-16 w-16 cursor-pointer flex-col items-center justify-center border-2 border-white bg-blue-700/60 p-2"
  {@attach draggable.attachHandle}
>
  <svg viewBox="0 0 512 512" {@attach draggable.attach} style="outline: none">
    <g>
      <path
        d="M263.844 40.344C234.1 213.202 145.594 248.03 145.594 369.22c0 60.804 60.106 105.5 118.25 105.5 59.45 0 115.937-41.803 115.937-99.533 0-116.332-85.2-162.312-115.936-334.843zm-58.28 217.094c-27.963 75.53-5.105 154.567 54.25 179.375 15.185 6.348 31.724 7.714 47.905 6.28-116.134 49.787-185.836-79.816-102.158-185.656z"
        fill={color}
      ></path>
    </g>
  </svg>
</div>
