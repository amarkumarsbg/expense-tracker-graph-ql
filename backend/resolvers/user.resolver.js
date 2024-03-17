import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: (_, args, { req, res }) => {
      return users;
    },
    // Other resolver functions
  },
  Mutation: {},
};
export default userResolver;
