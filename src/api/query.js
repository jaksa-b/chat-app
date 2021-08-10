import { gql } from "@apollo/client";

const GET_MESSAGES = gql`
  query getMessages {
    messages {
      id
      body
      senderName
    }
  }
`;

export { GET_MESSAGES };
