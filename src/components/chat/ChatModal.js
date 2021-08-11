import React from "react";
import {
  ChatModalWrapper,
  ChatModalHeader,
  ChatModalBody,
  ChatModalFooter,
} from "./styles";

const ChatModal = ({ visible, position, header, body, footer }) => {
  return (
    <ChatModalWrapper visible={visible} position={position}>
      <ChatModalHeader>{header}</ChatModalHeader>
      <ChatModalBody>{body}</ChatModalBody>
      <ChatModalFooter>{footer}</ChatModalFooter>
    </ChatModalWrapper>
  );
};

export default ChatModal;
