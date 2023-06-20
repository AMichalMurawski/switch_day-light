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
  [380, 50, 18],
];
const moonData1 = [
  [58, 30, 12],
  [40, 70, 20],
  [88, 83, 12],
];
const moonData2 = [
  [58.7, 29.3, 12.5],
  [40.7, 69.3, 20.5],
  [88.7, 82.3, 12.5],
];
const starData = [
  [38, 38, 0.5],
  [70, 20, 1.5],
  [75, 60, 1],
  [40, 120, 0.5],
  [50, 110, 0.5],
  [80, 125, 0.5],
  [160, 35, 0.5],
  [150, 60, 0.5],
  [170, 110, 1.5],
  [205, 90, 0.5],
  [210, 40, 2],
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

export const SwitchDayLight = ({ scale }) => {
  const [switched, setSwitched] = useState({ mode: 'light', move: 0 });

  const pxScale = px => {
    return `${scale * px}px`;
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
    console.log('clicked');
    if (switched.mode === 'light') setSwitched({ mode: 'dark' });
    if (switched.mode === 'dark') setSwitched({ mode: 'light' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: pxScale(20) }}>
      {/* ======== Switch ======== */}
      <div
        style={{
          position: 'relative',
          minWidth: pxScale(369),
          width: pxScale(369),
          minHeight: pxScale(145),
          height: pxScale(145),
          borderRadius: pxScale(72.5),
          backgroundColor: switched.mode === 'light' ? '#3367c1' : '#000',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
        onClick={handleClick}
      >
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
            borderRadius: pxScale(200),
            background: `radial-gradient(
            rgba(255, 255, 255, 0.25), 
            rgba(255, 255, 255, 0.25) 35%,
            rgba(255, 255, 255, 0.15) 40%,
            rgba(255, 255, 255, 0.15) 53%,
            rgba(255, 255, 255, 0.05) 58%,
            rgba(255, 255, 255, 0.05) 62%,
            rgba(255, 255, 255, 0) 74%)`,
            transition: 'transform 300ms',
            zIndex: 20,
          }}
        >
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
            ${pxScale(-2)} ${pxScale(-4)} ${pxScale(
                4
              )} rgb(150, 150, 150) inset,
            ${pxScale(2)} ${pxScale(4)} ${pxScale(4)} rgb(250, 250, 250) inset,
            ${pxScale(5)} ${pxScale(5)} ${pxScale(9)} rgb(30, 30, 30)`,
              zIndex: 10,
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: pxScale(369),
            height: pxScale(145),
            background: gradient(cloudData1, 'rgb(255,255,255)'),
            zIndex: 15,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: pxScale(369),
            height: pxScale(145),
            background: gradient(cloudData2, 'rgb(200,200,200)'),
            zIndex: 12,
          }}
        />
      </div>
      {/* ======== Light switch ======== */}
      <div
        style={{
          position: 'relative',
          minWidth: pxScale(369),
          width: pxScale(369),
          minHeight: pxScale(145),
          height: pxScale(145),
          borderRadius: pxScale(72.5),
          backgroundColor: '#3367c1',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: pxScale(-125),
            width: pxScale(400),
            height: pxScale(400),
            borderRadius: pxScale(200),
            background: `radial-gradient(
            rgba(255, 255, 255, 0.25), 
            rgba(255, 255, 255, 0.25) 35%,
            rgba(255, 255, 255, 0.15) 40%,
            rgba(255, 255, 255, 0.15) 53%,
            rgba(255, 255, 255, 0.05) 58%,
            rgba(255, 255, 255, 0.05) 62%,
            rgba(255, 255, 255, 0) 74%)`,
            zIndex: 20,
          }}
        >
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
            ${pxScale(-2)} ${pxScale(-4)} ${pxScale(
                4
              )} rgb(150, 150, 150) inset,
            ${pxScale(2)} ${pxScale(4)} ${pxScale(4)} rgb(250, 250, 250) inset,
            ${pxScale(5)} ${pxScale(5)} ${pxScale(9)} rgb(30, 30, 30)`,
              zIndex: 10,
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: pxScale(369),
            height: pxScale(145),
            background: gradient(cloudData1, 'rgb(255,255,255)'),
            zIndex: 15,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: pxScale(369),
            height: pxScale(145),
            background: gradient(cloudData2, 'rgb(200,200,200)'),
            zIndex: 12,
          }}
        />
      </div>
      {/* ======== Dark switch ======== */}
      <div
        style={{
          position: 'relative',
          minWidth: pxScale(369),
          width: pxScale(369),
          minHeight: pxScale(145),
          height: pxScale(145),
          borderRadius: pxScale(72.5),
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: pxScale(95),
            width: pxScale(400),
            height: pxScale(400),
            borderRadius: pxScale(200),
            background: `radial-gradient(
            rgba(255, 255, 255, 0.25), 
            rgba(255, 255, 255, 0.25) 35%,
            rgba(255, 255, 255, 0.15) 40%,
            rgba(255, 255, 255, 0.15) 53%,
            rgba(255, 255, 255, 0.05) 58%,
            rgba(255, 255, 255, 0.05) 62%,
            rgba(255, 255, 255, 0) 74%)`,
            zIndex: 20,
          }}
        >
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
            ${pxScale(-2)} ${pxScale(-4)} ${pxScale(
                4
              )} rgb(150, 150, 150) inset,
            ${pxScale(2)} ${pxScale(4)} ${pxScale(4)} rgb(250, 250, 250) inset,
            ${pxScale(5)} ${pxScale(5)} ${pxScale(9)} rgb(30, 30, 30)`,
              zIndex: 10,
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
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
              <SvgStar scale={el[2] * scale} color="rgb(250,250,250)" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
