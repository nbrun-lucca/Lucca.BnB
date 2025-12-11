import type { LuUserTileUserInput } from '@lucca-front/ng/user';

import type { Request } from './request';

export interface Traveler {
  id: number;
  user: LuUserTileUserInput;
  email?: string;
  phoneNumber?: string;
  requests: Request[];
  passport: Passport | null;
}

export interface Passport {
  sleepPreferences?: {
    isEarlyBird?: boolean;
    isNightOwl?: boolean;
    sleepNotes?: string;
  };
  allergiesAndDiet?: {
    hasPetAllergy?: boolean;
    otherAllergies?: string;
    dietType?: 'Aucun' | 'Végétarien' | 'Végan' | 'Pas de porc' | 'Autre';
    dietNotes?: string;
  };
  otherPreferences?: string;
  lastUpdatedAt?: Date;
}
