// Snow.js

import React from 'react';
import './Snow.scss';
import { themeState } from '../stores/theme';
import { useRecoilState } from 'recoil';

const Snow = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <div className={theme === '' ? 'my-container' : 'light-container'}>
      {Array.from({ length: 150 }, (_, index) => (
        <div
          key={index}
          className="flake"
          style={{
            marginLeft: Math.floor(Math.random() * window.innerWidth),
            animationDelay: Math.floor(Math.random() * 150),
          }}
        />
      ))}
    </div>
  );
};

export default Snow;
