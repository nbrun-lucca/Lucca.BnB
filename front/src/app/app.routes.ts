import type { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/dashboard/feature/dashboard.page'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
