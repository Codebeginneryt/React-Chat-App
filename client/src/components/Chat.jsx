import React, { useEffect, useState } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";

const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => {
      setTypingStatus(data);
    });
  }, [socket]);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <ChatBar socket={socket} />
      <div className="flex-1">
        <ChatBody messages={messages} typingStatus={typingStatus}socket={socket} />
      </div>
    </div>
  );
};

export default Chat;
