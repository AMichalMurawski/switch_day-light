import icons from '../../../images/icons.svg';

export const IconCross2 = () => {
  return (
    <svg
      style={{
        fill: `red`,
        stroke: 'black',
        strokeWidth: '1px',
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
