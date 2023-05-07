import "../styles/global.css";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getJWT, isLoggedIn } from "../services/auth/auth";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  if (isLoggedIn()) {
    const token = getJWT();
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  }
  return {};
});
const defaultOptions = {
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "none",
  },
  mutate: {
    fetchPolicy: "network-only",
    errorPolicy: "none",
  },
};
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    toast.info(graphQLErrors);
  }
  if (networkError) {
    toast.info(networkError);
  }
});
const link = ApolloLink.from([
  errorLink,
  authLink.concat(
    createUploadLink({
      uri: "https://tum-ai-makeathon2023-backend.herokuapp.com/graphql",
    })
  ),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  defaultOptions,
});
export const wrapRootElement = ({ element, props }) => {
  return (
    <ApolloProvider client={client} {...props}>
      {" "}
      {element}
      <ToastContainer />{" "}
    </ApolloProvider>
  );
};
export default {};
