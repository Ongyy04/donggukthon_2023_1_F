import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.scss';
import { useLocation } from 'react-router-dom';

function Footer() {
  const [activeButton, setActiveButton] = useState('home');

  const navigate = useNavigate();
  const handleActiveButton = isActive => {
    if (isActive) {
      setActiveButton('home');
    }
    // 여기에 버튼 활성화 상태를 설정하는 로직
  };
  const location = useLocation();

  // 이미지 로드 상태를 업데이트하는 함수

  // 모든 이미지가 로드되었는지 확인하는 함수

  const handleMenuClick = () => {
    setActiveButton('menu');
    navigate('/groupList');
  };

  const handleHomeClick = () => {
    setActiveButton('home');
    navigate('/home');
  };

  const handleSettingsClick = () => {
    setActiveButton('settings');
    navigate('/setting');
  };
  useEffect(() => {
    // 현재 경로가 '/login'으로 시작하는지 확인
    if (location.pathname.startsWith('/login')) {
      handleActiveButton(true); // '/login'으로 시작하면 버튼을 활성화
    } else {
      handleActiveButton(false); // 그렇지 않으면 비활성화
    }
  }, [location]); // location 객체가 변경될 때마다 이 효과 실행

  return (
    <footer className="footer">
      <>
        <button onClick={handleMenuClick} className="footer-btn">
          <img
            src={activeButton === 'menu' ? '/assets/elements-red.png' : '/assets/elements-green.png'}
            alt="elements"
          />
        </button>
        <button onClick={handleHomeClick} className="footer-btn home">
          <img src={activeButton === 'home' ? '/assets/home-red.png' : '/assets/home-green.png'} alt="home" />
        </button>
        <button onClick={handleSettingsClick} className="footer-btn">
          <img
            src={activeButton === 'settings' ? '/assets/setting-red.png' : '/assets/setting-green.png'}
            alt="setting"
          />
        </button>
      </>
    </footer>
  );
}

export default Footer;
