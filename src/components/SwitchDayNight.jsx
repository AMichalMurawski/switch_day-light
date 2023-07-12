import {
  cloudData1b,
  cloudData2b,
  moonData1b,
  moonData2b,
  starDatab,
} from './data/imageData';
import { SvgStar } from './data/SvgStar';
import { transitionFunction, pxScale3, gradient2 } from './data/dimData';
import { useEffect } from 'react';

export const SwitchDayNight = ({ props }) => {
  const {
    height,
    switched,
    handleClick,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleMove,
  } = props;
  let { width } = props;

  width =
    width < 2 * height ? 2 * height : width > 4 * height ? 4 * height : width;

  useEffect(() => {
    if (switched.isMoving === false) {
      if (switched.move > 0.5) {
        switched.move = 1;
      } else {
        switched.move = 0;
      }
      handleMove(switched.move);
    }
  }, [switched.isMoving]);

  return (
    <div
      style={{
        position: 'relative',
        minWidth: pxScale3(1, width),
        width: pxScale3(1, width),
        minHeight: pxScale3(1, height),
        height: pxScale3(1, height),
        borderRadius: pxScale3(1 / 2, height),
        backgroundColor: `rgb(
          ${51 - switched.move * 55}, 
          ${103 - switched.move * 103}, 
          ${193 - switched.move * 159})`,
        boxShadow: `
            0 ${pxScale3(1 / 15, height)} 
              ${pxScale3(1 / 10, height)} rgb(0, 0, 0) inset,
            0 ${pxScale3(1 / 30, height)} 
              ${pxScale3(1 / 50, height)} rgb(250, 250, 250),
            0 ${pxScale3(1 / 35, height)} 
              ${pxScale3(1 / 50, height)} rgb(0, 0, 0)`,
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
          left: pxScale3(-0.88, height),
          transform: `translateX(${pxScale3(switched.move, width - height)})`,
          width: pxScale3(2.76, height),
          height: pxScale3(2.76, height),
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
              rgba(255, 255, 255, 0.40) 32%,
              rgba(255, 255, 255, 0.25) 36%,
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
            width: pxScale3(0.8, height),
            height: pxScale3(0.8, height),
            borderRadius: pxScale3(0.4, height),
            boxShadow: `${pxScale3(1 / 45, height)} ${pxScale3(1 / 45, height)} 
                ${pxScale3(1 / 30, height)} rgb(30, 30, 30)`,
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
              width: pxScale3(0.8, height),
              height: pxScale3(0.8, height),
              borderRadius: pxScale3(0.4, height),
              background: `
                ${gradient2(height, height, moonData1b, 'rgb(155, 155, 155)')}, 
                ${gradient2(height, height, moonData2b, 'rgb(130, 130, 130)')}, 
                radial-gradient( circle at
                  ${pxScale3(1 / 5, height)} ${pxScale3(1 / 5, height)}, 
                  rgb(200,200,200) 100%, transparent 100%)`,
              boxShadow: `
                ${pxScale3(-1 / 50, height)} ${pxScale3(-1 / 35, height)} 
                  ${pxScale3(1 / 35, height)} rgb(150, 150, 150) inset,
                ${pxScale3(1 / 50, height)} ${pxScale3(1 / 35, height)} 
                  ${pxScale3(1 / 35, height)} rgb(250, 250, 250) inset`,
            }}
          />
          {/* sun */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(${-50 + switched.move * 100}%, -50%)`,
              width: pxScale3(0.8, height),
              height: pxScale3(0.8, height),
              borderRadius: pxScale3(0.4, height),
              backgroundColor: `rgb(
                ${229 - switched.move * 229}, 
                ${195 - switched.move * 195}, 
                ${41 - switched.move * 49})`,
              boxShadow: `
                ${pxScale3(-1 / 50, height)} ${pxScale3(-1 / 35, height)} 
                  ${pxScale3(1 / 35, height)} rgb(150, 150, 150) inset,
                ${pxScale3(1 / 50, height)} ${pxScale3(1 / 35, height)} 
                  ${pxScale3(1 / 35, height)} rgb(250, 250, 250) inset`,
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
          width: pxScale3(1, width),
          height: pxScale3(1, height),
          background: gradient2(width, height, cloudData1b, 'rgb(255,255,255)'),
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
          width: pxScale3(1, width),
          height: pxScale3(1, height),
          background: gradient2(width, height, cloudData2b, 'rgb(200,200,200)'),
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
        {starDatab.map((el, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: pxScale3(el[0], width - height),
              top: pxScale3(el[1], height),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SvgStar scale={(el[2] * height) / 100} color="rgb(250,250,250)" />
          </div>
        ))}
      </div>
    </div>
  );
};
