import { useState } from 'react';
import {
  cloudData1,
  cloudData2,
  moonData1,
  moonData2,
  starData,
} from './data/imageData';
import { SvgStar } from './data/SvgStar';
import {
  modeType,
  transitionDurationTiming,
  pxScale,
  gradient,
} from './data/dimData';

export const SwitchDayNight1 = ({
  scale = 1,
  mode = modeType.light,
  onClick,
}) => {
  const [switched, setSwitched] = useState({ mode: mode, move: 0 });

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
        minWidth: pxScale(scale, 369),
        width: pxScale(scale, 369),
        minHeight: pxScale(scale, 145),
        height: pxScale(scale, 145),
        borderRadius: pxScale(scale, 72.5),
        backgroundColor: switched.mode === 'light' ? '#3367c1' : '#002',
        boxShadow: `
            0 ${pxScale(scale, 10)} ${pxScale(scale, 15)} rgb(0, 0, 0) inset,
            0 ${pxScale(scale, 5)} ${pxScale(scale, 3)} rgb(250, 250, 250),
            0 ${pxScale(scale, 4)} ${pxScale(scale, 3)} rgb(0, 0, 0)`,
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
          left: pxScale(scale, -125),
          transform:
            switched.mode === 'light' ? `translateX(0)` : `translateX(55%)`,
          width: pxScale(scale, 400),
          height: pxScale(scale, 400),
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
              rgba(255, 255, 255, 0.40), 
              rgba(255, 255, 255, 0.40) 30%,
              rgba(255, 255, 255, 0.25) 35%,
              rgba(255, 255, 255, 0.25) 48%,
              rgba(255, 255, 255, 0.15) 53%,
              rgba(255, 255, 255, 0.15) 65%,
              rgba(255, 255, 255, 0) 70%)`,
            opacity: switched.mode === modeType.light ? 1 : 0.6,
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
            width: pxScale(scale, 120),
            height: pxScale(scale, 120),
            borderRadius: pxScale(scale, 60),
            boxShadow: `${pxScale(scale, 5)} ${pxScale(scale, 5)} 
                ${pxScale(scale, 9)} rgb(30, 30, 30)`,
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
              width: pxScale(scale, 120),
              height: pxScale(scale, 120),
              borderRadius: pxScale(scale, 60),
              background: `
                  ${gradient(scale, moonData1, 'rgb(155, 155, 155)')}, 
                  ${gradient(scale, moonData2, 'rgb(130, 130, 130)')}, 
                  radial-gradient(
                    circle at ${pxScale(scale, 60)} ${pxScale(scale, 60)}, 
                    rgb(200,200,200) 100%, transparent 100%)`,
              boxShadow: `
                  ${pxScale(scale, -3)} ${pxScale(scale, -4)} 
                    ${pxScale(scale, 4)} rgb(150, 150, 150) inset,
                  ${pxScale(scale, 3)} ${pxScale(scale, 4)} 
                    ${pxScale(scale, 4)} rgb(250, 250, 250) inset`,
            }}
          />
          {/* sun */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform:
                switched.mode === 'light'
                  ? 'translate(-50%, -50%)'
                  : 'translate(50%, -50%)',
              width: pxScale(scale, 120),
              height: pxScale(scale, 120),
              borderRadius: pxScale(scale, 60),
              backgroundColor:
                switched.mode === modeType.light
                  ? 'rgb(229, 195, 41)'
                  : 'rgb(200, 200, 200)',
              boxShadow:
                switched.mode === modeType.light
                  ? `
                    ${pxScale(scale, -3)} ${pxScale(scale, -4)} 
                      ${pxScale(scale, 4)} rgb(150, 150, 150) inset,
                    ${pxScale(scale, 3)} ${pxScale(scale, 4)} 
                      ${pxScale(scale, 4)} rgb(250, 250, 250) inset`
                  : null,
              transition: `transform ${transitionDurationTiming}, 
                  background-color ${transitionDurationTiming}`,
            }}
          />
        </div>
      </div>

      {/* --- clouds --- */}
      <div
        style={{
          position: 'absolute',
          left: switched.mode === modeType.light ? '0' : '10%',
          top: switched.mode === modeType.light ? '0' : '100%',
          width: pxScale(scale, 369),
          height: pxScale(scale, 145),
          background: gradient(scale, cloudData1, 'rgb(255,255,255)'),
          transition: `top ${transitionDurationTiming}, 
              left ${transitionDurationTiming}`,
          zIndex: 15,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: switched.mode === modeType.light ? '0' : '10%',
          top: switched.mode === modeType.light ? '0' : '100%',
          width: pxScale(scale, 369),
          height: pxScale(scale, 145),
          background: gradient(scale, cloudData2, 'rgb(200,200,200)'),
          transition: `top ${transitionDurationTiming}, 
              left ${transitionDurationTiming}`,
          zIndex: 12,
        }}
      />

      {/* --- stars --- */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: switched.mode === modeType.dark ? 0 : '-10%',
          top: switched.mode === modeType.dark ? 0 : '-100%',
          transition: `top ${transitionDurationTiming}, 
              left ${transitionDurationTiming}`,
          zIndex: 15,
        }}
      >
        {starData.map((el, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: pxScale(scale, el[0]),
              top: pxScale(scale, el[1]),
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
