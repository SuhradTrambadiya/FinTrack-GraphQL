// src/graphql/user/User.Resolver.ts
import { users as dummyUsers } from "../../Dummey/Data"; // Import the dummy user data
import { User } from "./User.Interface"; // Import the User interface

// User query resolvers
export const userQueryResolver = {
    users: () => {
        return dummyUsers; // Return the dummy user data
    },
    user: (_: any, { userId }: { userId: string }) => {
        return dummyUsers.find((user: User) => user._id === userId) || null; // Return user by ID
    },
};

// User mutation resolvers
export const userMutationsResolver = {
  
};
