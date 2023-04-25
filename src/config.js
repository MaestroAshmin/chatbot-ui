// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hello! How can I help you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ff4c4c",
    },
    chatButton: {
      backgroundColor: "#ff4c4c",
    },
  },
};

export default config;
