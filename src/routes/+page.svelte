<script lang="ts">
  import type { PageProps } from './$types';
  import FlagPuzzleView from '$lib/components/FlagPuzzleView.svelte';
  import { ContentManager } from '@123ishatest/louter';
  import { schemas } from '$lib/content/schemas.ts';

  let { data }: PageProps = $props();

  const contentManager = new ContentManager(schemas);
  // svelte-ignore state_referenced_locally
  contentManager.load(data.content);

  let puzzle = contentManager.get('/flag/germany', 'flag');
</script>

<div class="flex flex-row">
  <FlagPuzzleView {puzzle}></FlagPuzzleView>
</div>
