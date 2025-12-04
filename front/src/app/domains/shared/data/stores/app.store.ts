import type { User } from '@app/shared/util/models/user';

import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState<User>({
    isAdmin: false,
    traveler: null,
    isHost: false,
    host: null,
  }),

  withMethods((store, router = inject(Router)) => {
    const loadUser = () => {
      return {
        traveler: null,
        isHost: false,
        host: null,
      };
    };

    const toggleHosting = () => {
      const newValue = !store.isHost();
      patchState(store, { isHost: newValue });
      if (newValue) {
        router.navigate(['/host']);
      } else {
        router.navigate(['/dashboard']);
      }
    };

    return { loadUser, toggleHosting };
  }),
  withHooks((store) => ({
    onInit() {
      store.loadUser();
    },
  })),
);
