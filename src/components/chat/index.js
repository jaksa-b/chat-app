import React, { useState, useEffect, useRef } from "react";

import {
  Button,
  ChatDialogue,
  ChatDialogueHeader,
  ChatDialogueBody,
  ChatDialogueFooter,
  ChatMessage,
  MessageWrapper,
  ChatInput,
  MessageEnd,
} from "./styles";

import { ChatIcon, CloseIcon } from "../icons";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_MESSAGES } from "../../api/query";
import { SEND_MESSAGE } from "../../api/mutation";

const Chat = () => {
  const [getMessages, { loading, error, data }] = useLazyQuery(GET_MESSAGES);
  const [sendMessages] = useMutation(SEND_MESSAGE);

  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  console.log(loading, error, data);

  const scrollToBottomInit = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getMessages();
    scrollToBottomInit();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  const showDialoge = () => {
    setVisible(true);
  };

  const hideDialoge = () => {
    setVisible(false);
  };

  const submitMessage = (e) => {
    // post message
    e.preventDefault();

    console.log(message);
    setMessages([...messages, message]);
    setMessage("");
    getMessages();
    scrollToBottom();
    sendMessages({
      variables: {
        object: {
          senderName: "Viktor",
          body: message,
        },
      },
    })
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);

    setMessage(e.target.value);
  };

  console.log(data?.messages);

  return (
    <div>
      <Button onClick={showDialoge}>
        <ChatIcon fill="white" />
      </Button>
      {visible ? (
        <ChatDialogue>
          <ChatDialogueHeader>
            <CloseIcon onClick={hideDialoge} />
          </ChatDialogueHeader>
          <ChatDialogueBody>
            {data?.messages.map(({ id, body, senderName }) => (
              <MessageWrapper key={id}>
                <ChatMessage primary={senderName === "Viktor"}>
                  {body}
                </ChatMessage>
              </MessageWrapper>
            ))}
            {messages.map((mess, index) => (
              <MessageWrapper key={index}>
                <ChatMessage primary key={index}>
                  {mess}
                </ChatMessage>
              </MessageWrapper>
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
