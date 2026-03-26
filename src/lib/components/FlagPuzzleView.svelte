<script lang="ts">
  import type { FlagPuzzle } from '$lib/model/FlagPuzzle.ts';
  import ColorSelectorView from '$lib/components/ColorSelectorView.svelte';
  import { getLayout } from '$lib/model/FlagLayout.ts';
  import { DragDropProvider } from '@dnd-kit/svelte';
  import { isEqual } from 'es-toolkit';

  import confetti from 'canvas-confetti';
  import { DragDropManager, PointerActivationConstraints, PointerSensor } from '@dnd-kit/dom';

  interface Props {
    puzzle: FlagPuzzle;
  }

  let { puzzle }: Props = $props();

  const LayoutComponent = $derived(getLayout(puzzle.layout));

  function onDragEnd(event) {
    const source = event.operation.source.id;
    const target = event.operation.target?.id;
    // console.log(`from ${source} to ${target}`);
    selectedColors[target] = source;
    checkForWin();
  }

  function checkForWin() {
    const isSolved = isEqual(selectedColors, puzzle.solution);
    if (!isSolved) {
      return;
    }
    showConfetti();
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

  let selectedColors = $state({});

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

    <LayoutComponent colors={selectedColors} />

    <ColorSelectorView {puzzle}></ColorSelectorView>
  </div>
</DragDropProvider>
