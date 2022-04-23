import "./App.css";
import socketIo from "socket.io-client";

const ENDPOINT = "http://localhost:4500/";
const socket = socketIo(ENDPOINT, { transports: ["websocket"] });

socket.on("connect", () => {});

function App() {
  return (
    <div className="App">
      <h1>Working</h1>
    </div>
  );
}

export default App;
