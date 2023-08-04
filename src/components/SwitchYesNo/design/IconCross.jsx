import icons from '../../../images/icons.svg';
import { scale, transition } from '../../utils/dimData';

export const IconCross = props => {
  const { height, switchRadius, move, moveDuration, isMoving, switchColors } =
    props.settings;

  return (
    <svg
      style={{
        position: 'absolute',
        top: '50%',
        left: scale(0.5, height),
        transform: 'translate(-50%, -50%)',
        fill: `rgb(${switchColors[1][1]}, ${switchColors[1][2]}, ${switchColors[1][3]})`,
        stroke: 'black',
        strokeWidth: scale(0.001, height),
        opacity: `${move}`,
        transition: !isMoving ? transition(moveDuration, 'opacity') : null,
      }}
      xmlns="http://www.w3.org/2000/svg"
      width={scale(switchRadius * 0.8, height)}
      height={scale(switchRadius * 0.8, height)}
      viewBox={`0 0 ${scale(switchRadius * 0.8, height, '')} ${scale(
        switchRadius * 0.8,
        height,
        ''
      )}`}
    >
      <use xlinkHref={icons + '#icon-cross'} />
    </svg>
  );
};
