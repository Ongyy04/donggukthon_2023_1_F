import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { loginState } from '../stores/user';

const LoginRedirect = () => {
  const setIsLoggedin = useSetRecoilState(loginState);
  const navigator = useNavigate();

  useEffect(() => {
    // URL에서 쿼리 파라미터 추출
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');

    if (token) {
      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('flirtoken', token);
      setIsLoggedin(true);
      navigator('/home'); // 홈으로 리다이렉트
      // URL에서 토큰 파라미터를 제거
      // window.history.replaceState(null, '', window.location.pathname); // 쿼리 파라미터 제거
      // console.log(token);
    } else {
      // 토큰이 없으면 로그인 실패 처리
      console.error('로그인 실패');
    }
  }, []);

  return <></>;
};

export default LoginRedirect;
