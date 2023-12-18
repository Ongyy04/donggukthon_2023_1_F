import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoadingScreen from "./pages/LoadingScreen";
import Login from "./pages/Login";
import Vote from "./pages/Vote";
import Setting from "./pages/Setting";
import Header from "./components/Header";
import RoomMake from "./pages/RoomMake";
import Footer from "./components/Footer";
import "./App.scss";
const AppContent = () => {
  const location = useLocation();
  const renderHeaderAndFooter = location.pathname !== "/";

  return (
    <div className={"mainDiv"}>
      {/* "/" 경로가 아닐 때만 Header를 렌더링 */}
      {renderHeaderAndFooter && <Header />}

      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<RoomMake />} />
        <Route path="/:roomName/vote/:memberID" element={<Vote />} />
        <Route path="/setting" element={<Setting />} />
        {/* ...other routes */}
      </Routes>
      {renderHeaderAndFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
