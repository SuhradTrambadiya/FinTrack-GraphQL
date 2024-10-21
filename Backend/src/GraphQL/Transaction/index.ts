import TransactionMutations from "./Transaction.Mutation";
import TransactionTypeDef from "./Transaction.Typedef";
import {
  transactionMutationsResolver,
  transactionQueryResolver,
} from "./Transaction.Resolver";

const TransactionModule = {
  TransactionMutations,
  TransactionTypeDef,
  transactionMutationsResolver,
  transactionQueryResolver,
};

export default TransactionModule;
