import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { PasswordGuard } from './guards/password.guard.js';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    canActivate: [() => inject(PasswordGuard).canActivate()]
  },
  {
    path: 'authenticate',
    loadComponent: () => import('./pages/authenticate/authenticate.page').then( m => m.AuthenticatePage)
  }
];
