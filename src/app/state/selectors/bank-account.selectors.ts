import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBankAccount } from '../../interfaces/bank-account.interface';

export const selectBankAccountsFeature = createFeatureSelector<IBankAccount[]>('bankAccounts');

export const selectAllBankAccounts = createSelector(
  selectBankAccountsFeature,
  (bankAccounts: IBankAccount[]) => bankAccounts
);
