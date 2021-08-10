import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
  headers: {
    "x-hasura-admin-secret": process.env.REACT_APP_AUTH_KEY,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default client;
