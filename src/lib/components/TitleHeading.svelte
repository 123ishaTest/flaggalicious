<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<h2 class="mt-10 h-16 text-center text-2xl font-bold text-white">
  {@render children()}
</h2>
