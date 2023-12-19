import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoadingScreen from "./pages/InitialScreen";
import Login from "./pages/Login";
import Vote from "./pages/Vote";
import Setting from "./pages/Setting";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import GroupMake from "./pages/GroupMake";
import GroupHome from './pages/GroupHome'
import "./App.scss";
import Waiting from "./pages/Waiting";
import QuestionList from "./pages/QuestionList";
import GroupList from "./pages/GroupList";
import { QueryClient, QueryClientProvider } from "react-query";
import QuestionResult from "./pages/QuestionResult";
import Guess from "./pages/Guess";
import GuessRightResult from "./pages/GuessRightResult";
import GuessWrongResult from "./pages/GuessWrongResult";
import InvitationCard from "./pages/InvitationCard";
const queryClient = new QueryClient();

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
        <Route path="/home" element={<Home />} />
        <Route path="/groupMake" element={<GroupMake />} />
        <Route path="/groupHome" element={<GroupHome />} />
        <Route path="/questionList" element={<QuestionList />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="/groupList" element={<GroupList />} />
        <Route path="/questionResult" element={<QuestionResult />} />
        <Route path="/guessRightResult" element={<GuessRightResult />} />
        <Route path="/guessWrongResult" element={<GuessWrongResult />} />
        
        <Route path="/guess" element={<Guess />} />
        <Route path="/:roomName/vote/:memberID" element={<Vote />} />
        <Route
          path="invitation/:memberId/:groupId/"
          element={<InvitationCard />}
        />

        <Route path="/setting" element={<Setting />} />
        {/* ...other routes */}
      </Routes>
      {renderHeaderAndFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContent />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
