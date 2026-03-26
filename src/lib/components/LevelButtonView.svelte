<script lang="ts">
  import { resolve } from '$app/paths';

  interface Props {
    level: string;
    isCompleted: boolean;
  }

  let { level, isCompleted }: Props = $props();

  let bgColor = $derived(isCompleted ? 'bg-blue-tech-dark' : '');
</script>

<a
  href={resolve(`/[level]`, { level })}
  role="button"
  class="flex h-16 w-16 cursor-pointer flex-col items-center justify-center border-2 border-white {bgColor} p-2 font-bold text-white"
>
  {level}
</a>
