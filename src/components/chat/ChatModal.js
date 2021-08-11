import React from "react";
import {
  ChatModalWrapper,
  ChatModalHeader,
  ChatModalBody,
  ChatModalFooter,
} from "./styles";

const ChatModal = ({ visible, header, body, footer }) => {
  return (
    <ChatModalWrapper visible={visible}>
      <ChatModalHeader>{header}</ChatModalHeader>
      <ChatModalBody>{body}</ChatModalBody>
      <ChatModalFooter>{footer}</ChatModalFooter>
    </ChatModalWrapper>
  );
};

export default ChatModal;
