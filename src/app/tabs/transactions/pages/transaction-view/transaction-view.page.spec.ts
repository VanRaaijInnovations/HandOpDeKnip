import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { bankAccountReducer } from 'src/app/state/reducers/bank-account.reducer';
import { transactionReducer } from 'src/app/state/reducers/transaction.reducer';
import { settingsReducer } from 'src/app/state/reducers/settings.reducer';
import { TransactionViewPage } from './transaction-view.page';

describe('TransactionViewPage', () => {
  let component: TransactionViewPage;
  let fixture: ComponentFixture<TransactionViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionViewPage],
      providers: [
        provideRouter([]),
        provideStore({
          bankAccounts: bankAccountReducer,
          transactions: transactionReducer,
          settings: settingsReducer
        })
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(TransactionViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
