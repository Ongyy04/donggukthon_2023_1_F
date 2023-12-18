import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./pages/LoadingScreen";
import Login from "./pages/Login";
import Room from "./pages/Room";
import Vote from "./pages/Vote";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:roomName/vote/:memberID" element={<Vote />} />
        <Route path="/setting" element={<Setting />} />
        {/* ...other routes */}
      </Routes>
    </Router>
  );
}

export default App;
