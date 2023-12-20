import { atom } from 'recoil';

export const selectedMemberState = atom({
  key: 'selectedMemberState',
  default: '',
});

export const currentQuestionState = atom({
  key: 'currentQuestionState',
  default: '',
});
