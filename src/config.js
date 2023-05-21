// Config starter code
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import StreamingMessage from "./StreamingMessage";
import React from "react";

const config = {
  initialMessages: [createCustomMessage(`Hello! How can I help you today?`, "custom", { noPrompt: true})],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ff4c4c",
    },
    chatButton: {
      backgroundColor: "#ff4c4c",
    },
  },
  customMessages: {
    custom: (props) => <StreamingMessage {...props} />,
  },
};

export default config;
