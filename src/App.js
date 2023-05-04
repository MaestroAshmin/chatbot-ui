import React from "react";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";
import Nav from "./Nav";
import "./main.css";

function App() {
  //validator function to prevent sending empty messages
  const validator = (input) => {
    if (input.length > 0) return true;
    return false
}
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          validator={validator}
          placeholderText="Ask me a question..."
        />
      </header>
    </div>
  );
}

export default App;
