import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { bankAccountReducer } from 'src/app/state/reducers/bank-account.reducer';
import { transactionReducer } from 'src/app/state/reducers/transaction.reducer';
import { settingsReducer } from 'src/app/state/reducers/settings.reducer';

import { TransactionsPage } from './transactions.page';

describe('TransactionsPage', () => {
  let component: TransactionsPage;
  let fixture: ComponentFixture<TransactionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsPage],
      providers: [
        provideStore({
          bankAccounts: bankAccountReducer,
          transactions: transactionReducer,
          settings: settingsReducer
        })
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(TransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
