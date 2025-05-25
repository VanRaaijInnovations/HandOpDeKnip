import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionViewPage } from './transaction-view.page';

describe('TransactionViewPage', () => {
  let component: TransactionViewPage;
  let fixture: ComponentFixture<TransactionViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
