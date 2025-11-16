import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { bankAccountReducer } from 'src/app/state/reducers/bank-account.reducer';
import { transactionReducer } from 'src/app/state/reducers/transaction.reducer';
import { settingsReducer } from 'src/app/state/reducers/settings.reducer';

import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsPage],
      providers: [
        provideStore({
          bankAccounts: bankAccountReducer,
          transactions: transactionReducer,
          settings: settingsReducer
        })
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
