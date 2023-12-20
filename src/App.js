import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './pages/InitialScreen';
import Login from './pages/Login';
import Vote from './pages/Vote';
import Setting from './pages/Setting';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import GroupMake from './pages/GroupMake';
import GroupHome from './pages/GroupHome';
import './App.scss';
import Waiting from './pages/Waiting';
import QuestionList from './pages/QuestionList';
import GroupList from './pages/GroupList';
import { QueryClient, QueryClientProvider } from 'react-query';
import QuestionResult from './pages/QuestionResult';
import Guess from './pages/Guess';
import GuessRightResult from './pages/GuessRightResult';
import GuessWrongResult from './pages/GuessWrongResult';
import InvitationCard from './pages/InvitationCard';

import ShareGroup from './pages/ShareGroup';
import { RecoilRoot } from 'recoil';
import LoginRedirect from './pages/LoginRedirect';
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const renderHeaderAndFooter = location.pathname !== '/';

  return (
    <RecoilRoot>
      <div className={'mainDiv'}>
        {/* "/" 경로가 아닐 때만 Header를 렌더링 */}
        {renderHeaderAndFooter && <Header />}
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="invitation/:inviterId/:groupId/" element={<InvitationCard />} />
          <Route path="/googleLogin" element={<LoginRedirect />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/groupMake" element={<GroupMake />} />
            <Route path="/groupHome/:groupId" element={<GroupHome />} />
            <Route path="/questionList/:groupId" element={<QuestionList />} />
            <Route path="/vote/:groupId" element={<Vote />} />
            <Route path="/waiting/:groupId" element={<Waiting />} />
            <Route path="/groupList" element={<GroupList />} />
            <Route path="/questionResult/:groupId" element={<QuestionResult />} />
            <Route path="/guessRightResult/:groupId" element={<GuessRightResult />} />
            <Route path="/guessWrongResult/:groupId" element={<GuessWrongResult />} />
            <Route path="/shareGroup/:memberId" element={<ShareGroup />} />
            <Route path="/guess/:groupId" element={<Guess />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
          {/* ...other routes */}
        </Routes>
        {renderHeaderAndFooter && <Footer />}
      </div>
    </RecoilRoot>
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
