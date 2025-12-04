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
  roomAtSide: boolean;
  equipment: string;
  othersRoomates: string;
  othersInfos: string;
}
