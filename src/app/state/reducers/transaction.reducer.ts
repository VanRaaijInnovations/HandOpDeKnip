import { createReducer, on } from "@ngrx/store";
import { AddTransactions } from "../actions/transaction.actions";
import { ITransactionsState } from "src/app/interfaces/transactions-state.interface";

export const initialState: ITransactionsState = {
  transactions: [],
}

export const transactionReducer = createReducer(
  initialState,
  on(AddTransactions, (state, payload) => ({
    ...state,
    transactions: [...state.transactions, ...payload.transactions]
  }))
);
