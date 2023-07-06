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
  transitionFunction,
  pxScale,
  pxScale2,
  gradient,
} from './data/dimData';

export const SwitchDayNight3 = ({
  scale = 1,
  mode = modeType.light,
  transitionDuration = 500,
  onClick,
}) => {
  const [switched, setSwitched] = useState({
    mode: mode,
    movePos: mode === modeType.light ? 0 : pxScale2(scale, 224),
    xPos: 0,
    move: 0,
    moveDuration: transitionDuration,
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
        moveDuration: transitionDuration,
      };
    } else {
      mode = modeType.light;
      next = {
        mode,
        movePos: 0,
        move: 0,
        moveDuration: transitionDuration,
      };
    }
    setSwitched(prev => ({ ...prev, ...next }));
    onClick(mode);
  };

  const handleDragStart = (e, screen) => {
    let xPos = 0;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    setSwitched(prev => ({ ...prev, xPos, isMoving: true }));
  };

  const handleDrag = (e, screen) => {
    let xPos = null;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    if (xPos === 0) return;
    let move =
      (switched.movePos + (xPos - switched.xPos)) / pxScale2(scale, 224);
    if (move < 0) move = 0;
    if (move > 1) move = 1;
    setSwitched(prev => ({
      ...prev,
      move: move,
    }));
  };

  const handleDragEnd = (e, screen) => {
    let xPos = 0;
    if (screen === 'drag') xPos = e.clientX;
    if (screen === 'touch') xPos = e.changedTouches[0].screenX;
    let next = {};
    let move =
      (switched.movePos + (xPos - switched.xPos)) / pxScale2(scale, 224);
    if (move > 0.5) {
      mode = modeType.dark;
      next = {
        mode,
        movePos: pxScale2(scale, 224),
        move: 1,
        moveDuration: (1 - move) * transitionDuration,
      };
    } else {
      mode = modeType.light;
      next = {
        mode,
        movePos: 0,
        move: 0,
        moveDuration: move * transitionDuration,
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
          ? transitionFunction(switched.moveDuration, 'background-color')
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
            ? transitionFunction(switched.moveDuration, 'transform')
            : null,
          zIndex: 20,
        }}
        onDragStart={e => handleDragStart(e, 'drag')}
        onTouchStart={e => handleDragStart(e, 'touch')}
        onDrag={e => handleDrag(e, 'drag')}
        onTouchMove={e => handleDrag(e, 'touch')}
        onDragEnd={e => handleDragEnd(e, 'drag')}
        onTouchEnd={e => handleDragEnd(e, 'touch')}
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
              ? transitionFunction(switched.moveDuration, 'opacity')
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
                ? transitionFunction(switched.moveDuration, [
                    'transform',
                    'background-color',
                  ])
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
            ? transitionFunction(switched.moveDuration, ['top', 'left'])
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
            ? transitionFunction(switched.moveDuration, ['top', 'left'])
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
            ? transitionFunction(switched.moveDuration, ['top', 'left'])
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
