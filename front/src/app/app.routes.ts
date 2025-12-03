import type { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('@app/dashboard/feature/dashboard.page'),
  },
  {
    path: 'journey',
    loadComponent: () => import('@app/journey/feature/journey.page'),
  },
  {
    path: 'shelter',
    loadComponent: () => import('@app/shelter/feature/shelter.page'),
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
