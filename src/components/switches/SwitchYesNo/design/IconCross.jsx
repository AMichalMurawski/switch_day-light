import icons from '../../../../images/icons.svg';
import { scale } from '../../utils/dimData';

export const IconCross = props => {
  const { height, switchColors } = props.settings;

  return (
    <svg
      style={{
        fill: `rgb(${switchColors[1][1]}, ${switchColors[1][2]}, ${switchColors[1][3]})`,
        stroke: 'black',
        strokeWidth: scale(0.001, height),
      }}
      xmlns="http://www.w3.org/2000/svg"
      width={'85%'}
      height={'85%'}
      viewBox={'0 0 30 30'}
    >
      <use xlinkHref={icons + '#icon-cross'} />
    </svg>
  );
};
