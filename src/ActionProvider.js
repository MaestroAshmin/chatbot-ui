import React from "react";
import axios from "axios";

import StreamingMessage from "./StreamingMessage";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const sendMessage = (message) => {
    const chatBotMessage = createChatBotMessage(message, {
      type: "custom",
    });
    // console.log(message);

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
