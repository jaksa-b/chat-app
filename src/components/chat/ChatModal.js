import React from "react";
import {
  ChatModalWrapper,
  ChatModalHeader,
  ChatModalBody,
  ChatModalFooter,
} from "./styles";

const ChatModal = ({ header, body, footer }) => {
  return (
    <ChatModalWrapper>
      <ChatModalHeader>{header}</ChatModalHeader>
      <ChatModalBody>{body}</ChatModalBody>
      <ChatModalFooter>{footer}</ChatModalFooter>
    </ChatModalWrapper>
  );
};

export default ChatModal;
