import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankAccountsPage } from './bank-accounts.page';

describe('BankAccountsPage', () => {
  let component: BankAccountsPage;
  let fixture: ComponentFixture<BankAccountsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
