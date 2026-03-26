<script lang="ts">
  import type { FlagPuzzle } from '$lib/model/FlagPuzzle.ts';
  import ColorDropletView from '$lib/components/ColorDropletView.svelte';

  interface Props {
    puzzle: FlagPuzzle;
  }

  let { puzzle }: Props = $props();
</script>

<div class="grid grid-cols-8 gap-4">
  {#each puzzle.options as color (color) }
    <ColorDropletView colorName={color}/>
  {/each}
</div>