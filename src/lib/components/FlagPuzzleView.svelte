<script lang="ts">
  import type { FlagPuzzle } from '$lib/model/FlagPuzzle.ts';
  import ColorSelectorView from '$lib/components/ColorSelectorView.svelte';
  import { getLayout } from '$lib/model/FlagLayout.ts';
  import { DragDropProvider } from '@dnd-kit/svelte';

  import confetti from 'canvas-confetti';
  import { DragDropManager, PointerActivationConstraints, PointerSensor } from '@dnd-kit/dom';
  import { ProgressManager } from '$lib/model/ProgressManager.svelte.ts';
  import { PuzzlePlayer } from '$lib/model/PuzzlePlayer.svelte.ts';
  import { getContext, onMount } from 'svelte';
  import type { LevelPack } from '$lib/model/LevelPack.ts';

  interface Props {
    pack: LevelPack;
    puzzle: FlagPuzzle;
  }

  let { pack, puzzle }: Props = $props();

  // TODO(@Isha): Clean up, pass index and get puzzle from there?
  //  Or only pass puzzle here and signal further up?
  const packIndex = $derived(Object.keys(pack.levels).find((key) => pack.levels[key] === puzzle.id) ?? 'not-found');

  const LayoutComponent = $derived(getLayout(puzzle.layout));

  let player = new PuzzlePlayer(puzzle);
  const progressManager = getContext<ProgressManager>('progressManager');

  const isAlreadyCompleted = $derived(progressManager.isLevelCompleted(pack.id, packIndex));

  $effect(() => {
    player.loadPuzzle(puzzle);

    if (isAlreadyCompleted) {
      player.reveal();
    }
  });

  onMount(() => {
    return player.onSolve.subscribe(() => {
      progressManager.completeLevel(pack.id, packIndex);
      showConfetti();
    });
  });

  function onDragEnd(event) {
    const source = event.operation.source.id;
    const target = event.operation.target?.id;
    const realTarget = target.split('/')[0];
    // console.log(`from ${source} to ${realTarget}`);
    player.selectColor(realTarget, source);
  }

  function showConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }

  const manager = new DragDropManager({
    sensors: [
      PointerSensor.configure({
        activationConstraints: [
          new PointerActivationConstraints.Distance({ value: 5 }),
          new PointerActivationConstraints.Delay({ value: 200, tolerance: 10 }),
        ],
      }),
    ],
  });
</script>

<DragDropProvider {onDragEnd} {manager}>
  <div class="space-y-16 border-4 border-white bg-blue-luminous-transparant p-6 shadow-xl">
    <p class="mt-10 text-center text-2xl font-bold text-white">{puzzle.hint}</p>

    <div class="border border-white">
      <LayoutComponent colors={player.selectedColors} />
    </div>
    <ColorSelectorView {puzzle}></ColorSelectorView>
  </div>
</DragDropProvider>
