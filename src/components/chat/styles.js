import styled from "styled-components";
import { colors } from "../../constants";

const ChatBubble = styled.a`
  width: 62px;
  height: 62px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  border-radius: 50%;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid ${colors.primary};
`;

const ChatIcon = styled.div`
  width: 30px;
  height: 30px;
`;

const ChatDialogue = styled.div`
  width: 350px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  text-align: left;
  background: #fff;
  border-radius: 10px;
  box-shadow: 5px 10px 20px 10px rgba(0, 0, 0, 0.2);
`;

const ChatDialogueHeader = styled.div`
  height: 50px;
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
  background: #f2f5f6;
  text-align: right;
`;

const ChatDialogueBody = styled.div`
  height: 400px;
  padding: 10px;
  background: white;
  overflow-y: scroll;
`;

const ChatDialogueFooter = styled.div`
  height: 50px;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
  background: #f2f5f6;
`;

const ChatMessage = styled.p`
  background: ${(props) => (props.primary ? "#272e36" : "#f2f5f6")};
  color: ${(props) => (props.primary ? "#fff" : colors.text)};
  padding: 15px;
  margin: ${(props) =>
    props.primary ? "15px 0px 15px 30px" : "15px 30px 15px 0px"};
  border-radius: 10px;
  text-align: ${(props) => (props.primary ? "right" : "left")};
`;

const ChatInput = styled.input`
  border: none;
  padding: 15px;
  width: 90%;
  background: none;
`;

const MessageEnd = styled.div`
  height: 50px;
`;

export {
  ChatBubble,
  ChatIcon,
  ChatDialogue,
  ChatDialogueHeader,
  ChatDialogueBody,
  ChatDialogueFooter,
  ChatMessage,
  ChatInput,
  MessageEnd,
};
