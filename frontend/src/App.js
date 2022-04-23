import "./App.css";
import { Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Join />} />
        <Route path="/chat" />
      </Routes>
    </div>
  );
}

export default App;
