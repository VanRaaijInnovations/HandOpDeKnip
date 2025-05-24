import { createReducer, on } from "@ngrx/store";
import { ITransaction } from "src/app/interfaces/transaction.interface";
import { AddTransactions } from "../actions/transaction.actions";

export const initialState: ITransaction[] = [{
    id: '1',
    date: new Date('2023-01-01'),
    amount: 500,
    description: 'Albert Heijn',
    category: 'Groceries',
    fromBankAccountIban: 'NL91ABNA0417164300',
    toBankAccountIban: 'NL91ABNA0417164310',
    type: 'expense'
}, {
    id: '2',
    date: new Date('2023-01-02'),
    amount: 3200,
    description: 'Topicus Salaris',
    category: 'Income',
    fromBankAccountIban: 'NL91ABNA0417164300',
    toBankAccountIban: 'NL91ABNA0417164320',
    type: 'income'
}];

export const transactionReducer = createReducer(
  initialState,
  on(AddTransactions, (state, { transaction }) => [...state, transaction])
);