import { transition } from '../../utils/dimData';

export const SunMoonRays = props => {
  const { width, height, move, isMoving, moveDuration } = props.settings;
  const radius = 90 * (width / height);

  return (
    <div
      style={{
        position: 'absolute',
        transform: `translate(${-((radius / 2 - 50) / radius) * 100}%, 
              ${-((radius / 2 - 50) / radius) * 100}%)`,
        width: `${radius}%`,
        height: `${radius}%`,
        borderRadius: '50%',
        background: `radial-gradient(
              rgba(255, 255, 255, 0.40),
              rgba(255, 255, 255, 0.40) 32%,
              rgba(255, 255, 255, 0.25) 36%,
              rgba(255, 255, 255, 0.25) 48%,
              rgba(255, 255, 255, 0.10) 53%,
              rgba(255, 255, 255, 0.10) 65%,
              rgba(255, 255, 255, 0) 70%)`,

        opacity: 1 - move * 0.8,
        transition: !isMoving ? transition(moveDuration, 'opacity') : null,
        zIndex: 10,
      }}
    />
  );
};
