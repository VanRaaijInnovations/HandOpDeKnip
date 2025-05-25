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
        path: 'transactions/view',
        loadComponent: () => import('./transactions/pages/transaction-view/transaction-view.page').then( m => m.TransactionViewPage)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'settings/bank-accounts',
        loadComponent: () =>
          import('./settings/pages/bank-accounts/bank-accounts.page').then(
            (m) => m.BankAccountsPage
          ),
      },
      {
        path: 'settings/bank-accounts/add-new-bank-account',
        loadComponent: () => import('./settings/pages/bank-accounts/add-new-bank-account/add-new-bank-account.page').then( m => m.AddNewBankAccountPage)
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
  },
];
