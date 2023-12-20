import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState', // 고유한 키
  default: '', // 기본값 나중에 light로 바꿀 수 있음
});
