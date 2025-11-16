import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { bankAccountReducer } from 'src/app/state/reducers/bank-account.reducer';
import { transactionReducer } from 'src/app/state/reducers/transaction.reducer';
import { settingsReducer } from 'src/app/state/reducers/settings.reducer';
import { AuthenticatePage } from './authenticate.page';

describe('AuthenticatePage', () => {
  let component: AuthenticatePage;
  let fixture: ComponentFixture<AuthenticatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticatePage],
      providers: [
        provideStore({
          bankAccounts: bankAccountReducer,
          transactions: transactionReducer,
          settings: settingsReducer
        })
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AuthenticatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
