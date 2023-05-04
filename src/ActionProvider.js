// ActionProvider starter code
import axios from "axios";

class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  sendQuestion = (id) => {
    axios.get(`http://localhost:3000/chatbot`).then((res) => {
      // console.log(res.data);
      Object.values(res.data).map((value) => {
        // console.log(value.id);
        var response = null;
        if (value.id == id) {
          response = value.answer;
          const message = this.createChatBotMessage(response);
          this.setChatbotMessage(message);
        }
      });
    });
  };
  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
