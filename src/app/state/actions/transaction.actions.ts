import { createAction, props } from "@ngrx/store";
import { ITransaction } from "../../interfaces/transaction.interface";

export const AddTransactions = createAction('[Transaction] Add Transactions', props<{ transaction: ITransaction }>());