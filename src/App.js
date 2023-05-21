import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";
import Nav from "./Nav";
import "./main.css";
import { BackendUrl, SetBackendUrl } from "./Contexts";
import URLForm from "./URLForm";

function App() {
  const [backendUrl, setBackendUrl] = useState("http://localhost:8000/message");
  //validator function to prevent sending empty messages
  const validator = (input) => {
    if (input.length > 0) return true;
    return false;
  };
  return (
    <SetBackendUrl.Provider value={setBackendUrl}>
      <BackendUrl.Provider value={backendUrl}>
        <div className="App">
          <header className="App-header">
            <Nav />
          </header>
          <main>
            <URLForm />

            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              validator={validator}
              placeholderText="Ask me a question..."
            />
          </main>
        </div>
      </BackendUrl.Provider>
    </SetBackendUrl.Provider>
  );
}

export default App;
