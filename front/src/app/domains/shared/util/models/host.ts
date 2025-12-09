import type { Request } from './request';

export interface Host {
  id: number;
  shelter: Shelter | null;
  requests: Request[];
}

export interface Shelter {
  name: string;
  photo: string;
  adress: string;
  type: string;
  hasRoomSide: boolean;
  sleepingType: string;
  equipment: string;
  durationInfos?: string;
  othersRoomates?: string;
  othersInfos?: string;
}
