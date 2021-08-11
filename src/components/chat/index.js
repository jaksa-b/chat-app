import React, { useState, useEffect, useRef } from "react";
import { upperFirst } from "lodash";

import {
  Button,
  ChatMessage,
  MessageWrapper,
  ChatInput,
  MessageEnd,
} from "./styles";

import { Avatar, Row, Col } from "../index";

import ChatModal from "./ChatModal";
import { ChatIcon, CloseIcon } from "../icons";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_MESSAGES } from "../../api/query";
import { SEND_MESSAGE } from "../../api/mutation";

const Chat = ({ position, buttonColor, user }) => {
  const [getMessages, { loading, data, refetch }] = useLazyQuery(GET_MESSAGES);
  const [sendMessages] = useMutation(SEND_MESSAGE);

  const [visible, setVisible] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
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
  });

  const showChatModal = () => {
    setVisible(true);
  };

  const hideChatModal = () => {
    setVisible(false);
  };

  const submitMessage = (e) => {
    e.preventDefault();

    if (inputMessage === "") return;
    setSendingMessage(true);

    sendMessages({
      variables: {
        object: {
          senderName: user.name,
          body: inputMessage,
        },
      },
    })
      .then((res) => {
        console.log(res);
        refetch();
        setInputMessage("");
        setSendingMessage(false);
        scrollToBottom();
      })
      .then((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    setInputMessage(upperFirst(e.target.value));
  };

  console.log(data?.messages);

  return (
    <div>
      <Button
        dataTestId="button"
        color={buttonColor}
        onClick={showChatModal}
        position={position}
      >
        <ChatIcon fill="white" />
      </Button>
      <ChatModal
        visible={visible}
        position={position}
        header={
          <Row>
            <Col>
              <Avatar active={true} src={user.src} alt={user.name} />
            </Col>
            <Col>
              <h2>{user.name}</h2>
            </Col>
            <Col grow={1}>
              <CloseIcon onClick={hideChatModal} />
            </Col>
          </Row>
        }
        body={
          <div>
            {data?.messages.map(({ id, body, senderName }) => (
              <MessageWrapper key={id}>
                <ChatMessage primary={senderName === user.name}>
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
              disabled={sendingMessage}
              value={sendingMessage ? "Sending..." : inputMessage}
              placeholder="Message"
              type="text"
            />
          </form>
        }
      />
    </div>
  );
};

export default Chat;
