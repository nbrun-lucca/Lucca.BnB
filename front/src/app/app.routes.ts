import type { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('@app/dashboard/feature/dashboard.page'),
  },
  {
    path: 'map',
    loadComponent: () => import('@app/map/feature/map.page'),
  },
  {
    path: 'traveler',
    loadComponent: () => import('@app/traveler/feature/traveler.page'),
  },
  {
    path: 'host',
    loadComponent: () => import('@app/host/feature/host.page'),
  },
  {
    path: 'admin',
    loadComponent: () => import('@app/admin/feature/admin.page'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
