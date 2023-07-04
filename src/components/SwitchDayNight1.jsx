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
  pxScale2,
  gradient,
} from './data/dimData';

export const SwitchDayNight1 = ({
  scale = 1,
  mode = modeType.light,
  onClick,
}) => {
  const [switched, setSwitched] = useState({
    mode: mode,
    movePos: mode === modeType.light ? 0 : pxScale2(scale, 224),
    xPos: 0,
    move: 0,
    isMoving: false,
  });

  const handleClick = e => {
    let next = {};
    if (switched.mode === 'light') {
      mode = modeType.dark;
      next = {
        mode,
        movePos: pxScale2(scale, 224),
        move: 1,
      };
    } else {
      mode = modeType.light;
      next = {
        mode,
        movePos: 0,
        move: 0,
      };
    }
    setSwitched(prev => ({ ...prev, ...next }));
    onClick(mode);
  };

  const handleDragStart = e => {
    setSwitched(prev => ({ ...prev, xPos: e.clientX, isMoving: true }));
  };

  const handleDrag = e => {
    let move =
      (switched.movePos + (e.clientX - switched.xPos)) / pxScale2(scale, 224);
    if (move < 0) move = 0;
    if (move > 1) move = 1;
    setSwitched(prev => ({
      ...prev,
      move: move,
    }));
  };

  const handleDragEnd = e => {
    let next = {};
    let move =
      (switched.movePos + (e.clientX - switched.xPos)) / pxScale2(scale, 224);
    if (move > 0.5) {
      mode = modeType.dark;
      next = {
        mode,
        movePos: pxScale2(scale, 224),
        move: 1,
      };
    } else {
      mode = modeType.light;
      next = {
        mode,
        movePos: 0,
        move: 0,
      };
    }
    setSwitched(prev => ({ ...prev, ...next, isMoving: false }));
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
        backgroundColor: `rgb(
          ${51 - switched.move * 55}, 
          ${103 - switched.move * 103}, 
          ${193 - switched.move * 159})`,
        boxShadow: `
            0 ${pxScale(scale, 10)} ${pxScale(scale, 15)} rgb(0, 0, 0) inset,
            0 ${pxScale(scale, 5)} ${pxScale(scale, 3)} rgb(250, 250, 250),
            0 ${pxScale(scale, 4)} ${pxScale(scale, 3)} rgb(0, 0, 0)`,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        transition: !switched.isMoving
          ? `background-color ${transitionDurationTiming}`
          : null,
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {/* --- sun / moon --- */}
      <div
        style={{
          position: 'absolute',
          left: pxScale(scale, -125),
          transform: `translateX(${switched.move * 55}%)`,
          width: pxScale(scale, 400),
          height: pxScale(scale, 400),
          borderRadius: '50%',
          transition: !switched.isMoving
            ? `transform ${transitionDurationTiming}`
            : null,
          zIndex: 20,
        }}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
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
            opacity: 1 - switched.move * 0.4,
            transition: !switched.isMoving
              ? `opacity ${transitionDurationTiming}`
              : null,
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
              transform: `translate(${-50 + switched.move * 100}%, -50%)`,
              width: pxScale(scale, 120),
              height: pxScale(scale, 120),
              borderRadius: pxScale(scale, 60),
              backgroundColor: `rgb(
                ${229 - switched.move * 229}, 
                ${195 - switched.move * 195}, 
                ${41 - switched.move * 49})`,
              boxShadow: `
                ${pxScale(scale, -3)} ${pxScale(scale, -4)} 
                  ${pxScale(scale, 4)} rgb(150, 150, 150) inset,
                ${pxScale(scale, 3)} ${pxScale(scale, 4)} 
                  ${pxScale(scale, 4)} rgb(250, 250, 250) inset`,
              transition: !switched.isMoving
                ? `transform ${transitionDurationTiming}, 
                  background-color ${transitionDurationTiming}`
                : null,
            }}
          />
        </div>
      </div>

      {/* --- clouds --- */}
      <div
        style={{
          position: 'absolute',
          left: `${switched.move * 10}%`,
          top: `${switched.move * 100}%`,
          width: pxScale(scale, 369),
          height: pxScale(scale, 145),
          background: gradient(scale, cloudData1, 'rgb(255,255,255)'),
          transition: !switched.isMoving
            ? `top ${transitionDurationTiming}, 
              left ${transitionDurationTiming}`
            : null,
          zIndex: 15,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: `${switched.move * 10}%`,
          top: `${switched.move * 100}%`,
          width: pxScale(scale, 369),
          height: pxScale(scale, 145),
          background: gradient(scale, cloudData2, 'rgb(200,200,200)'),
          transition: !switched.isMoving
            ? `top ${transitionDurationTiming}, 
              left ${transitionDurationTiming}`
            : null,
          zIndex: 12,
        }}
      />

      {/* --- stars --- */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: `${-10 + switched.move * 10}%`,
          top: `${-100 + switched.move * 100}%`,
          transition: !switched.isMoving
            ? `top ${transitionDurationTiming}, 
              left ${transitionDurationTiming}`
            : null,
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
