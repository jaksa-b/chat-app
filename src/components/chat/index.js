import React, { useState, useEffect, useRef } from "react";

import {
  Button,
  ChatMessage,
  MessageWrapper,
  ChatInput,
  MessageEnd,
} from "./styles";

import Dialogue from "./Dialogue";
import { ChatIcon, CloseIcon } from "../icons";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_MESSAGES } from "../../api/query";
import { SEND_MESSAGE } from "../../api/mutation";

const Chat = () => {
  const [sendMessages] = useMutation(SEND_MESSAGE);
  const [getMessages, { loading, error, data, refetch }] =
    useLazyQuery(GET_MESSAGES);

  const [visible, setVisible] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getMessages();
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  const showDialogue = () => {
    setVisible(true);
  };

  const hideDialogue = () => {
    setVisible(false);
  };

  const submitMessage = (e) => {
    e.preventDefault();

    sendMessages({
      variables: {
        object: {
          senderName: "Viktor",
          body: inputMessage,
        },
      },
    })
      .then((res) => {
        console.log(res);
        refetch();
        scrollToBottom();
        setInputMessage("");
      })
      .then((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  console.log(data?.messages);

  return (
    <div>
      <Button onClick={showDialogue}>
        <ChatIcon fill="white" />
      </Button>
      {visible ? (
        <Dialogue
          header={<CloseIcon onClick={hideDialogue} />}
          body={
            <div>
              {data?.messages.map(({ id, body, senderName }) => (
                <MessageWrapper key={id}>
                  <ChatMessage primary={senderName === "Viktor"}>
                    {body}
                  </ChatMessage>
                </MessageWrapper>
              ))}
              <MessageEnd ref={messagesEndRef} />
            </div>
          }
          footer={
            <form onSubmit={submitMessage}>
              <ChatInput
                onChange={handleInputChange}
                value={inputMessage}
                placeholder="Message"
                type="text"
              />
            </form>
          }
        />
      ) : null}
    </div>
  );
};

export default Chat;
