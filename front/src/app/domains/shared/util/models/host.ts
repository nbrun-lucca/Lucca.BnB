import type { Request } from './request';

export interface Host {
  id: number;
  accommodation: Accommodation | null;
  requests: Request[];
}

export interface Accommodation {
  name: string;
  photo: string;
  adress: string;
  adressHref?: string;
  type: string;
  hasRoomSide: boolean;
  sleepingType: string;
  equipment: string;
  durationInfos?: string;
  othersRoomates?: string;
  othersInfos?: string;
}
