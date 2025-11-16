import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITransactionsState } from '../../interfaces/transactions-state.interface';

export const selectTransactionsFeature = createFeatureSelector<ITransactionsState>('transactions');

export const selectAllTransactions = createSelector(
  selectTransactionsFeature,
  (transactionsState: ITransactionsState) => transactionsState.transactions
);

export const selectTransactionById = (transactionId: string) => createSelector(
  selectAllTransactions,
  (transactions) => transactions.find(transaction => transaction.id === transactionId)
);
