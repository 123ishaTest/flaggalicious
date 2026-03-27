import { localStore } from '$lib/util/LocalStore.svelte.ts';

export class ProgressManager {
  private readonly _state: Record<string, Record<string, boolean>>;
  constructor() {
    this._state = localStore('@123ishatest/flaggalicious', {}).value;
  }

  public completeLevel(pack: string, level: string): void {
    if (!(pack in this._state)) {
      this._state[pack] = {};
    }
    this._state[pack][level] = true;
  }

  public isLevelCompleted(pack: string, level: string): boolean {
    return this._state[pack]?.[level] ?? false;
  }

  public nukeItAll(): void {
    for (const key in this._state) {
      delete this._state[key];
    }
  }
}
