import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: 'loginState',
  default: localStorage.getItem('flirtoken') !== null,
});

export const userState = atom({
  key: 'userState',
  default: {
    memberId: 1, // 임시
  },
  effects_UNSTABLE: [persistAtom],
});
