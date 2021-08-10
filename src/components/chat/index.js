import React, { useState, useEffect, useRef } from "react";
import {
  ChatBubble,
  ChatDialogue,
  ChatDialogueHeader,
  ChatDialogueBody,
  ChatDialogueFooter,
  ChatMessage,
  ChatInput,
  MessageEnd,
} from "./styles";

import { ChatIcon, CloseIcon } from "../icons";

const Chat = () => {
  const [dialogeVisible, setDialogeVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, []);

  const showDialoge = () => {
    setDialogeVisible(true);
  };

  const hideDialoge = () => {
    setDialogeVisible(false);
  };

  const submitMessage = (e) => {
    // post message
    e.preventDefault();

    console.log(message);
    setMessages([...messages, message]);
    setMessage("");
    scrollToBottom();
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);

    setMessage(e.target.value);
  };

  return (
    <div>
      <ChatBubble onClick={showDialoge}>
        <ChatIcon fill="white" />
      </ChatBubble>
      {dialogeVisible ? (
        <ChatDialogue>
          <ChatDialogueHeader>
            <CloseIcon onClick={hideDialoge} />
          </ChatDialogueHeader>
          <ChatDialogueBody>
            <ChatMessage>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </ChatMessage>
            <ChatMessage primary>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </ChatMessage>
            <ChatMessage>Ok</ChatMessage>
            <ChatMessage primary>Ok</ChatMessage>
            {messages.map((mess, index) => (
              <ChatMessage primary key={index}>
                {mess}
              </ChatMessage>
            ))}

            <MessageEnd ref={messagesEndRef} />
          </ChatDialogueBody>
          <ChatDialogueFooter>
            <form onSubmit={submitMessage}>
              <ChatInput
                onChange={handleInputChange}
                value={message}
                placeholder="Type your message"
                type="text"
              />
            </form>
          </ChatDialogueFooter>
        </ChatDialogue>
      ) : null}
    </div>
  );
};

export default Chat;
