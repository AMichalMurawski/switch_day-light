import { scale, transition } from '../../utils/dimData';

export const Sun = ({ props }) => {
  const { height, move, moveDuration, isMoving } = props;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(${-50 + move * 100}%, -50%)`,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: `rgb(
                ${229 - move * 229}, 
                ${195 - move * 195}, 
                ${41 - move * 49})`,
        boxShadow: `
                ${scale(-1 / 50, height)} ${scale(-1 / 35, height)} 
                  ${scale(1 / 35, height)} rgb(150, 150, 150) inset,
                ${scale(1 / 50, height)} ${scale(1 / 35, height)} 
                  ${scale(1 / 35, height)} rgb(250, 250, 250) inset`,
        transition: !isMoving
          ? transition(moveDuration, ['transform', 'background-color'])
          : null,
      }}
    />
  );
};
