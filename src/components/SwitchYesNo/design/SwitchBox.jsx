import { scale, transition } from '../../utils/dimData';

export const SwitchBox = ({ props }) => {
  const { move, height, switchRadius, moveDuration, isMoving, switchColors } =
    props;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${switchRadius * 100}%`,
        height: `${switchRadius * 100}%`,
        backgroundColor: `rgb(
          ${
            switchColors[0][1] +
            move * (switchColors[1][1] - switchColors[0][1])
          }, 
          ${
            switchColors[0][2] +
            move * (switchColors[1][2] - switchColors[0][2])
          }, 
          ${
            switchColors[0][3] +
            move * (switchColors[1][3] - switchColors[0][3])
          })`,
        boxShadow: `0 0 ${scale(switchRadius * 0.2, height)} 
                  rgba(100, 100, 100, 0.6) inset,
                0 0 ${scale(switchRadius * 0.25, height)} 
                  rgba(150, 150, 150, 0.4) inset,
                0 0 ${scale(switchRadius * 0.3, height)} 
                  rgba(200, 200, 200, 0.2) inset,
                0 0 ${scale(switchRadius * 0.04, height)} rgb(70, 70, 70), 
                0 0 ${scale(switchRadius * 0.1, height)} rgb(100, 100, 100)`,
        borderRadius: '50%',
        transition: !isMoving
          ? transition(moveDuration, ['background-color', 'box-shadow'])
          : null,
      }}
    />
  );
};
