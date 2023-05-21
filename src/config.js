// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import StreamingMessage from "./StreamingMessage";
import React from "react";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello! How can I help you today?`, {
      type: "custom",
    }),
  ],
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
