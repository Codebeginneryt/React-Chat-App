import './App.css';
import './index.css'
import socketIO from 'socket.io-client';
import Home from './components/Home';
import Chat from './components/Chat';
import { Route, Routes } from 'react-router-dom';


const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/chat" element={<Chat socket={socket} />} />
      </Routes>
    </div>
  );
}

export default App;
