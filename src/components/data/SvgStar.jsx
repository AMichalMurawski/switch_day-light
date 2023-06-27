export const SvgStar = ({ scale = 1, color }) => {
  return (
    <svg
      viewBox={`0 0 ${10 * scale} ${10 * scale}`}
      width={10 * scale}
      height={10 * scale}
    >
      <path
        fill={color}
        d={`M${5 * scale} 0 Q${5.5 * scale} ${4.5 * scale} ${10 * scale} ${
          5 * scale
        } Q${5.5 * scale} ${5.5 * scale} ${5 * scale} ${10 * scale} Q${
          4.5 * scale
        } ${5.5 * scale} 0 ${5 * scale} Q${4.5 * scale} ${4.5 * scale} ${
          5 * scale
        } 0z`}
      />
    </svg>
  );
};
