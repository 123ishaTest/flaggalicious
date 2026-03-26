<script lang="ts">
  import type { FlagPuzzle } from '$lib/model/FlagPuzzle.ts';
  import ColorDropletView from '$lib/components/ColorDropletView.svelte';
  import ColorSelectorView from '$lib/components/ColorSelectorView.svelte';
  import { asset } from '$app/paths';

  interface Props {
    puzzle: FlagPuzzle;
  }

  let { puzzle }: Props = $props();

  let layout = $derived(asset(`/layouts/${puzzle.layout}.svg`))
</script>

<div class="card w-96 bg-base-100 shadow-sm">
  <figure>
    <img src={layout} alt="{puzzle.layout}" />
  </figure>
  <div class="card-body">
    <ColorSelectorView {puzzle}></ColorSelectorView>
  </div>

</div>
