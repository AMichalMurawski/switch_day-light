import { scale, transition } from '../../utils/dimData';

export const SwitchBox = ({ props }) => {
  const { move, height, moveDuration, isMoving, switchColors } = props;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '75%',
        height: '75%',
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
        boxShadow: `0 0 ${scale(0.12 * 0.75, height)} 
                  rgb(0, 0, 0, 0.5) inset,
                0 0 ${scale(0.04 * 0.75, height)} black, 
                0 0 ${scale(0.1 * 0.75, height)} gray`,
        borderRadius: '50%',
        transition: !isMoving
          ? transition(moveDuration, ['background-color', 'box-shadow'])
          : null,
      }}
    />
  );
};
