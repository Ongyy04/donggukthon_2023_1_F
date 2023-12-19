import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    memberId: 1, // 임시
  },
});
