import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'overview',
        loadComponent: () =>
          import('./overview/overview.page').then((m) => m.OverviewPage),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./transactions/transactions.page').then((m) => m.TransactionsPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./settings/settings.page').then((m) => m.SettingsPage),
        children: [
          {
            path: 'bank-accounts',
            loadComponent: () =>
              import('./settings/pages/bank-accounts/bank-accounts.page').then(
                (m) => m.BankAccountsPage
              ),
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/overview',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/overview',
    pathMatch: 'full',
  }
];
