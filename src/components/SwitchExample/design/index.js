import { scale, transition } from '../../utils/dimData';

export const design = settings => {
  const { move, height, isMoving, moveDuration } = settings;
  return {
    boxStyle: null,
    boxChildren: null,
    switchChildren: null,
  };
};
