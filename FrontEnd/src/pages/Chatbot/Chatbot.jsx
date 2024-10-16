
import Chatbot from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import Config from "./Config";
import ActionProvider from "./ActionProvider";
import './chatbot.css'; 

const Chatbott = () => {
  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-messages">
        <Chatbot 
          config={Config} 
          messageParser={MessageParser} 
          actionProvider={ActionProvider} 
        />
      </div>
    </div>
  );
};

export default Chatbott;
