<script lang="ts">
  import type { LevelPack } from '$lib/model/LevelPack.ts';
  import { resolve } from '$app/paths';

  interface Props {
    levelPack: LevelPack;
  }

  let { levelPack }: Props = $props();

  let levels = $derived(Object.entries(levelPack.levels));
</script>

<div class="space-y-16 border-4 border-white bg-blue-luminous-transparant p-6 shadow-xl">
  <div class="grid grid-cols-4 gap-4">
    {#each levels as [key, level] (level)}
      <a
        href={resolve(`/[level]`, { level: key })}
        role="button"
        class="flex h-16 w-16 cursor-pointer flex-col items-center justify-center border-2 border-white bg-blue-original p-2 font-bold text-white"
      >
        {key}
      </a>
    {/each}
  </div>
</div>
