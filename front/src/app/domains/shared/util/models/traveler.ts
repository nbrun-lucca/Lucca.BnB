import type { LuUserTileUserInput } from '@lucca-front/ng/user';

import type { Request } from './request';

export interface Traveler {
  id: number;
  user: LuUserTileUserInput;
  phoneNumber?: string;
  email?: string;
  requests: Request[];
  passport: Passport | null;
}

export interface Passport {
  sleepPreferences?: {
    isEarlyBird?: boolean;
    isNightOwl?: boolean;
    sleepNotes?: string;
  };
  comfortPreferences?: {
    okWithSofaBed?: boolean;
    okWithSharedRoom?: boolean;
    okWithPetsAtHome?: boolean;
    okWithChildrenAtHome?: boolean;
    okWithSmokersHome?: boolean;
    comfortNotes?: string;
  };
  allergiesAndDiet?: {
    hasPetAllergy?: boolean;
    otherAllergies?: string;
    dietType?: 'none' | 'vegetarian' | 'vegan' | 'noPork' | 'noAlcohol' | 'other';
    dietNotes?: string;
  };
  socialPreferences?: {
    prefersAutonomy?: boolean;
    openToSharedMeals?: boolean;
    interactionNotes?: string;
  };
  accessibility?: {
    hasMobilityConstraints?: boolean;
    mobilityNotes?: string;
  };
  communication?: {
    preferredLanguages?: string[];
    languageNotes?: string;
  };
  otherPreferences?: string;
  lastUpdatedAt?: Date;
}
