import icons from '../../../images/icons.svg';
import { scale, transition } from '../../utils/dimData';

export const IconCheckMark = props => {
  const { height, switchRadius, move, moveDuration, isMoving, switchColors } =
    props.settings;

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: scale(0.5, height),
        width: scale(switchRadius * 0.95, height),
        height: scale(switchRadius * 0.95, height),
        transform: 'translate(50%, -50%)',
        opacity: `${1 - move}`,
        transition: !isMoving ? transition(moveDuration, 'opacity') : null,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg
        style={{
          fill: `rgb(${switchColors[0][1]}, ${switchColors[0][2]}, ${switchColors[0][3]})`,
          stroke: 'black',
          strokeWidth: scale(0.001, height),
        }}
        xmlns="http://www.w3.org/2000/svg"
        width={'100%'}
        height={'100%'}
        viewBox={`0 0 30 30`}
      >
        <use xlinkHref={icons + '#icon-checkmark'} />
      </svg>
    </div>
  );
};
