import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleTyping = () =>
    socket.emit("typing", `${localStorage.getItem("userName")} is typing`);

  const handleSendMessage = (e) => {
    e.preventDefault();
    // console.log({username: localStorage.getItem('username'), message });

    if (message.trim() && localStorage.getItem("username")) {
      socket.emit("message", {
        text: message,
        username: localStorage.getItem("username"),
        id: `${socket.id}${Math.random()}`,
        socketId: socket.id,
        sendAt: new Date(),
      });
    }

    setMessage("");
  };

  return (
    // <div className="w-full fixed bottom-0">
    <form className="w-full flex gap-0 items-center xl:sticky fixed bottom-0 right-0 left-0" onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder="Write message"
        className="xl:flex-1 w-full border px-6 py-2.5 text-black outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleTyping}
      />
      <button className="bg-[deepskyblue] px-6 py-3 text-white flex items-center">SEND <FaPaperPlane className="ml-2"/></button>
    </form>
    // </div>
  );
};

export default ChatFooter;
