import { scale, transition } from '../../utils/dimData';
import { IconCheckMark } from './IconCheckMark';
import { IconCross } from './IconCross';
import { SwitchBox } from './SwitchBox';

export const design = props => {
  const { move, height, isMoving, moveDuration, colors } = props;

  console.log('props', colors);
  return {
    boxStyle: null,
    boxChildren: () => (
      <>
        <IconCheckMark props={props} />
        <IconCross props={props} />
      </>
    ),
    switchChildren: () => (
      <>
        <SwitchBox props={props} />
      </>
    ),
  };
};
