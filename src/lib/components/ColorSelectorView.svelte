<script lang="ts">
  import type { FlagPuzzle } from '$lib/model/FlagPuzzle.ts';
  import ColorDropletView from '$lib/components/ColorDropletView.svelte';
  import { shuffle } from 'es-toolkit';

  interface Props {
    puzzle: FlagPuzzle;
  }

  let { puzzle }: Props = $props();

  let colors = $derived(shuffle(puzzle.options));
</script>

<div class="grid grid-cols-4 gap-4">
  {#each colors as color (color)}
    <ColorDropletView colorName={color} />
  {/each}
</div>
