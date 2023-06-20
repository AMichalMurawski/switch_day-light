import { useState } from 'react';

const cloudData1 = [
  [50, 155, 10],
  [110, 155, 14],
  [175, 150, 20],
  [225, 155, 15],
  [275, 155, 17],
  [335, 120, 12],
  [390, 90, 18],
];
const cloudData2 = [
  [45, 145, 10],
  [105, 140, 14],
  [170, 130, 21],
  [210, 125, 15],
  [260, 105, 18],
  [305, 80, 12],
  [380, 65, 18],
  [320, 150, 18],
];
const moonData1 = [
  [58, 30, 12],
  [40, 70, 18],
  [88, 83, 12],
];
const moonData2 = [
  [58.7, 29.3, 12.5],
  [40.7, 69.3, 18.5],
  [88.7, 82.3, 12.5],
];
const starData = [
  [38, 38, 0.5],
  [70, 20, 1.5],
  [95, 60, 1],
  [40, 120, 0.5],
  [50, 110, 0.5],
  [80, 125, 0.5],
  [160, 35, 0.5],
  [150, 60, 0.5],
  [170, 110, 1.5],
  [200, 90, 0.5],
  [200, 40, 2],
];

const SvgStar = ({ scale = 1, color }) => {
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

const modeType = {
  light: 'light',
  dark: 'dark',
};

const transitionDurationTiming = '500ms ease-out';

export const SwitchDayNight2 = ({
  scale = 1,
  mode = modeType.light,
  onClick,
}) => {
  const [switched, setSwitched] = useState({ mode: mode, move: 0 });

  const pxScale = px => {
    return `${(scale * px) / 4}px`;
  };

  const gradient = (data, color) => {
    const cloudMap = data.map(
      el =>
        `radial-gradient(circle at ${pxScale(el[0])} ${pxScale(
          el[1]
        )}, ${color} ${el[2]}%, transparent ${el[2]}%)`
    );
    const cloudGradient = cloudMap.join(', ');
    return cloudGradient;
  };

  const handleClick = e => {
    if (switched.mode === 'light') {
      mode = modeType.dark;
    } else {
      mode = modeType.light;
    }
    setSwitched({ mode: mode });
    onClick(mode);
  };

  return (
    <div
      style={{
        position: 'relative',
        minWidth: pxScale(369),
        width: pxScale(369),
        minHeight: pxScale(145),
        height: pxScale(145),
        borderRadius: pxScale(72.5),
        backgroundColor: switched.mode === 'light' ? '#3367c1' : '#002',
        boxShadow: `
            0 ${pxScale(10)} ${pxScale(15)} rgb(0, 0, 0) inset,
            0 ${pxScale(5)} ${pxScale(3)} rgb(250, 250, 250),
            0 ${pxScale(4)} ${pxScale(3)} rgb(0, 0, 0)`,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        transition: `background-color ${transitionDurationTiming}`,
      }}
      onClick={handleClick}
    >
      {/* --- sun / moon --- */}
      <div
        style={{
          position: 'absolute',
          left: pxScale(-125),
          transform:
            switched.mode === 'light'
              ? `translateX(0)`
              : `translateX(${pxScale(215)})`,
          width: pxScale(400),
          height: pxScale(400),
          borderRadius: '50%',
          transition: `transform ${transitionDurationTiming}`,
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: `radial-gradient(
              rgba(255, 255, 255, 0.35), 
              rgba(255, 255, 255, 0.35) 30%,
              rgba(255, 255, 255, 0.20) 35%,
              rgba(255, 255, 255, 0.20) 48%,
              rgba(255, 255, 255, 0.12) 53%,
              rgba(255, 255, 255, 0.12) 65%,
              rgba(255, 255, 255, 0) 70%)`,
            opacity: switched.mode === modeType.light ? 1 : 0.4,
            transition: `opacity ${transitionDurationTiming}`,
            zIndex: 10,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: pxScale(120),
            height: pxScale(120),
            borderRadius: pxScale(60),
            boxShadow: `${pxScale(5)} ${pxScale(5)} 
                ${pxScale(9)} rgb(30, 30, 30)`,
            overflow: 'hidden',
          }}
        >
          {/* moon */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: pxScale(120),
              height: pxScale(120),
              borderRadius: pxScale(60),
              background: `${gradient(
                moonData1,
                'rgb(155, 155, 155)'
              )}, ${gradient(
                moonData2,
                'rgb(130, 130, 130)'
              )}, radial-gradient(circle at ${pxScale(60)} ${pxScale(
                60
              )}, rgb(200,200,200) 100%, transparent 100%)`,
              boxShadow: `
                  ${pxScale(-3)} ${pxScale(-4)} 
                    ${pxScale(4)} rgb(150, 150, 150) inset,
                  ${pxScale(3)} ${pxScale(4)} 
                    ${pxScale(4)} rgb(250, 250, 250) inset`,
            }}
          />
          {/* sun */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: pxScale(120),
              height: pxScale(120),
              borderRadius: pxScale(60),
              backgroundColor: 'rgb(229, 195, 41)',
              boxShadow: `
                  ${pxScale(-3)} ${pxScale(-4)} 
                    ${pxScale(4)} rgb(150, 150, 150) inset,
                  ${pxScale(3)} ${pxScale(4)} 
                    ${pxScale(4)} rgb(250, 250, 250) inset`,
              opacity: switched.mode === modeType.light ? 1 : 0,
              transition: `opacity ${transitionDurationTiming}`,
            }}
          />
        </div>
      </div>

      {/* --- clouds --- */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: pxScale(369),
          height: pxScale(145),
          background: gradient(cloudData1, 'rgb(255,255,255)'),
          opacity: switched.mode === modeType.light ? 1 : 0,
          transition:
            switched.mode === modeType.light
              ? `opacity 300ms 200ms ease-out`
              : `opacity 300ms ease-out`,
          zIndex: 15,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: pxScale(369),
          height: pxScale(145),
          background: gradient(cloudData2, 'rgb(200,200,200)'),
          opacity: switched.mode === modeType.light ? 1 : 0,
          transition:
            switched.mode === modeType.light
              ? `opacity 300ms 200ms ease-out`
              : `opacity 300ms ease-out`,
          zIndex: 12,
        }}
      />

      {/* --- stars --- */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          opacity: switched.mode === modeType.dark ? 1 : 0,
          transition:
            switched.mode === modeType.dark
              ? `opacity 300ms 200ms ease-out`
              : `opacity 300ms ease-out`,
          zIndex: 15,
        }}
      >
        {starData.map((el, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: pxScale(el[0]),
              top: pxScale(el[1]),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SvgStar scale={(el[2] * scale) / 4} color="rgb(250,250,250)" />
          </div>
        ))}
      </div>
    </div>
  );
};
