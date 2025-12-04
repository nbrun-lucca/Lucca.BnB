import type { Host } from './host';
import type { Traveler } from './traveler';

export interface User {
  isAdmin: boolean;
  traveler: Traveler | null;
  isHost: boolean;
  host: Host | null;
}
