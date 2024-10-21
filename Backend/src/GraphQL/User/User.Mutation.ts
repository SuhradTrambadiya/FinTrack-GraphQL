const userMutations = `#graphql
    type Mutation {
        signUp(input: SignUpInput!): User
        login(input: LoginInput!): User
        logout:logoutResponse

    }

    input SignUpInput{
        username: String!
        name: String!
        password: String!
        gender: String!
    }

    input LoginInput{
        username: String!
        password: String!

    }

    type logoutResponse{
        message: String!
    }
`;

export default userMutations;
