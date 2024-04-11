import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const ChatBar = ({ socket }) => {
  const [menu, setMenu] = useState(false);
  const [users, setUsers] = useState([]);

  const open = () => {
    setMenu(true);
  };

  const close = () => {
    setMenu(false);
  };

  
  useEffect(() => {
    socket.on("newUserResponse", (data) => {
      setUsers(data);
    });
  }, [socket, users]);

  return (
    <>
      <div
        className="fixed z-10 h-10 w-10 bg-black flex justify-center items-center top-[50%] -left-[2%] rounded-lg"
        onClick={open}
      >
        <FaCircleArrowRight className="text-white text-xl" />
      </div>

      {/* <div className="md:fixed absolute top-0 bottom-0 md:w-1/5 w-4/5 h-screen"> */}
      <div className={menu ? "menu-list open" : "menu-list"}>
        <h2 className="text-4xl text-[deepskyblue] font-bold whitespace-nowrap">
          Stranger Chat
        </h2>
        <div>
          <h4 className="text-xl font-semibold my-8">Online Users</h4>
          <div className="chat__users">
            {users.map((user, i) => (
              <p key={user.socketID} className="flex items-center m-2">
                {i + 1}.{" " + " "}
                {user.userName}{" "}
                <FaCircle className="text-[#3ef33e] ml-2 text-xs" />
              </p>
            ))}
      <div
        className="fixed z-10 h-10 w-10 bg-black flex justify-center items-center top-[50%] left-[78%] rounded-lg xl:hidden"
        onClick={close}
      >
        <FaCircleArrowLeft className="text-white text-xl" />
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBar;
