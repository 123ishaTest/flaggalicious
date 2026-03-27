<script lang="ts">
  import './layout.css';
  import FlaggaliciousLogo from '$lib/components/FlaggaliciousLogo.svelte';
  import LevelSelectionView from '$lib/components/LevelSelectionView.svelte';
  import { setContext } from 'svelte';
  import { ProgressManager } from '$lib/model/ProgressManager.svelte.ts';
  import CreditsView from '$lib/components/CreditsView.svelte';

  let { data, children } = $props();

  let levelPack = $derived(data.levelPack);

  setContext('progressManager', new ProgressManager());
</script>

<div class="">
  <div class="mb-12 flex flex-row justify-center pt-12">
    <FlaggaliciousLogo />
  </div>

  <div class="flex flex-col items-center space-y-2">
    {#each data.warnings as warning (warning.path)}
      <div role="alert" class="border-rounded flex w-96 flex-row items-center bg-yellow-300 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="m-4 h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div class="flex flex-col">
          <span>{warning.path}</span>
          <span>{warning.message}</span>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center xl:flex-row xl:space-x-16">
      <div class="order-1 w-96 p-4">
        <LevelSelectionView {levelPack}></LevelSelectionView>
      </div>

      <div class="order-first w-96 p-4 xl:order-2">
        {@render children()}
      </div>

      <div class="order-3 w-96 p-4">
        <CreditsView />
      </div>
    </div>
  </div>
</div>
