import { scale, transition } from '../../utils/dimData';

export const BoxYes = props => {
  const { height, switchRadius, move, moveDuration, isMoving } = props.settings;

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
    ></div>
  );
};
