import icons from '../../../images/icons.svg';
import { scale } from '../../utils/dimData';

export const IconCheckMark = props => {
  const { height, switchColors } = props.settings;

  return (
    <svg
      style={{
        fill: `rgb(${switchColors[0][1]}, ${switchColors[0][2]}, ${switchColors[0][3]})`,
        stroke: 'black',
        strokeWidth: scale(0.001, height),
      }}
      xmlns="http://www.w3.org/2000/svg"
      width={'100%'}
      height={'100%'}
      viewBox={'0 0 30 30'}
    >
      <use xlinkHref={icons + '#icon-checkmark'} />
    </svg>
  );
};
