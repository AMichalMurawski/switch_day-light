import { scale, transition } from '../../utils/dimData';

export const design = props => {
  const { move, height, isMoving, moveDuration } = props;
  return {
    boxStyle: null,
    boxChildren: null,
    switchChildren: null,
  };
};
