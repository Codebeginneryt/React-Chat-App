import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chat");
  };

  return (
    <form
      className="flex justify-center items-center text-center w-full h-[100vh]"
      onSubmit={handleSubmit}
    >
      <div className="w-full px-5">
        <div className="w-full flex justify-center">
        <img
          src="https://static-00.iconduck.com/assets.00/chat-icon-2048x2048-i7er18st.png"
          alt=""
          className="h-20 w-20"
        />
        </div>
        <h2 className="xl:text-5xl text-2xl font-semibold my-5">Stranger Chat</h2>
        <input
          type="text"
          minLength={5}
          className="border border-[black] xl:h-[50px] h-[40px] xl:w-[400px] w-[250px] rounded-full px-5 py-4 my-6 "
          name="username"
          id="username"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <button className="xl:h-[50px] h-[35px] xl:w-[200px] w-[130px] bg-[deepskyblue] text-white xl:text-xl text-md rounded-full">
          SIGN IN
        </button>
      </div>
    </form>
  );
};

export default Home;
