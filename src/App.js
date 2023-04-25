import React from "react";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";
import Nav from "./Nav";
import "./main.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="Ask me a question..."
        />
      </header>
    </div>
  );
}

export default App;
