import { createAction, props } from "@ngrx/store";
import { IBankAccount } from "../../interfaces/bank-account.interface";

export const AddBankAccount = createAction('[Bank Account] Add Bank Account', props<{ bankAccount: IBankAccount }>());
export const RemoveBankAccount = createAction('[Bank Account] Remove Bank Account', props<{ id: string }>());
export const UpdateBankAccount = createAction('[Bank Account] Update Bank Account', props<{ bankAccount: IBankAccount }>());