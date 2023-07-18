import { scale, transition } from '../../utils/dimData';
import { IconCheckMark } from './IconCheckMark';
import { IconCross } from './IconCross';

export const design = props => {
  const { move, height, isMoving, moveDuration } = props;
  return {
    boxStyle: null,
    boxChildren: () => (
      <>
        <IconCheckMark props={props} />
        <IconCross props={props} />
      </>
    ),
    switchChildren: null,
  };
};
