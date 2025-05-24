import { createReducer, on } from "@ngrx/store";
import { AddBankAccount, RemoveBankAccount, UpdateBankAccount  } from "../actions/bank-account.actions";
import { IBankAccount } from "../../interfaces/bank-account.interface";

export const initialState: IBankAccount[] = [{
      id: '1',
      name: 'Bank Account 1',
      iban: 'NL91ABNA0417164300',
      bic: 'ABNANL2A'
    },
    {
      id: '2',
      name: 'Bank Account 2',
      iban: 'NL91ABNA0417164301',
      bic: 'ABNANL2B'
    }];

export const bankAccountReducer = createReducer(
  initialState,
  on(AddBankAccount, (state, { bankAccount }) => [...state, bankAccount]),
  on(RemoveBankAccount, (state, { id }) => state.filter(account => account.id !== id)),
  on(UpdateBankAccount, (state, { bankAccount }) => {
    return state.map(account =>
      account.id === bankAccount.id ? { ...account, ...bankAccount } : account
    );
  })
);