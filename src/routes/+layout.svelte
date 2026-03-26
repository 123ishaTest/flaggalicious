<script lang="ts">
  import './layout.css';
  import FlaggaliciousLogo from '$lib/components/FlaggaliciousLogo.svelte';

  let { children } = $props();
</script>

<div class="blueprint h-full">
  <div class="mb-12 flex flex-row justify-center pt-12">
    <FlaggaliciousLogo />
  </div>

  <div class="flex flex-col items-center justify-center">
    <div class="w-96 p-4">
      {@render children()}
    </div>
  </div>
</div>
