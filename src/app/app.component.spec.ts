import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { bankAccountReducer } from './state/reducers/bank-account.reducer';
import { transactionReducer } from './state/reducers/transaction.reducer';
import { settingsReducer } from './state/reducers/settings.reducer';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        provideStore({
          bankAccounts: bankAccountReducer,
          transactions: transactionReducer,
          settings: settingsReducer
        })
      ]
    }).compileComponents();
    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
