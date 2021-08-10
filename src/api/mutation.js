import { gql } from "@apollo/client";

const SEND_MESSAGE = gql`
  mutation sendMessage($object: messages_insert_input!) {
    insert_messages_one(object: $object) {
      id
      body
      senderName
    }
  }
`;

export { SEND_MESSAGE };
