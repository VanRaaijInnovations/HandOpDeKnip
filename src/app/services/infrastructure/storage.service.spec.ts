import { TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { bankAccountReducer } from 'src/app/state/reducers/bank-account.reducer';
import { transactionReducer } from 'src/app/state/reducers/transaction.reducer';
import { settingsReducer } from 'src/app/state/reducers/settings.reducer';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore({
          bankAccounts: bankAccountReducer,
          transactions: transactionReducer,
          settings: settingsReducer
        })
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
