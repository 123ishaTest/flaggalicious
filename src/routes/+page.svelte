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

<div class="flex flex-col space-y-2">
  {#each data.warnings as warning (warning.path)}
    <div role="alert" class="alert alert-warning">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>{warning.path}: {warning.message}</span>
    </div>
  {/each}
</div>

<div class="flex h-full flex-row">
  <FlagPuzzleView {puzzle}></FlagPuzzleView>
</div>
