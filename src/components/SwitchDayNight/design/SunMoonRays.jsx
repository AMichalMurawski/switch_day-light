import { scale, transition } from '../../utils/dimData';

export const SunMoonRays = ({ props }) => {
  const { height, move, isMoving, moveDuration } = props;

  return (
    <div
      style={{
        position: 'absolute',
        transform: `translate(${scale(-0.88, height)}, ${scale(
          -0.88,
          height
        )})`,
        width: scale(2.76, height),
        height: scale(2.76, height),
        borderRadius: '50%',
        background: `radial-gradient(
              rgba(255, 255, 255, 0.40), 
              rgba(255, 255, 255, 0.40) 32%,
              rgba(255, 255, 255, 0.25) 36%,
              rgba(255, 255, 255, 0.25) 48%,
              rgba(255, 255, 255, 0.15) 53%,
              rgba(255, 255, 255, 0.15) 65%,
              rgba(255, 255, 255, 0) 70%)`,
        opacity: 1 - move * 0.4,
        transition: !isMoving ? transition(moveDuration, 'opacity') : null,
        zIndex: 10,
      }}
    />
  );
};
