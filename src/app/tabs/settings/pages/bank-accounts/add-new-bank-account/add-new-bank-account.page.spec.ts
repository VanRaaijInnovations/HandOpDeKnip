import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewBankAccountPage } from './add-new-bank-account.page';

describe('AddNewBankAccountPage', () => {
  let component: AddNewBankAccountPage;
  let fixture: ComponentFixture<AddNewBankAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBankAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
