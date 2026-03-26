<script lang="ts">
  import type { PageProps } from './$types';
  import FlagPuzzleView from '$lib/components/FlagPuzzleView.svelte';
  let { data }: PageProps = $props();

  let puzzle = $derived(data.flag);
  let pack = $derived(data.levelPack);
</script>

<div class="flex h-full flex-row">
  <FlagPuzzleView {puzzle} {pack}></FlagPuzzleView>
</div>
