import type { Request } from './request';

export interface Traveler {
  id: number;
  passport: Passport | null;
  requests: Request[];
}

export interface Passport {
  name: string;
  photo: string;
  adress: string;
  type: string;
  roomAtSide: boolean;
  equipment: string;
  othersRoomates: string;
  othersInfos: string;
}
