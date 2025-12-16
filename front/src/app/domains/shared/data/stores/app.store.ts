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
        isAdmin: false,
        traveler: {
          id: 1,
          user: {
            firstName: 'Daniel',
            lastName: 'Hernandez',
            jobTitle: 'Responsable RH',
            pictureHref:
              'https://travelerwp.com/wp-content/uploads/2023/07/What-Does-Solo-Travel-Actually-Mean-Image-1.jpg',
          },
          email: 'dan.hernandez@gmail.com',
          phoneNumber: '06 54 32 10 00',
          requests: [],
          passport: {
            allergiesAndDiet: {
              dietNotes: 'En régime',
              dietType: 'Végétarien',
              hasPetAllergy: true,
              otherAllergies: 'Gluten',
            },
            sleepPreferences: {
              isEarlyBird: false,
              isNightOwl: true,
              sleepNotes: 'Je ronfle parfois',
            },
            otherPreferences: 'Je suis assez autonome !',
            lastUpdatedAt: new Date(),
          },
        },
        isHost: true,
        host: {
          id: 1,
          requests: [],
          accommodation: {
            photo:
              'https://www.maisons-pierre.com/wp-content/uploads/2021/04/1300x600-maisons-pierre-lemag-quel-type-maison-choisir-couv.jpg',
            name: 'Ma petite maison',
            adress: '151-157 Av. de France, 75013 Paris, France',
            adressHref: 'https://maps.app.goo.gl/fVSoDXoW21W6bTAB7',
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
