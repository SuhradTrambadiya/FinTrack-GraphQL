const TransactionTypeDef = `#graphql

    type Transaction {
        _id: ID!
        userId: ID!
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String
        date: String!
        user: User
    }


    type CategoryStatistics {
        category: String!
        totalAmount: Float!
    }


    type Query {
        transactions: [Transaction!]
        # transaction(transactionId:ID!): Transaction
        # categoryStatistics: [CategoryStatistics!]
    }


`;

export default TransactionTypeDef;
