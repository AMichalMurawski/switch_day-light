import { scale, transition } from '../../utils/dimData';
import { SvgStar } from './SvgStar';
import { starData } from './imageData';

export const Stars = ({ props }) => {
  const { move, isMoving, moveDuration, height, width } = props;

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: `${-10 + move * 10}%`,
        top: `${-100 + move * 100}%`,
        transition: !isMoving
          ? transition(moveDuration, ['top', 'left'])
          : null,
        zIndex: 15,
      }}
    >
      {starData.map((el, i) => {
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: scale(el[0], width - height),
              top: scale(el[1], height),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SvgStar scale={(el[2] * height) / 100} color="rgb(250,250,250)" />
          </div>
        );
      })}
    </div>
  );
};
