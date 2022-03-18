import { atom } from 'recoil';

export const useDiceTop = atom({
  key: 'useDiceTop',
  default: [0],
});

export const useDiceRoll = atom({
  key: 'useDiceRoll',
  default: false,
});
