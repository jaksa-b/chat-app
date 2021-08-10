import React from "react";
import {
  ChatDialogue,
  ChatDialogueHeader,
  ChatDialogueBody,
  ChatDialogueFooter,
} from "./styles";

const Dialogue = ({ header, body, footer }) => {
  return (
    <ChatDialogue>
      <ChatDialogueHeader>{header}</ChatDialogueHeader>
      <ChatDialogueBody>{body}</ChatDialogueBody>
      <ChatDialogueFooter>{footer}</ChatDialogueFooter>
    </ChatDialogue>
  );
};

export default Dialogue;
