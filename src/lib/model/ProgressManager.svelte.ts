import { localStore } from '$lib/util/LocalStore.svelte.ts';

export class ProgressManagerSvelte {
  private readonly _state: Record<string, Record<string, boolean>>;
  constructor() {
    this._state = localStore('@123ishatest/flaggalicious', {
      global: {},
    }).value;
  }

  public completeLevel(bundle: string, level: string): void {
    if (!(bundle in this._state)) {
      this._state[bundle] = {};
    }
    this._state[bundle][level] = true;
  }

  public isLevelCompleted(bundle: string, level: string): boolean {
    return this._state[bundle]?.[level] ?? false;
  }
}
