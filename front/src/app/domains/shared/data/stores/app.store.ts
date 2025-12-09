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
      const user: User = {
        isAdmin: true,
        traveler: {
          id: 1,
          user: {
            firstName: 'Daniel',
            lastName: 'Hernandez',
            jobTitle: 'Responsable RH',
            pictureHref: 'https://upload.wikimedia.org/wikipedia/commons/8/82/DHern%C3%A1ndez.jpg',
          },
          requests: [],
          passport: {
            comfortPreferences: {
              okWithChildrenAtHome: true,
              okWithPetsAtHome: false,
              okWithSharedRoom: false,
              okWithSmokersHome: false,
              okWithSofaBed: true,
              comfortNotes: 'Supporte seulement les chats.',
            },
            allergiesAndDiet: {
              dietNotes: 'En régime',
              dietType: 'vegetarian',
              hasPetAllergy: false,
              otherAllergies: 'Gluten',
            },
            sleepPreferences: {
              isEarlyBird: false,
              isNightOwl: true,
              sleepNotes: 'Je ronfle',
            },
            communication: {
              preferredLanguages: ['Français'],
              languageNotes: 'Je parle le franglais.',
            },
            socialPreferences: {
              openToSharedMeals: false,
              prefersAutonomy: true,
              interactionNotes: "J'aime pas les gens",
            },
            accessibility: {
              hasMobilityConstraints: false,
              mobilityNotes: "J'ai une canne",
            },
            otherPreferences: 'Je préfère le rouge.',
            lastUpdatedAt: new Date(),
          },
        },
        isHost: true,
        host: {
          id: 1,
          requests: [],
          shelter: {
            photo:
              'https://www.maisons-pierre.com/wp-content/uploads/2021/04/1300x600-maisons-pierre-lemag-quel-type-maison-choisir-couv.jpg',
            name: 'Ma petite maison',
            adress: '151-157 Av. de France, 75013 Paris',
            type: 'Maison | Appartement',
            hasRoomSide: true,
            sleepingType: 'Lit | Canapé | Matelas gonflable',
            equipment: 'Wifi, serviettes de bain, parking, local à vélo',
            othersRoomates: 'Animaux, enfants, conjoints, colocs, etc',
            othersInfos: 'Horaires de sommeil, fumeur/non fumeur, etc',
          },
        },
      };
      patchState(store, user);
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
