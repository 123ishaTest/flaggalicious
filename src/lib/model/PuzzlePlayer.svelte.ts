import type { FlagPuzzle } from '$lib/model/FlagPuzzle.ts';
import { isEqual } from 'es-toolkit';
import type { FlagColor } from '$lib/model/FlagColor.ts';
import { SimpleEventDispatcher } from 'strongly-typed-events';

export class PuzzlePlayer {
  private readonly _puzzle: FlagPuzzle;
  private readonly _selectedColors: Record<string, FlagColor> = $state({});

  constructor(puzzle: FlagPuzzle) {
    this._puzzle = puzzle;
  }

  public selectColor(region: string, color: FlagColor): void {
    if (this.isSolved()) {
      return;
    }
    this.setColor(region, color);
  }

  private setColor(region: string, color: FlagColor): void {
    this._selectedColors[region] = color;
  }

  public isSolved(): boolean {
    return isEqual(this._selectedColors, this._puzzle.solution);
  }

  get puzzle(): FlagPuzzle {
    return this._puzzle;
  }

  get selectedColors(): Record<string, FlagColor> {
    return this._selectedColors;
  }

  private _onSolve = new SimpleEventDispatcher<FlagPuzzle>();
  /**
   * Emitted when the puzzle is solved
   */
  public get onSolve() {
    return this._onSolve.asEvent();
  }
}
