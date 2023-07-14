import { gradient, scale, transition } from '../../utils/dimData';
import { cloudData1 } from './imageData';

export const Clouds1 = ({ props }) => {
  const { move, width, height, isMoving, moveDuration } = props;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${move * 10}%`,
        top: `${move * 100}%`,
        width: scale(1, width),
        height: scale(1, height),
        background: gradient(width, height, cloudData1, 'rgb(255,255,255)'),
        transition: !isMoving
          ? transition(moveDuration, ['top', 'left'])
          : null,
        zIndex: 15,
      }}
    />
  );
};
