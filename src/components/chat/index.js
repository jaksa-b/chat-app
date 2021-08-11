import React, { useState, useEffect, useRef } from "react";

import {
  Button,
  ChatMessage,
  MessageWrapper,
  ChatInput,
  MessageEnd,
} from "./styles";

import { Avatar, Row, Col } from "../index";

import Dialogue from "./Dialogue";
import { ChatIcon, CloseIcon } from "../icons";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_MESSAGES } from "../../api/query";
import { SEND_MESSAGE } from "../../api/mutation";

const Chat = () => {
  const [getMessages, { loading, data, refetch }] = useLazyQuery(GET_MESSAGES);
  const [sendMessages] = useMutation(SEND_MESSAGE);

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

    if (inputMessage === "") return;

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
      <Button dataTestId="button" onClick={showDialogue}>
        <ChatIcon fill="white" />
      </Button>
      {visible ? (
        <Dialogue
          header={
            <Row>
              <Col>
                <Avatar active={true} src="/viktor.jpeg" alt="Viktor" />
              </Col>
              <Col>
                <h2>Viktor</h2>
              </Col>
              <Col grow={1}>
                <CloseIcon onClick={hideDialogue} />
              </Col>
            </Row>
          }
          body={
            <div>
              {data?.messages.map(({ id, body, senderName }) => (
                <MessageWrapper key={id}>
                  <ChatMessage primary={senderName === "Viktor"}>
                    {body}
                  </ChatMessage>
                </MessageWrapper>
              ))}
              {loading ? <p>loading...</p> : null}
              <MessageEnd ref={messagesEndRef} />
            </div>
          }
          footer={
            <form onSubmit={submitMessage}>
              <ChatInput
                dataTestId="input"
                onChange={handleInputChange}
                disabled={loading}
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
