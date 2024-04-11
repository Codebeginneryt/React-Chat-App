import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ChatFooter from "./ChatFooter";

const ChatBody = ({ messages, typingStatus, socket }) => {
  const navigate = useNavigate();

  console.log(messages, "hjghj");

  const handleLeaveChat = () => {
    localStorage.removeItem("username");
    navigate("/");
    window.location.reload();
  };

  console.log(messages.username);


  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center w-full xl:py-6 xl:px-6 py-4 px-3 bg-slate-950 xl:sticky fixed top-0 ">
          <p className="xl:text-xl text-xs text-white whitespace-nowrap">
            Hangout with Strangers
          </p>

          <div className="flex items-center">
            <FaUser className="text-white xl:text-xl text-sm xl:mr-3 mr-1" />
            <h1 className="text-white mr-4 xl:text-base text-sm">
              {localStorage.getItem("username")}
            </h1>
            <button
              className="bg-[deepskyblue] xl:px-5 xl:py-3 px-2 py-1 text-xs rounded-lg text-white whitespace-nowrap"
              onClick={handleLeaveChat}
            >
              LEAVE CHAT
            </button>
          </div>
        </div>

        <div className="w-full px-6 pt-6 pb-[50px] h-screen flex flex-col overflow-y-scroll chatbox">
          {messages.map((message) =>
            message.username === localStorage.getItem("username") ? (
              <div className="w-full" key={message.id}>
                <div className="w-full flex justify-end">
                  <div className="border w-fit px-4 py-2 rounded-xl bg-[#cce0df] m-3">
                    <p className="font-bold">You</p>
                    <p className="">{message.text}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="border w-fit px-4 py-2 rounded-xl bg-[#cce0df] m-3"
                key={message.id}
              >
                <p className="font-bold">{message.username}</p>
                <div className="flex justify-start">
                  <p className="">{message.text}</p>
                </div>
              </div>
            )
          )}

          {/* <div className='message__status'>
            <p>{typingStatus}</p>
          </div> */}
          <div />
        </div>
      </div>

      <ChatFooter socket={socket} />
    </>
  );
};

export default ChatBody;
