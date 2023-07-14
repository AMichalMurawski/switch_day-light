import { gradient, scale, transition } from '../../utils/dimData';
import { cloudData2 } from './imageData';

export const Clouds2 = ({ props }) => {
  const { move, width, height, isMoving, moveDuration } = props;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${move * 10}%`,
        top: `${move * 100}%`,
        width: scale(1, width),
        height: scale(1, height),
        background: gradient(width, height, cloudData2, 'rgb(200,200,200)'),
        transition: !isMoving
          ? transition(moveDuration, ['top', 'left'])
          : null,
        zIndex: 12,
      }}
    />
  );
};
