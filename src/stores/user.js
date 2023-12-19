import { atom } from 'recoil';

export const loginState = atom({
  key: 'loginState',
  default: localStorage.getItem('token') !== null,
});

export const userState = atom({
  key: 'userState',
  default: {
    memberId: 1, // 임시
  },
});
