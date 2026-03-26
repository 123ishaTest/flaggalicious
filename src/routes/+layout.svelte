<script lang="ts">
  import './layout.css';

  let { children } = $props();
</script>

<div class="p-4">
  {@render children()}
</div>
