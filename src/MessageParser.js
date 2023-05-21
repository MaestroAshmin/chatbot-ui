// MessageParser starter code
import axios from "axios";
// import React, { useState } from "react";
const baseURL = "http://localhost:3000/chatbot";

// const [question, setQuestion] = useState(null);

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const questionData = message.toLowerCase();
    const question = questionData;
    const answer = "This is a dummy response";
    // console.log(this.state);
    axios
      .post(`http://localhost:3000/chatbot`, { question, answer })
      .then((res) => {
        console.log(res);
        // console.log(res.data);
        this.actionProvider.sendQuestion(res.data.id);
      });
  }
}

export default MessageParser;
