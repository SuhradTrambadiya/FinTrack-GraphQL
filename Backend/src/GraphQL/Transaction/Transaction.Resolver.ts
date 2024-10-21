// src/graphql/Transaction/Transaction.Resolver.ts
import { transactions } from "../../Dummey/Data";
import { Transaction } from "./Transaction.Interface";



export const transactionMutationsResolver = {
    createTransaction: (_: any, { input }: { input: Omit<Transaction, '_id'> }) => {
      
    },
    updateTransaction: (_: any, { input }: { input: Transaction }) => {
       
    },
    deleteTransaction: (_: any, { transactionId }: { transactionId: string }) => {
       
    },
};

export const transactionQueryResolver = {
    transactions: () => transactions, 
};
