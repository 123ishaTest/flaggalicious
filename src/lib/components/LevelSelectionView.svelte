<script lang="ts">
  import type { LevelPack } from '$lib/model/LevelPack.ts';
  import LevelButtonView from '$lib/components/LevelButtonView.svelte';
  import { getContext } from 'svelte';
  import { ProgressManager } from '$lib/model/ProgressManager.svelte.ts';

  interface Props {
    levelPack: LevelPack;
  }

  let { levelPack }: Props = $props();

  let levels = $derived(Object.keys(levelPack.levels));

  const progressManager = getContext<ProgressManager>('progressManager');

  const isCompleted: boolean[] = $derived(levels.map((level) => progressManager.isLevelCompleted(levelPack.id, level)));
</script>

<div class="space-y-16 border-4 border-white bg-blue-luminous-transparant p-6 shadow-xl">
  <div class="grid grid-cols-4 gap-4">
    {#each levels as level, i (level)}
      <LevelButtonView {level} isCompleted={isCompleted[i]}></LevelButtonView>
    {/each}
  </div>
</div>
