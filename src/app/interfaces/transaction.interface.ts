import { TransactionType } from "../types/transaction.type";

export interface ITransaction {
    id: string;
    date: Date;
    amount: number;
    description: string;
    category?: string;
    fromBankAccountIban?: string;
    toBankAccountIban?: string;
    type: TransactionType;
}
