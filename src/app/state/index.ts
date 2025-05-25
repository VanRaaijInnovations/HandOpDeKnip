import { ActionReducerMap } from '@ngrx/store';
import { settingsReducer } from './reducers/settings.reducer';
import { ISettings } from '../interfaces/settings.interface';
import { ITransactionsState } from '../interfaces/transactions-state.interface.js';
import { transactionReducer } from './reducers/transaction.reducer.js';
import { IBankAccount } from '../interfaces/bank-account.interface.js';
import { bankAccountReducer } from './reducers/bank-account.reducer.js';

export interface AppState {
  settings: ISettings;
  transactions: ITransactionsState;
  bankAccounts: IBankAccount[];
}

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
  transactions: transactionReducer,
  bankAccounts: bankAccountReducer
};
