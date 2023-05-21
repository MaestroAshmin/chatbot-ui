import React from "react";
import axios from "axios";

import StreamingMessage from "./StreamingMessage";
import { createCustomMessage } from "react-chatbot-kit";

const ActionProvider = ({ setState, children }) => {
  const sendMessage = (message) => {
    const chatBotMessage = createCustomMessage(message, "custom", {});
    console.log(message);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, chatBotMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            sendMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
