// MessageParser starter code
import React from "react";
import axios from "axios";
// import React, { useState } from "react";
const baseURL = "http://localhost:3000/chatbot";

// const [question, setQuestion] = useState(null);

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    actions.sendMessage(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
