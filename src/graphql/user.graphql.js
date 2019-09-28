import { gql } from 'apollo-server-express';
import service from '@/services/user.service';

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(email: String, name: String, phoneNumber: String, address: String, dob: String): User
    updateUser(
      id: ID!
      email: String
      name: String
      phoneNumber: String
      address: String
      dob: String
    ): User
    deleteUser(id: ID!): User
  }

  type User {
    id: String!
    email: String
    name: String
    phoneNumber: String
    address: String
    dob: String
    createdAt: String!
    updatedAt: String!
  }
`;

const resolvers = {
  Query: {
    users() {
      return service.getUsers();
    },
    user(_, args) {
      return service.getUser(args.id);
    },
  },
  Mutation: {
    createUser(_, args) {
      return service.createUser(args);
    },
    updateUser(_, args) {
      const { id, ...data } = args;
      return service.updateUser(id, data);
    },
    deleteUser(_, args) {
      return service.deleteUser(args.id);
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
