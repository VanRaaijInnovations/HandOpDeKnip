/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { isDevMode } from '@angular/core';
import { bankAccountReducer } from './app/state/reducers/bank-account.reducer';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { transactionReducer } from './app/state/reducers/transaction.reducer';
import { settingsReducer } from './app/state/reducers/settings.reducer';
import { PasswordGuard } from './app/guards/password.guard.js';

defineCustomElements(window);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'LOCALE_ID', useValue: 'nl-NL' },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideStore({
        bankAccounts: bankAccountReducer,
        transactions: transactionReducer,
        settings: settingsReducer
    }),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    { provide: PasswordGuard }
  ]
});
