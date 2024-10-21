// src/graphql/user/index.ts

import userTypeDef from "./User.Typedef";
import userMutations from "./User.Mutation";
import { userMutationsResolver, userQueryResolver } from "./User.Resolver";

// Combine all into a single object
const userModule = {
    userTypeDef,
    userMutations,
    userMutationsResolver,
    userQueryResolver
};

// Export the combined object as default
export default userModule;
